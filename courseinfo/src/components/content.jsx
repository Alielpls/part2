import Part from './part'

const Content = ({parts}) => {
console.log(parts)
    return(
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part}/>
            )}
        </div>
    )
}

export default Content