import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import PrimaryButton from "../../../app/components/buttons/PrimaryButton";
import FormItem from "../../../app/components/form/FormItem";
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

    const handleLoginOrRegisterAccount = () => {
        currentPage === AccountPageType.LOGIN_PAGE
            ? onLogin(loginAccount)
            : onRegister(registerAccount)
    }

    return <div className="w-100">
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <Form>
                    {
                        currentPage === AccountPageType.REGISTER_PAGE &&
                        <>
                            <FormItem
                                label={FIRST_NAME}
                                name={"firstName"}
                                isValid={!!registerAccount.firstName}
                                onChange={evt => setRegisterAccount(prev => ({ ...prev, firstName: evt.target.value }))}
                            />

                            <FormItem
                                label={LAST_NAME}
                                name={"lastName"}
                                onChange={evt => setRegisterAccount(prev => ({ ...prev, lastName: evt.target.value }))}
                            />
                        </>
                    }

                    <FormItem
                        label={EMAIL_ADDRESS}
                        name={"email"}
                        type={EMAIL_INPUT_TYPE}
                        onChange={evt => {
                            currentPage === AccountPageType.LOGIN_PAGE
                                ? setLoginAccount(prev => ({ ...prev, email: evt.target.value }))
                                : setRegisterAccount(prev => ({ ...prev, email: evt.target.value }))
                        }}
                    />

                    <FormItem
                        label={PASSWORD}
                        name={"password"}
                        type={PASSWORD_INPUT_TYPE}
                        onChange={evt => {
                            currentPage === AccountPageType.LOGIN_PAGE
                                ? setLoginAccount(prev => ({ ...prev, password: evt.target.value }))
                                : setRegisterAccount(prev => ({ ...prev, password: evt.target.value }))
                        }}
                    />

                    {
                        currentPage === AccountPageType.REGISTER_PAGE &&
                        <FormItem
                            label={CONFIRM_PASSWORD}
                            name={"confirmPassword"}
                            type={PASSWORD_INPUT_TYPE}
                            onChange={evt => setRegisterAccount(prev => ({ ...prev, confirmPassword: evt.target.value }))}
                        />
                    }

                    <PrimaryButton
                        label={currentPage === AccountPageType.LOGIN_PAGE ? LOGIN : REGISTER}
                        className="mt-3 w-100"
                        onClick={handleLoginOrRegisterAccount}
                    />
                </Form >
            </Col>
        </Row>
    </div>
}

export default LoginForm;