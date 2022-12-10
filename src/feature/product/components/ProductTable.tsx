import Table from "react-bootstrap/esm/Table";
import Small from "../../../app/componets/Text/Small";
import { ACTIONS, COST, GROUP, IMAGE, LOW_STOCK_LEVEL, NAME, PRICE, STOCKS } from "../../../app/utilities/stringsConstant";

function ProductTable() {
    const productTableTitle = [
        { key: 1, title: IMAGE },
        { key: 2, title: NAME },
        { key: 3, title: GROUP },
        { key: 4, title: COST },
        { key: 5, title: PRICE },
        { key: 6, title: STOCKS },
        { key: 7, title: LOW_STOCK_LEVEL },
        { key: 8, title: ACTIONS },
    ];

    return <Table striped bordered hover>
        <thead>
            <tr>
                {
                    productTableTitle.map(({ key, title }) =>
                        <th key={key} className="py-3">
                            {title}
                        </th>
                    )
                }
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Iphone 14 Pro Max</td>
                <td>Phone</td>
                <td>100</td>
                <td>150</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </tbody>
    </Table>
}

export default ProductTable;