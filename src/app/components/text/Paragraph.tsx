interface Props {
    text: string;
    className?: string | null;
}

const Paragraph = ({ text, className }: Props) => {
    return <p className={`text__paragraph-default font__weight-400 mb-0 ${className}`}>{text}</p >
}

export default Paragraph;