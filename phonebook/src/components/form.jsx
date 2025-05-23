import Input from "./input"

const Form = (props) =>{
    return(
        <form onSubmit={props.addName}>
            <h2>Add a new</h2>
            <Input inputName={'Name'} value={props.newName} onChange={props.handleNameChange} />
            <Input inputName={'Number'} value={props.newNumber} onChange={props.handleNumberChange} />
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form