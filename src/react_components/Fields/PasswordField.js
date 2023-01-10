import {Field} from "react-final-form";


export const PasswordField = ({label, name, placeholder}) => {
    return (
        <div>
            <label>{label}</label>
            <Field
                name={name}
                component="input"
                placeholder={placeholder}
                type="password"
            />
        </div>
    )
}