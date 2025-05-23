import PersonLine from "./personLine"

const Person = ({filteredPersons}) => {
    return(
        <ul>
            {filteredPersons.map(person=> <PersonLine key={person.id} person={person} />)}
        </ul>
    )
}

export default Person