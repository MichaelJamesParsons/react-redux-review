import React from 'react'
import CourseRow from './CourseRow'

const CourseList = ({courses}) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>&nsbp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseRow key={course.id} course={course} />
        )}
      </tbody>
    </table>
  )
}

export default CourseList
