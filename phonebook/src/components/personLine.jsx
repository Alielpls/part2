const PersonLine = ({person}) =>{
    // console.log(person);
    return(
        <div>
            <li> {person.name} - {person.number}</li>
        </div>
    )
}

export default PersonLine