import PersonLine from "./personLine"

const Person = ({filteredPersons, deleteLine}) => {
    return(
        <ul>
            {filteredPersons.map(person=> <PersonLine key={person.id} person={person} deleteLine={deleteLine} />)}
        </ul>
    )
}

export default Person