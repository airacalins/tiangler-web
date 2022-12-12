import Table from "react-bootstrap/esm/Table";
import SecondaryButton from "../../../app/componets/Buttons/SecondaryButton";
import HorizontalSpace from "../../../app/componets/Spacer/HorizontalSpace";
import VerticalSpace from "../../../app/componets/Spacer/VerticalSpace";
import Small from "../../../app/componets/Text/Small";
import { ACTIONS, COST, GROUP, IMAGE, LOW_STOCK_LEVEL, NAME, PRICE, STOCKS } from "../../../app/utilities/stringsConstant";

interface Props {
    onOpenForm: () => void;
}

function ProductTable({ onOpenForm }: Props) {

    const productTableTitles = [
        IMAGE,
        NAME,
        GROUP,
        COST,
        PRICE,
        STOCKS,
        LOW_STOCK_LEVEL,
        ACTIONS,
    ];

    return <>
        <div className="d-flex align-items-center">
            <SecondaryButton
                label={"+"}
                onClick={onOpenForm}
            />
            <HorizontalSpace width={3} />
            <Small text={"25 items"} />
        </div>
        <VerticalSpace height={5} />
        <Table striped bordered hover>
            <thead>
                <tr>
                    {
                        productTableTitles.map((title, index) =>
                            <th key={index} className="py-3">
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
    </>
}

export default ProductTable;