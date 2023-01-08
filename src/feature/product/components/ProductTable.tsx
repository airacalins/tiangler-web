import HorizontallyAligned from "../../../app/components/alignment/HorizontallyAligned";
import SecondaryButton from "../../../app/components/buttons/SecondaryButton";
import HorizontalSpace from "../../../app/components/spacer/HorizontalSpace";
import VerticalSpace from "../../../app/components/spacer/VerticalSpace";
import Table from "../../../app/components/table/Table";
import Small from "../../../app/components/text/Small";
import { ACTIONS, COST, GROUP, IMAGE, LOW_STOCK_LEVEL, NAME, PRICE, PRODUCTS, STOCKS } from "../../../app/utilities/stringsConstant";

interface Props {
    onOpenForm: () => void;
}

const products = [
    {
        name: "Iphone 14 Pro Max",
        image: "",
        group: "",
        const: 100,
        price: 1000,
        stocks: 2,
        lowStockLevel: 2,
        actions: 3,
    }
]

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
        <HorizontallyAligned
            children={
                <>
                    <SecondaryButton
                        label={"+"}
                        onClick={onOpenForm}
                    />
                    <HorizontalSpace width={3} />
                    <Small text={"25 items"} />
                </>
            }
        />

        <VerticalSpace height={5} />

        <Table
            headers={productTableTitles}
            body={
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
            }
        />
    </>
}

export default ProductTable;