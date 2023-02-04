import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const courseStore = (set) => ({
    courses: [],//initial state


    //crud actions

    addCourse: (course) => {
        set((state) => ({ courses: [course, ...state.courses] }))
    },

    removeCourse: (courseId) => {
        set((state) => ({ courses: state.courses.filter((course) => course.id !== courseId) }))
    },

    toggleStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? { ...course, completed: !course.completed } : course)
        }))
    }
})

const useCourseStore = create(devtools
    (persist
        (courseStore, { name: "courses" })
    )
)

export default useCourseStore;