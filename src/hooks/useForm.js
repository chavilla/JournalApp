import { useState } from "react";


const  useForm= (initialState={}) => {
    
    const [value,setValue]=useState(initialState);

    const reset=(setnewForm = initialState )=>{
        setValue(setnewForm)
    }

    const handleChange=({target})=>{
        setValue({
            ...value,
            [target.name]:target.value
        });
    }

    return [value, handleChange, reset];
}
 
export default useForm;