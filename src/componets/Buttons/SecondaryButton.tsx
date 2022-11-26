import Button from "./Button";

interface Props {
    label: string;
    className?: string;
    onClick: () => void;
}
function SecondaryButton({ label, className }: Props) {
    return <Button
        label={label}
        className={`btn__secondary ${className ? className : ''}`}
        onClick={() => { }}
    />
}

export default SecondaryButton;