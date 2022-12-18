import Center from "../../app/components/container/Center";
import NavigationContainer from "../../app/components/container/NavigationContainer";
import Header5 from "../../app/components/text/Header5";

const LedgerPage = () => {
    return <NavigationContainer
        contents={
            <Center
                children={<Header5 text={"This feature will be available soon."} />}
            />
        }
    />
}

export default LedgerPage;