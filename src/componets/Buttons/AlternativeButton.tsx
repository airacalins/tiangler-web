import Button from "./Button";

interface Props {
    label: string;
    className?: string;
    onClick: () => void;
}

function AlternativeButton({ label, className, onClick }: Props) {
    return <Button
        label={label}
        className={`btn__alternative ${className ? className : ''}`}
        onClick={onClick}
    />
}

export default AlternativeButton;