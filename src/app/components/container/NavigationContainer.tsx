import { ReactNode } from "react";
import { APP_NAME } from "../../utilities/stringsConstant";
import SideNav from "../sideNav/SideNav";
import VerticalSpace from "../spacer/VerticalSpace";
import Header2 from "../text/Header2";
import { Image } from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";
import HorizontalSpace from "../spacer/HorizontalSpace";



interface Props {
    title?: string
    contents: ReactNode;
}

const NavigationContainer = ({ title, contents }: Props) => {
    return <div className="vh-100">
        <div className="d-flex align-items-center justify-content-between bg__color--primary px-3" style={{ height: 64 }}>
            <p className="app-name-styles m-0">{APP_NAME}</p>
            <div className="d-flex align-items-center">
                <Image
                    thumbnail
                    roundedCircle src="https://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    style={{ height: 24, width: 24 }}
                />
                <HorizontalSpace width={4} />
                <BoxArrowRight className="color__white" size={24} />
            </div>
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
        </div></div >
}

export default NavigationContainer;