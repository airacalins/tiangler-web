import Paragraph from "./Paragraph";

interface Props {
    text: string;
}

function Small({ text }: Props) {
    return <p className="text__paragraph-small font__weight-400">{text}</p >
}

export default Small;