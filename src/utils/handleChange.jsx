
const handleChange = (e, type) => {
    const newState = {}
    newState[type] = e.target.value
    this.setState(newState)
}

export default handleChange