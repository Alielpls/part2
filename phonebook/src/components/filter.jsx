const Filter = (props) =>{
    // console.log(props);
    return(
        <div>
            Filter: <input value={props.filterName} onChange={props.onChange} />
        </div>
    )
}

export default Filter