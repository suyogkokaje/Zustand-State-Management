import React, {useState} from 'react'
import useCourseStore from '../app/store'

const CourseForm = () => {
    const addCourse = useCourseStore((state)=>state.addCourse)

    const [title,setTitle] = useState("")
    console.log("course form rendered")

    const handleCourseSubmit = ()=>{
        if(!title)
            return alert("please add a course title");
        addCourse({
            id:Math.ceil(Math.random()*10000000),
            title:title
        })
        setTitle("")
    }

  return (
    <div className="form-container">
        <input 
            value={title}
            className="form-input"
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
        />
        <button 
            className="form-submit-btn" 
            onClick={()=>{
                handleCourseSubmit();
            }}
        >
                Add Course
        </button>
    </div>
  )
}

export default CourseForm