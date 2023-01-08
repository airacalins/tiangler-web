import { Button as BSButton } from "react-bootstrap";

interface Props {
    label: string;
    className: string;
    onClick: () => void;
}

const Button = ({ label, className, onClick }: Props) => (
    <BSButton
        className={className}
        onClick={onClick}
    >
        {label}
    </BSButton>
)

export default Button;