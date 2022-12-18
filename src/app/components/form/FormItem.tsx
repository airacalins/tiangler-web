import { useState } from "react";
import { Form } from "react-bootstrap";
import { MANDATORY_FIELDS } from "../../utilities/stringsConstant";

interface Props {
    label: string,
    name: string,
    type?: "text" | "email" | "password" | "text",
    isValid?: boolean;
    errorMessage?: string,
    onChange: (evt: any) => void;
}

const FormItem = ({ label, name, type, isValid = true, errorMessage = MANDATORY_FIELDS, onChange }: Props) => {
    const [isTouched, setIsTouched] = useState(false);

    return <Form.Group className="mb-3">
        <Form.Text>{label}</Form.Text>
        <Form.Control
            name={name}
            type={type}
            onChange={evt => {
                setIsTouched(true);
                onChange(evt);
            }}
        />
        <Form.Text className="text-danger">
            {isTouched && !isValid && !!errorMessage &&
                <>
                    {errorMessage}
                </>
            }
        </Form.Text>
    </Form.Group>
}

export default FormItem;