import React, { useState } from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, Card, CardBody } from 'reactstrap';
import SurveyComponent from './components/survey';
import defaultSurveyConfig from './config/survey';
import axios from 'axios';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    return (
        <>
            <Navbar color="primary" dark expand="md">
                <Container>
                    <NavbarBrand>Survey Website</NavbarBrand>
                    <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
                    <Collapse isOpen={navbarOpen} navbar>
                        <Nav className="me-auto" navbar></Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Container>
            <Card className="mt-1">
                    <CardBody>
                        <SurveyComponent 
                            css={defaultSurveyConfig.defaultSurveyCSS}
                            data={defaultSurveyConfig.defaultSurveyDATA}
                            json={defaultSurveyConfig.defaultSurveyJSON}
                            onComplete={(survey: any) => {
                                console.log(survey.data);
                                console.log(JSON.stringify(survey.data));
                                axios.post('http://127.0.0.1:5000/answer',/** Replace with your backend url (must have /answer) */
                                JSON.stringify(survey.data),
                                {
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                                .then((response) => {
                                    console.log(response.data);
                                    console.log(response.status);
                                    console.log(response.statusText);
                                    console.log(response.headers);
                                    console.log(response.config);
                                });
                            }}
                        />
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default Application;