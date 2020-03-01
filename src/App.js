import React from "react";
import EmployeList from "./components/userlist";
import UniqueID from "react-html-id";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  ButtonGroup,
  Modal
} from "react-bootstrap";

const employRoll = [
  "UI/UX",
  "UI Developer",
  "Frontend Developer",
  "Backend Developer"
];
class App extends React.Component {
  constructor(props) {
    super(props);
    UniqueID.enableUniqueIds(this);
    this.state = {
      id: this.nextUniqueId(),
      firstName: "",
      lastName: "",
      email: "",
      selectedVal: "ui/ux",
      employe: "",
      modalShow: false,
      showeEmpId: 0,
      data: [
        {
          id: this.nextUniqueId(),
          firstName: "shivraj",
          lastName: "sharma",
          email: "shivrajsharma@gmail.com",
          selectedVal: "ui/ux",
          employe: "good"
        },
        {
          id: this.nextUniqueId(),
          firstName: "shomesh",
          lastName: "sharma",
          email: "shomeshsharma@gmail.com",
          selectedVal: "ui/ux",
          employe: "good"
        }
      ]
    };
    this.initialstate = {
      id: this.nextUniqueId(),
      firstName: "",
      lastName: "",
      email: "",
      selectedVal: "select",
      employe: ""
    };
    this.HandleEvents = this.HandleEvents.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleEmployee = this.deleEmployee.bind(this);
    this.setModalShow = this.setModalShow.bind(this);
    this.setModalHide = this.setModalHide.bind(this);
  }
  setModalShow(id) {
    this.setState({
      modalShow: true,
      showeEmpId: id
    });
  }
  setModalHide() {
    this.setState({
      modalShow: false
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const dataList = {
      id: this.nextUniqueId(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      selectedVal: this.state.selectedVal,
      employe: this.state.employe
    };
    this.setState({
      data: [...this.state.data, dataList]
    });
  }

  HandleEvents(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }
  deleEmployee(index, e) {
    const emp = Object.assign([], this.state.data);
    emp.splice(index, 1);
    this.setState({
      data: emp
    });
  }
  render() {
    console.log(this.state.showeEmpId);
    const {showeEmpId} = this.state
    
    return (
      <div className="App" style={{ marginTop: "40px", marginBottom: "40px" }}>
        {this.state.data.length  ? (
        <Modal
          show={this.state.modalShow}
          onHide={this.setModalHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {this.state.data[showeEmpId].firstName+' '+ this.state.data[showeEmpId].lastName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>selectedVal</th>
                  <th>employee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.data[showeEmpId].firstName}</td>
                  <td>{this.state.data[showeEmpId].lastName}</td>
                  <td>{this.state.data[showeEmpId].email}</td>
                  <td>{this.state.data[showeEmpId].selectedVal}</td>
                  <td>{this.state.data[showeEmpId].employe}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
        ):('')
  }
        <Container>
          <Row>
            <Col lg={{ span: "8", offset: "2" }}>
              <EmployeList
                EmployeData={this.state.data}
                deleEmployee={this.deleEmployee}
                viewEmployee={this.setModalShow}
              />
            </Col>
            <Col lg={{ span: "8", offset: "2" }}>
              <h3>Add Employee</h3>
              <br />
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    value={this.state.firstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect3">
                  <Form.Label>Employee Roll</Form.Label>
                  <Form.Control
                    multiple={false}
                    value={this.state.selectedVal}
                    as="select"
                    name="selectedVal"
                    onChange={this.HandleEvents}
                  >
                    {employRoll.map((Emplloyrolle, i) => (
                      <option key={i}>{Emplloyrolle}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>About Employee</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="About Employee"
                    rows="3"
                    name="employe"
                    value={this.state.employe}
                    onChange={this.HandleEvents}
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Add Employee
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
