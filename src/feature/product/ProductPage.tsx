import SecondaryButton from "../../app/componets/Buttons/SecondaryButton";
import NavigationContainer from "../../app/componets/Container/NavigationContainer";
import HorizontalSpace from "../../app/componets/Spacer/HorizontalSpace";
import VerticalSpace from "../../app/componets/Spacer/VerticalSpace";
import Header2 from "../../app/componets/Text/Header2";
import Small from "../../app/componets/Text/Small";
import { PRODUCTS } from "../../app/utilities/stringsConstant";
import ProductTable from "./components/ProductTable";

function ProductPage() {
    return <NavigationContainer
        title={PRODUCTS}
        contents={
            <>
                <div className="d-flex align-items-center">
                    <SecondaryButton
                        label={"+"}
                        onClick={() => { }}
                    />
                    <HorizontalSpace width={3} />
                    <Small text={"25 items"} />
                </div>
                <VerticalSpace height={5} />
                <ProductTable />
            </>
        }
    />
}

export default ProductPage;