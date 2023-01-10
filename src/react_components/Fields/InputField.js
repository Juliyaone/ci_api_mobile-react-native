import {Field} from "formik";


export const InputField = ({label, name, placeholder}) => {
    if (!label) {
        label = name
    }
    return (
            <Field
                id={name}
                name={name}
                component="input"
                placeholder={placeholder}
                type="text"
                label={label}
            />
    )
}
