import React from 'react'
import {Container, Row, Col, NavLink} from 'react-bootstrap'


function Footer({data}){
    return(
    <section className='footer'>
    <Container>
    <Row>
    {data.footer.map((footerMenu, i) => (
        <Col lg='3' key={i}>
            <h5>{footerMenu.heading}</h5>
            <ul>
            {
               footerMenu.links.map((links, i)=>(
                <li key={i}>
                    <a>{links.href}</a>
                </li>
               )) 
            }
            </ul>
        </Col>
    ))}
     
    </Row>
    </Container>
    </section>
    )
    }
export default Footer;