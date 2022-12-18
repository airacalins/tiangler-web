import Button from "./Button";

interface Props {
    label: string;
    className?: string;
    onClick: () => void;
}

const PrimaryButton = ({ label, className, onClick }: Props) => {
    return <Button
        label={label}
        className={`btn__primary ${className ? className : ''}`}
        onClick={onClick}
    />
}

export default PrimaryButton;