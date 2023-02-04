import React from 'react'
import useCourseStore from '../app/store'

const CourseList = () => {
    const courses = useCourseStore((state)=>state.courses)
    const removeCourse = useCourseStore((state)=>state.removeCourse)
    const toggleStatus = useCourseStore((state)=>state.toggleStatus)

  return (
    <>
        <ul>
            {courses.map((course,id)=>{
                return (
                    <React.Fragment key={id}>    
                        <li className={`course-item`}
                            style={{
                                backgroundColor:course.completed?"#00FF0044":"white",
                                color:course.completed?"#00FF00":"black"
                            }}
                        >
                            <span className="course-item-col-1">
                                <input
                                    checked={course.completed}
                                    type="checkbox"
                                    onChange={()=>{toggleStatus(course.id)}}
                                />
                            </span>
                            <span>{course?.title}</span>
                            <button 
                                className="delete-btn"
                                onClick={()=>{
                                    removeCourse(course.id)
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>
    </>
  )
}

export default CourseList