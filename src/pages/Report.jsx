import React from 'react'
import count from "../assets/count.png"
import users from "../assets/users.png"
import payment from "../assets/payment.png"
import course from "../assets/course.png"
const Report = () => {
  return (
    <div className='report-page'>
      <div className="students-rep">
      <img src={count} alt="students report" />
      </div>
      <div className="users-rep">
        <img src={users} alt="users report" />
      </div>
      <div className="payments">
        <img src={payment} alt="payment report" />
      </div>
      <div className="course">
        <img src={course} alt="course report" />
      </div>
    </div>
  )
}

export default Report