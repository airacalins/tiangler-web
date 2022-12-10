import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import agent from "../../app/api/agent";
import SecondaryButton from "../../app/componets/Buttons/SecondaryButton";
import Center from "../../app/componets/Container/Center";
import WholePageContainer from "../../app/componets/Container/WholePageContainer";
import HorizontalSpace from "../../app/componets/Spacer/HorizontalSpace";
import VerticalSpace from "../../app/componets/Spacer/VerticalSpace";
import Header1 from "../../app/componets/Text/Header1";
import Header5 from "../../app/componets/Text/Header5";
import Paragraph from "../../app/componets/Text/Paragraph";
import { AccountPageType, ICurrentLoggedInAccount, ILoginAccount, IRegisterAccount } from "../../app/types/IAccounts";
import { ALREADY_HAVE_AN_ACCOUNT, APP_NAME, DONT_HAVE_AN_ACCOUNT, LOGIN, LOGIN_PATH, LOGIN_YOUR_ACCOUNT, REGISTER_PATH, REGISTER_YOUR_ACCOUNT, SIGN_UP } from "../../app/utilities/stringsConstant";
import LoginForm from "./components/LoginForm";

interface Props {
    accountPageType: AccountPageType
}

function AccountPage({ accountPageType }: Props) {
    const [currentLoginAccount, setCurrentLoginAccount] = useState<ICurrentLoggedInAccount>();
    const [accountPage, setAccountPage] = useState<AccountPageType>(AccountPageType.LOGIN_PAGE);

    const navigate = useNavigate();

    useEffect(() => {
        setAccountPage(accountPageType);
    }, [])

    const handleLogin = (account: ILoginAccount) => {
        agent.Account.login(account).then(response => {
            localStorage.setItem('token', JSON.stringify(response.token));
        });

        agent.Account.currentUser()
            .then(response => {
                setCurrentLoginAccount(response as any);
                console.log(currentLoginAccount)
            })
            ;
    }

    const handleRegister = (account: IRegisterAccount) => {
        if (account.password != account.confirmPassword) console.log('Password is not the same with confirm password.')
        agent.Account.register(account)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err))
    }

    return <WholePageContainer children={
        <>
            <div className="d-flex justify-content-end align-items-center position-absolute" style={{ right: "24px", top: "24px" }}>
                <Paragraph text={(accountPage === AccountPageType.LOGIN_PAGE) ? DONT_HAVE_AN_ACCOUNT : ALREADY_HAVE_AN_ACCOUNT} />
                <HorizontalSpace width={4} />
                <SecondaryButton
                    label={(accountPage === AccountPageType.LOGIN_PAGE) ? SIGN_UP : LOGIN}
                    onClick={() => {
                        navigate(accountPage === AccountPageType.LOGIN_PAGE ? REGISTER_PATH : LOGIN_PATH)
                        return setAccountPage((accountPage === AccountPageType.LOGIN_PAGE) ? AccountPageType.REGISTER_PAGE : AccountPageType.LOGIN_PAGE);
                    }}
                />
            </div>

            <Center children={
                <>
                    <Header1 text={APP_NAME} />
                    <VerticalSpace height={3} />
                    <Header5 text={(accountPage === AccountPageType.LOGIN_PAGE) ? LOGIN_YOUR_ACCOUNT : REGISTER_YOUR_ACCOUNT} />
                    <VerticalSpace height={5} />
                    <LoginForm
                        currentPage={accountPage}
                        onLogin={handleLogin}
                        onRegister={handleRegister}
                    />
                </>
            } />
        </>
    } />
}

export default AccountPage;