import { Button as BSButton } from "react-bootstrap";

interface Props {
    label: string;
    className: string;
    onClick: () => void;
}

function Button({ label, className, onClick }: Props) {
    return <BSButton className={className} onClick={onClick} >
        {label}
    </BSButton>
}

export default Button;