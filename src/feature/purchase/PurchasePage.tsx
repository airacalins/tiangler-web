import Center from "../../app/componets/Container/Center";
import NavigationContainer from "../../app/componets/Container/NavigationContainer";
import Header5 from "../../app/componets/Text/Header5";

const PurchasePage = () => {
    return <NavigationContainer
        contents={
            <Center
                children={<Header5 text={"This feature will be available soon."} />}
            />
        }
    />
}

export default PurchasePage;