import Header from "./Header";

interface Props {
    text: string;
}

function Header4({ text }: Props) {
    return <Header text={text} className="text__header--4 font__weight--400" />
}

export default Header4;