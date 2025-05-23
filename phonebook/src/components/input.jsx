const Input = (props) =>{
    return(
    <div>
        {props.inputName} <input value={props.value} onChange={props.onChange} />
    </div>
    )
}

export default Input