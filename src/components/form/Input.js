import style from './Input.module.css';


function Input ({name, type, value, handleOnChange, number, text, placeholder}) {

    return(
        <div className={style.input_container}>
            <label htmlFor={name}>{text}</label>
            <input name={name} text={text} value={value} type={type} onChange={handleOnChange} number={number} placeholder={placeholder} />
        </div>
    )
}

export default Input;