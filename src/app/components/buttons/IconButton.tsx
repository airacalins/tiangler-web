import { Button } from "react-bootstrap";

interface Props {
    color: string,
    icon: JSX.Element,
    onClick: () => void,
}

const IconButton = ({ color, icon, onClick }: Props) => (
    <Button
        className={`btn__icon--${color}`}
        onClick={() => onClick()}
    >
        {icon}
    </Button>
)

export default IconButton;