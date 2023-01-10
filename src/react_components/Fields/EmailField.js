import {Field} from "formik";


export const EmailField = ({label, name, placeholder}) => {
    if (!label) {
        label = name
    }
    return (
            <Field
                id={name}
                name={name}
                component="input"
                placeholder={placeholder}
                type="email"
                label={label}
            />
    )
}
