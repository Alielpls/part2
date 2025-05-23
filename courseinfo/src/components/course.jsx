import Header from './header'
import Content from './content'
import Total from './total'

const Course = ({course}) =>{
    
    const reduceTotal = (sum, part) =>{
        return sum + part.exercises 
    }
    return(
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />    
            <Total total={course.parts.reduce(reduceTotal,0)}/>
        </div>
    )
}

export default Course