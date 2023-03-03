import React from "react";
//import "./statsCounter.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Statistics = () => {
  return (
    <div>
      <div className="stats">
        <ul className="stats-bar">
          <li className="column post1">
            {/* <MdEditCalendar size={'4em'}/> */}
            <h6>Approved Posts</h6>
            <h4>50</h4>
          </li>

          <li className="column post1">
            {/* <BsPatchCheck size={'4em'}/> */}
            <h6>Pending Posts</h6>
            <h4>100</h4>
          </li>

          <li className="column post1">
            {/* <BsEye size={'4em'}/> */}
            <h6>Total Users</h6>
            <h4>5</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statistics;