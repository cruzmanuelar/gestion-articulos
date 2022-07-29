import { useState } from "react";

const useForm = ( initialForm = {}) => {

    const [ formState, setFormState ] = useState(initialForm)

    const onChangeInput = ({target}) =>{
        
        const {name, value} = target;

        setFormState({
            ...formState, [name]:value
        });
    }

    const onResetForm = () =>{
        setFormState(initialForm);
    }

    return {
        ...formState, formState, onChangeInput, onResetForm
    }

}

export default useForm;