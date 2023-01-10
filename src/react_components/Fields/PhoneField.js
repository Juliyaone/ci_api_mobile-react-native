import {Field} from "formik";


export const PhoneField = ({label, name, placeholder}) => {
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
