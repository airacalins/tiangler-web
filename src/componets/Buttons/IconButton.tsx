import { Button } from "react-bootstrap";

interface Props {
    color: string,
    icon: JSX.Element,
    onClick: () => void,
}

function IconButton({ color, icon, onClick } : Props){
    return <Button onClick={() => onClick()} className={`btn__icon--${color}`}>
       {icon}
    </Button>
}

export default IconButton;