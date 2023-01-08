import Header from "./Header";

interface Props {
    text: string;
}

const Header2 = ({ text }: Props) => (
    <Header
        text={text}
        className="text__header--2 font__weight--500"
    />
)

export default Header2;