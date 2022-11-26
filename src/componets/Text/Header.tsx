interface Props {
    text: string;
    className: string;
}

function Header({ text, className }: Props) {
    return <h1 className={className}>{text}</h1>
}

export default Header;