import Header from "./Header";

interface Props {
    text: string;
}

function Header3({ text }: Props) {
    return <Header text={text} className="text__header--3 font__weight--400" />
}

export default Header3;