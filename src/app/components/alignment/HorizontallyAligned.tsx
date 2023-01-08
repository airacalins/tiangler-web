import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const HorizontallyAligned = ({ children }: Props) => (
    <div className="d-flex align-items-center" >
        {children}
    </div>
);

export default HorizontallyAligned;