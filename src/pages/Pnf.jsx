import React from 'react'
import { Link } from "react-router-dom";

function Pnf() {
  return (
     <div
      style={{ height: "60vh", marginTop: "50px" }}
      className="d-flex align-items-center justify-content-center flex-column"
    >
      <img
        src="https://cdn.dribbble.com/users/2449589/files/7788071a-69eb5b87401ce5932c3291355abc.gif"
        alt=""
        width="300"
      />

      <h5>Sorry, we couldn't find the page</h5>

      <Link to={"/"} className="btn btn-dark mt-4">
        Back to Home
      </Link>
    </div>
  )
}

export default Pnf