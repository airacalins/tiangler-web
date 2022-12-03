import Header from "./Header";

interface Props {
    text: string;
}

function Header5({ text }: Props) {
    return <Header text={text} className="text__header--5 font__weight--500" />
}

export default Header5;