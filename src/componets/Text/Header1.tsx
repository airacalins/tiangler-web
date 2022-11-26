import Header from "./Header";

interface Props {
    text: string;
}

function Header1({ text }: Props) {
    return <Header text={text} className="text__header--1 font__weight--500" />
}

export default Header1;