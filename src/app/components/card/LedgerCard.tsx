import { CASH } from "../../utilities/stringsConstant"
import HorizontalSpace from "../spacer/HorizontalSpace"
import Header2 from "../text/Header2"
import Header5 from "../text/Header5"

interface Props {
    title: string,
    amount: number
}

const LedgerCard = ({ title, amount }: Props) => (
    <div className="card p-3 w-100">
        <Header5 text={title} />
        <HorizontalSpace width={6} />
        <Header2 text={amount.toString()} />
    </div>
)

export default LedgerCard