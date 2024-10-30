import classes from "./App.module.css"
import React, { useContext, useState } from "react"
import StudentForm from "./StudentForm"
import StudentList from "./StudentList"
import StudentContext from "../store/student-context"

function App() {

  const [formIsShown,setFormIsShown]=useState(false)

  const studentCtx=useContext(StudentContext)

  const showFormHandler=()=>{
    setFormIsShown(true)
  }
  const hideFormHandler=()=>{
    setFormIsShown(false)
  }


  return ( <React.Fragment>
    {formIsShown && <StudentForm onClose={hideFormHandler}/>}
    <div className={classes.main}>
      <h1 className={classes.heading}>STUDENT MANAGER</h1>
      <p>All Students: {studentCtx.students.length}</p>
      <button onClick={showFormHandler}>ADD NEW STUDENT</button>
    </div>
    <h2>All Students</h2>
    <StudentList onClick={showFormHandler}/>
    </React.Fragment>
  );
}

export default App;
