import Header from "./Header";

interface Props {
    text: string;
}

const Header1 = ({ text }: Props) => (
    <Header
        text={text}
        className="text__header--1 font__weight--500"
    />
)

export default Header1;