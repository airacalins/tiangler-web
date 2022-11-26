import { Col, Form, Row } from "react-bootstrap";
import PrimaryButton from "../../componets/Buttons/PrimaryButton";
import VerticalSpace from "../../componets/Spacer/VerticalSpace";
import Header1 from "../../componets/Text/Header1";
import Header5 from "../../componets/Text/Header5";

function LoginPage() {
    var appName = "Tiangler"

    return <div className="display__row vh-100">
        <div className="w-50 background__color--primary">
        </div>

        <div className="d-flex flex-column w-50 justify-content-center align-items-center">
            <Header1 text={"Tiangler"} />

            <VerticalSpace height={5} />

            <div className="w-100">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Text className="w-10">Email Address</Form.Text>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Text>Password</Form.Text>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <PrimaryButton
                                label={"Submit"}
                                className="mt-3 w-100"
                                onClick={function (): void {
                                    throw new Error("Function not implemented.");
                                }}
                            />
                        </Form >


                    </Col>
                </Row>
            </div>


        </div >
    </div >
}

export default LoginPage;