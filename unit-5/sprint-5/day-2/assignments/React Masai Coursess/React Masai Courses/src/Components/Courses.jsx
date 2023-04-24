// code goes here
// do a default export
import React from "react";
import styles from "./UserCard.css";

function Course(){
    return<div>
      
        <div>
        <h2>Full Time Courses</h2>
        <ol>
            <li>Full Stack Web Development</li>
           <ul>
           <li>Eligibility:18-28 yrs</li>
            <li>Duration:30Weeks</li>
           </ul>
        </ol>
        </div>

        <div>
       <h2>Part Time Courses</h2>
        <ol>
            <li>Full Stack Web development</li>
           <ul>
           <li>Eligibility:18-28 yrs</li>
            <li>Duration:30Weeks</li>
           </ul>
           <li>Data Analytics</li>
           <ul>
           <li>Eligibility:18-28 yrs</li>
            <li>Duration:30Weeks</li>
           </ul>
        </ol>
        </div>
    
    </div>
}
export default Course;