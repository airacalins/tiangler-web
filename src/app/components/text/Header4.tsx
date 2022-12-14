import Header from "./Header";

interface Props {
    text: string;
}

const Header4 = ({ text }: Props) => (
    <Header
        text={text}
        className="text__header--4 font__weight--400"
    />
)

export default Header4;