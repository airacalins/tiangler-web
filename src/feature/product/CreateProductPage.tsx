import NavigationContainer from "../../app/components/container/NavigationContainer";
import { ADD_PRODUCT } from "../../app/utilities/stringsConstant";
import ProductForm from "./components/ProductForm";

const CreateProductPage = () => {
    return <NavigationContainer
        title={ADD_PRODUCT}
        contents={<ProductForm />}
    />
}

export default CreateProductPage;