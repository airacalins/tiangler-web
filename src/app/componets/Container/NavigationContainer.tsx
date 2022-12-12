import { ReactNode } from "react";
import { APP_NAME } from "../../utilities/stringsConstant";
import SideNav from "../SideNav/SideNav";
import VerticalSpace from "../Spacer/VerticalSpace";
import Header2 from "../Text/Header2";

interface Props {
    title?: string
    contents: ReactNode;
}

function NavigationContainer({ title, contents }: Props) {
    return <div className="vh-100">
        <div className="d-flex align-items-center bg__color--primary px-3" style={{ height: 60 }}>
            <p className="app-name-styles m-0">{APP_NAME}</p>
        </div>

        <div className="d-flex">
            <div className="bg__color--white" style={{ width: "15%" }}>
                <SideNav />
            </div>

            <div className="w-100 bg__color--grey1 px-4">
                <VerticalSpace height={5} />
                {
                    title && <>
                        <Header2 text={title} />
                        <VerticalSpace height={3} />
                    </>
                }
                <div className="bg__color--white p-4">
                    {contents}
                </div>
            </div>
        </div></div>
}

export default NavigationContainer;