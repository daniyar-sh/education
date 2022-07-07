function CheckboxItem({item, handleChange}) {
    return(
        <div>
            <input type="checkbox" onChange={(e) => handleChange(e, item)}/>
            <span>{item}</span>
        </div>
    )
}

export default CheckboxItem