import Modal from "./UI/Modal";
import classes from "./StudentForm.module.css"
import { useContext, useEffect, useState } from "react";
import StudentContext from "../store/student-context";

const StudentForm=(props)=>{

    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    
    const studentCtx=useContext(StudentContext)

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const obj={
            id:phone,
            name:name,
            phone:phone,
            address:address,
        }
        if(studentCtx.mode==='Add'){
            studentCtx.addStudent(obj)
        }
        else{
            studentCtx.updateStudent(obj)
            studentCtx.changeMode('Add')
        }
        
        props.onClose()
    }
    useEffect(() => {
        if (studentCtx.mode === "Update" && studentCtx.currentStudent) {
          setName(studentCtx.currentStudent.name)
          setPhone(studentCtx.currentStudent.phone)
          setAddress(studentCtx.currentStudent.address)
        } else {
            setName('')
            setPhone('')
            setAddress('')
        }
      }, [studentCtx.mode, studentCtx.currentStudent]);

    return ( <Modal onCLose={props.onClose}>
    <form className={classes.form} onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input value={name} type="text" id="name" onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
        <label htmlFor="phno">Mobile:</label>
        <input value={phone} type="text" id="phno" onChange={(e)=>{setPhone(e.target.value)}}/><br/><br/>
        <label htmlFor="add">Address:</label>
        <input value={address} type="text" id="add" onChange={(e)=>{setAddress(e.target.value)}}/><br/><br/>
        <button type="submit">{studentCtx.mode}</button>
        <button type="click" onClick={props.onClose}>Close</button>
    </form>
    </Modal>

    )
}

export default StudentForm;