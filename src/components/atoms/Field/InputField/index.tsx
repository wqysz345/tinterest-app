import styles from "./InputField.module.scss";

import cn from 'clsx';
import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const InputField = ({className, ...props}: InputFieldProps) => {

    const fieldRef = React.useRef<HTMLInputElement>(null);
    const [fieldValue, setFieldValue] = React.useState('');

    const onFieldTyping = () => {
        if (!fieldRef.current) {
            console.log('Field is not available');
            return;
        }

        if (fieldRef.current.value != '')
        {
            setFieldValue(fieldRef.current.value);
        } else {
            setFieldValue('');
        }
    }

    return (
        <input
            ref={fieldRef}
            {...props}
            className={
                cn(
                    className, styles.input_container__field,
                    [fieldValue != '' && '!border-blue-500']
                )
            }
            onChange={() => onFieldTyping()}
        />
    )
}