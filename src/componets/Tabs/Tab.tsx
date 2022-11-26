import { Nav } from "react-bootstrap";
import HorizontalSpace from "../Spacer/HorizontalSpace";
import VerticalSpace from "../Spacer/VerticalSpace";
import Paragraph from "../Text/Paragraph";

interface Props {
    title: string;
    isActive: boolean;
}

function Tab({ title, isActive }: Props) {
    return <>
        <Nav.Link href="">
            <Paragraph text={title} className={isActive ? null : "color__grey--3"} />
            <VerticalSpace height={2} />
            {isActive && <div className='tab__primary-active'></div>}
        </Nav.Link>

        <HorizontalSpace width={6} />
    </>
}

export default Tab;