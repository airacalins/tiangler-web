import Button from "./Button";

interface Props {
    label: string;
    className?: string;
    onClick: () => void;
}

function PrimaryButton({ label, className }: Props) {
    return <Button
        label={label}
        className={`btn__primary ${className ? className : ''}`}
        onClick={() => { }}
    />
}

export default PrimaryButton;