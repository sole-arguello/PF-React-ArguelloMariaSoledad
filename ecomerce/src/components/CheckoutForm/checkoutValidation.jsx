import { useState } from "react"

export const checkoutValidacion = (WrappedComponent) => {

    const CheckoutValidacion = (props) => {

        const [errors, setErrors] = useState({})
        const validateForm = () => {
            let newErrors = {}
            let isValid = true

            if(!props.dataForm.name){
                newErrors.name = 'El campo no puede estar vacio'
                isValid = false
            }
            if(!props.dataForm.phone){
                newErrors.phone = 'El campo no puede estar vacio, porfavor ingrese su numero'
                isValid = false
            }
            if(!props.dataForm.email){
                newErrors.email = 'El campo no puede estar vacio'
                isValid = false
            }
            if(!props.dataForm.emailConfirm){
                newErrors.emailConfirm = 'El campo no puede estar vacio'
                isValid = false
            }
            if(props.dataForm.emailConfirm !== props.dataForm.email){
                newErrors.email = 'Debe ingresar el mismo email'
                isValid = false
            }
            setErrors(newErrors)
            return isValid
        }
        return <WrappedComponent

                { ...props }
                errors = { errors }
                validateForm = { validateForm }
            />
    }
    return CheckoutValidacion
}