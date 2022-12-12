import Button from "./Button";

interface Props {
    label: string;
    className?: string;
    onClick: () => void;
}

const SecondaryButton = ({ label, className, onClick }: Props) => {
    return <Button
        label={label}
        className={`btn__secondary ${className ? className : ''}`}
        onClick={onClick}
    />
}

export default SecondaryButton;