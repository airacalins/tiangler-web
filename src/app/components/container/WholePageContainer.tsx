import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const WholePageContainer = ({ children }: Props) => {
    return <div className="w-100 vh-100">
        {children}
    </div>
}

export default WholePageContainer;