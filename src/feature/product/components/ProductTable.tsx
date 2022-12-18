import Table from "react-bootstrap/esm/Table";
import SecondaryButton from "../../../app/components/buttons/SecondaryButton";
import HorizontalSpace from "../../../app/components/spacer/HorizontalSpace";
import VerticalSpace from "../../../app/components/spacer/VerticalSpace";
import Small from "../../../app/components/text/Small";
import { ACTIONS, COST, GROUP, IMAGE, LOW_STOCK_LEVEL, NAME, PRICE, STOCKS } from "../../../app/utilities/stringsConstant";

interface Props {
    onOpenForm: () => void;
}

const ProductTable = ({ onOpenForm }: Props) => {

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