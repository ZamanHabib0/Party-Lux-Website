import React from "react";
import { Redirect } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     return <Redirect to="/login" />;
//   }
//   return children;
// };

// export default ProtectedRoute;

// import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    // const user = useSelector((state) => state.user);
    let location = useLocation();
    const token = localStorage.getItem("authToken");

    if(!token) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;
