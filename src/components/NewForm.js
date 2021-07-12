import React, { useEffect, useState } from 'react'

const NewForm = ({ addSong }) => {
    const [title, setTitle] = useState('')
    const [age, setAge] = useState(20)
    const handleForm = (e) => {
        e.preventDefault()
        addSong(title)
        setTitle('  ')
    }
    useEffect(() => {
        console.log('Age is', age)
    }, [age])
    return (
        <form onSubmit={handleForm}>
            <label>Add song</label>
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <button>Submit</button>
            <button onClick={() => { setAge(age + 1) }}>Increase age {age}</button>
        </form>
    )
}

export default NewForm
