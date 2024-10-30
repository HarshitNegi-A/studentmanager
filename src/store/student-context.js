import React from "react";

const StudentContext=React.createContext({
    students:[],
    count:0,
    mode:'',
    currentStudent:{},
    setCurrentStudent:(student)=>{},
    changeMode:(newMode)=>{},
    addCount:()=>{},
    delCount:()=>{},
    addStudent:(student)=>{},
    removeStudent:(id)=>{},
    updateStudent:(updatedStudent)=>{}
})

export default StudentContext;