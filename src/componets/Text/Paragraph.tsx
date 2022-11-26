interface Props {
    text: string;
    className?: string | null;
}

function Paragraph({ text, className }: Props) {
    return <p className={`text__paragraph-default font__weight-400 ${className}`}>{text}</p >
}

export default Paragraph;