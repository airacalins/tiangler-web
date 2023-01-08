import { ReactNode } from "react";
import { Table as BSTable } from "react-bootstrap";
import { JsxElement } from "typescript";
import TableHeader from "./TableHeader";

interface Props {
    headers: string[],
    body: ReactNode,
}

const Table = ({ headers, body }: Props) => (
    <BSTable striped bordered hover>
        <TableHeader headers={headers} />
        {body}
    </BSTable>
)

export default Table;