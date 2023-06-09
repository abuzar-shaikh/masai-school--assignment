import React from "react";

function App() {
  
  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* map through the data*/}            
            {[].map((item) => {
              <tr>
                  <td  className="employee-card-name"></td>
                  <td className="employee-card-department"></td>
                  <td className="employee-card-image"></td>
                  <td className="employee-card-gender"></td>
                  <td className="employee-card-salary"></td>
              </tr>
            })}            
          </tbody>
        </table>
      </div>
      {/* add your pagination here */}
      {[].map((item) => {})}      
    </div>
  );
}

export default App;
