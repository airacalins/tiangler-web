import { JsxElement } from "typescript";

interface Props {
    children: any;
}

function Center({ children }: Props) {
    return <div className="display__center">
        {children}
    </div>
}

export default Center;