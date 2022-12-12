import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import PrimaryButton from "../../../app/componets/Buttons/PrimaryButton";
import { AccountPageType, ILoginAccount, IRegisterAccount } from "../../../app/types/IAccounts";
import { CONFIRM_PASSWORD, EMAIL_ADDRESS, EMAIL_INPUT_TYPE, EMPTY_STRING, FIRST_NAME, LAST_NAME, LOGIN, PASSWORD, PASSWORD_INPUT_TYPE, REGISTER, TEXT_INPUT_TYPE } from "../../../app/utilities/stringsConstant";

interface Props {
    currentPage: AccountPageType;
    onLogin: (account: ILoginAccount) => void;
    onRegister: (account: IRegisterAccount) => void;
}

const LoginForm = ({ currentPage, onLogin, onRegister }: Props) => {

    const loginAccountInitialData: ILoginAccount = {
        email: EMPTY_STRING,
        password: EMPTY_STRING,
    }

    const registerAccountInitialData: IRegisterAccount = {
        firstName: EMPTY_STRING,
        lastName: EMPTY_STRING,
        email: EMPTY_STRING,
        password: EMPTY_STRING,
        confirmPassword: EMPTY_STRING,
    }

    const [loginAccount, setLoginAccount] = useState<ILoginAccount>({ ...loginAccountInitialData });
    const [registerAccount, setRegisterAccount] = useState<IRegisterAccount>({ ...registerAccountInitialData });

    return <div className="w-100">
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <Form>
                    {
                        currentPage === AccountPageType.REGISTER_PAGE &&
                        <>
                            <Form.Group className="mb-3">
                                <Form.Text>{FIRST_NAME}</Form.Text>
                                <Form.Control
                                    name="firstName"
                                    type={TEXT_INPUT_TYPE}
                                    onChange={evt => setRegisterAccount(prev => ({ ...prev, firstName: evt.target.value }))}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Text>{LAST_NAME}</Form.Text>
                                <Form.Control
                                    name="lastName"
                                    type={TEXT_INPUT_TYPE}
                                    onChange={evt => setRegisterAccount(prev => ({ ...prev, lastName: evt.target.value }))}
                                />
                            </Form.Group>
                        </>
                    }

                    <Form.Group className="mb-3">
                        <Form.Text>{EMAIL_ADDRESS}</Form.Text>
                        <Form.Control
                            name="email"
                            type={EMAIL_INPUT_TYPE}
                            onChange={evt => {
                                currentPage === AccountPageType.LOGIN_PAGE
                                    ? setLoginAccount(prev => ({ ...prev, email: evt.target.value }))
                                    : setRegisterAccount(prev => ({ ...prev, email: evt.target.value }))
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Text>{PASSWORD}</Form.Text>
                        <Form.Control
                            name="password"
                            type={PASSWORD_INPUT_TYPE}
                            onChange={evt => {
                                currentPage === AccountPageType.LOGIN_PAGE
                                    ? setLoginAccount(prev => ({ ...prev, password: evt.target.value }))
                                    : setRegisterAccount(prev => ({ ...prev, password: evt.target.value }))
                            }}
                        />
                    </Form.Group>

                    {
                        currentPage === AccountPageType.REGISTER_PAGE &&
                        <Form.Group className="mb-3">
                            <Form.Text>{CONFIRM_PASSWORD}</Form.Text>
                            <Form.Control
                                name="confirmPassword"
                                type={PASSWORD_INPUT_TYPE}
                                onChange={evt => setRegisterAccount(prev => ({ ...prev, confirmPassword: evt.target.value }))}
                            />
                        </Form.Group>
                    }

                    <PrimaryButton
                        label={currentPage === AccountPageType.LOGIN_PAGE ? LOGIN : REGISTER}
                        className="mt-3 w-100"
                        onClick={() => currentPage === AccountPageType.LOGIN_PAGE
                            ? onLogin(loginAccount)
                            : onRegister(registerAccount)
                        }
                    />
                </Form >
            </Col>
        </Row>
    </div>
}

export default LoginForm;