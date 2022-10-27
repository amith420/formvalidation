import React, { useState, useRef } from 'react'
import './Form.css';


function Form() {

    const [error, setError] = useState({
        name: false, stnd: false, section: false, gender: false, dob: false
    })
    const [gender,setGender] = useState('')
    const nameRef = useRef()
    const stndRef = useRef()
    const sectionRef = useRef()
    const dobRef = useRef()

    const resultSet = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const stnd = stndRef.current.value
        const section = sectionRef.current.value
        const dob = dobRef.current.value
        if (name && stnd && section && gender && dob)
            document.write("Name: " + name + "</br></br>Class: " + stnd + "</br></br>Section: " + section + "</br></br>Gender: " + gender + "</br></br>D.O.B: " + dob)

        const fault = { ...error }
        name ? fault.name = false : fault.name = true
        stnd ? fault.stnd = false : fault.stnd = true
        section ? fault.section = false : fault.section = true
        gender ? fault.gender = false : fault.gender = true
        console.log(gender)
        dob ? fault.dob = false : fault.dob = true
        setError(fault)

        console.log(error)
    }

    const genderClick = (val) => {
        setGender(val)
    }

    return (
        <div className="form-container">
            <h2 className="h2">School Application</h2>
            <form className="form" onSubmit={resultSet}>
                <label ><strong>Name</strong></label>
                <input type="text" placeholder="enter name" className={error.name ? 'error' : ''} name="name" ref={nameRef} />
                <label ><strong>Class</strong></label>
                <input type="number" placeholder="enter className" className={error.stnd ? 'error' : ''} min="1" max="12" name="stnd" ref={stndRef} />
                <label ><strong>Section</strong></label>
                <select className={`"section-input" ${error.section ? 'error' : ''}`} name="section" ref={sectionRef}>
                    <option hidden></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <p><strong>Gender</strong></p>
                <div className="radio-input" >
                    <label >
                        <input value="male" type="radio" name="gender" onClick={()=>genderClick('male')}/>
                        Male
                    </label>
                    <label >
                        <input value="female" type="radio" name="gender" onClick={()=>genderClick('female')} />
                        Female
                    </label>
                    {error.gender && <p className="error-message">*</p>}
                </div>
                <label ><strong>D.O.B</strong></label>
                <input type="date" name="dob" className={error.dob ? 'error' : ''} ref={dobRef} />
                <input type="submit" value="Submit" className="submit-button" />
            </form>
        </div>
    )
}

export default Form