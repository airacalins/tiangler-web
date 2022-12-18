interface Props {
    text: string;
    className?: string,
}

const Small = ({ text, className }: Props) => {
    return <p className={`text__paragraph--small font__weight-400 m-0 ${className}`}>{text}</p >
}

export default Small;