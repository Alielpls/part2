const PersonLine = ({person, deleteLine}) =>{
    // console.log(person);
    return(
        <div>
            <li> 
                {person.name} - {person.number}
                <button onClick={()=>deleteLine(person)}> delete</button>
            </li>
          
        </div>
    )
}

export default PersonLine