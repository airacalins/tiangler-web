import NavigationContainer from "../../app/componets/Container/NavigationContainer";
import { ADD_PRODUCT } from "../../app/utilities/stringsConstant";
import ProductTable from "./components/ProductTable";

function ProductPage() {
    return <NavigationContainer
        title={ADD_PRODUCT}
        contents={
            <>
                <ProductTable />
                {/* <ProductForm /> */}
            </>
        }
    />
}

export default ProductPage;