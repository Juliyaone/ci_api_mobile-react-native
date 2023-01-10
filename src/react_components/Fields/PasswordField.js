import {Field} from "formik";


export const PasswordField = ({label, name, placeholder}) => {
    if (!label) {
        label = name
    }
    return (
        <Field
            id={name}
            name={name}
            component="input"
            placeholder={placeholder}
            type="password"
            label={label}
        />
    )
}