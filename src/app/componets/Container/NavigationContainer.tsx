import { ReactNode } from "react";
import { EMPTY_STRING } from "../../utilities/stringsConstant";
import SideNav from "../SideNav/SideNav";
import VerticalSpace from "../Spacer/VerticalSpace";
import Header2 from "../Text/Header2";

interface Props {
    title?: string
    contents: ReactNode;
}

function NavigationContainer({ title, contents }: Props) {
    return <div className="vh-100">
        <div className="bg__color--primary" style={{ height: 60 }}>
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