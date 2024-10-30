import { useEffect, useState } from "react";
import StudentContext from "./student-context";

const StudentProvider=(props)=>{

    const [students,setStudents]=useState([])
    const [mode,setMode]=useState('Add')
    const [student,setStudent]=useState({
        id:'',
        name:'',
        phone:'',
        address:''
    })

    const addStudentHandler=(student)=>{
        setStudents([...students,student])
        console.log(students)
    }

    const removeStudentHandler=(id)=>{
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    }

    const changeModeHandler=(newMode)=>{
        setMode(newMode);
    }

    const handleSetCurrentStudent=(newStudent)=>{
        setStudent(newStudent)
    }

    const handleUpdateStudent=(updatedStudent)=>{
        setStudents((prevStudents) =>
            prevStudents.map((student) => (student.id === updatedStudent.id ? updatedStudent : student))
          );
    }

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem("students"));
        if (storedStudents) {
          setStudents(storedStudents);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
      }, [students]);

    const studentcontext={
        students:students,
        
        mode:mode,
        currentStudent:student,
        setCurrentStudent:handleSetCurrentStudent,
        changeMode:changeModeHandler,
        addStudent:addStudentHandler,
        removeStudent:removeStudentHandler,
        updateStudent:handleUpdateStudent,
    }
    return(<StudentContext.Provider value={studentcontext}>
        {props.children}
    </StudentContext.Provider>)
}

export default StudentProvider;