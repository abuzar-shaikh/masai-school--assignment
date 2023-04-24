// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import React from "react";
import Title from "./Components/Title";
import UserCards from "./Components/UserCard";
import Course from "./Components/Courses";
export default function App() {
  return <>
  <Title/>
  <UserCards/>
<Course/>
  </>;
}
