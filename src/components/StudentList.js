import { useContext } from "react";
import StudentContext from "../store/student-context";

const StudentList=(props)=>{

    const studentCtx=useContext(StudentContext);

    const handleDeleteButton=(id)=>{
        studentCtx.removeStudent(id)
    }

    const handleEditButton=(student)=>{
        if(props.onClick){
            props.onClick();
        }
        
        studentCtx.changeMode('Update')
        studentCtx.setCurrentStudent(student)
        
    }

    const studentlist=studentCtx.students.map((student)=>(
        <li key={student.id}>{student.name}  {student.phone}  {student.address}
          <button onClick={()=>handleDeleteButton(student.id)}>Delete</button>   
          <button onClick={()=>handleEditButton(student)}>Edit</button>
        </li>
    ))


    return (
        <div>
            {studentlist}
        </div>
    )
}

export default StudentList;