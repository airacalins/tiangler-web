import LedgerCard from "../../app/components/card/LedgerCard";
import NavigationContainer from "../../app/components/container/NavigationContainer";
import HorizontalSpace from "../../app/components/spacer/HorizontalSpace";
import { CASH, CREDIT, LEDGER } from "../../app/utilities/stringsConstant";

const LedgerPage = () => {
    return <NavigationContainer
        title={LEDGER}
        contents={
            <div className="d-flex">
                <LedgerCard title={CASH} amount={500} />
                <HorizontalSpace width={6} />
                <LedgerCard title={CREDIT} amount={50000} />
                <HorizontalSpace width={6} />
                <LedgerCard title={CREDIT} amount={250} />
            </div>
        }
    />
}

export default LedgerPage;