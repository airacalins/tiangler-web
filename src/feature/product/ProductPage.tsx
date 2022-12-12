import { useNavigate } from "react-router-dom";
import NavigationContainer from "../../app/componets/Container/NavigationContainer";
import { CREATE_PATH, PRODUCTS, PRODUCT_PATH } from "../../app/utilities/stringsConstant";
import ProductTable from "./components/ProductTable";

const ProductPage = () => {
    const navigate = useNavigate();

    const handleCreateProductFormNavigation = () => {
        navigate(`${PRODUCT_PATH}${CREATE_PATH}`);
    }

    return <NavigationContainer
        title={PRODUCTS}
        contents={<ProductTable onOpenForm={handleCreateProductFormNavigation} />}
    />
}

export default ProductPage;