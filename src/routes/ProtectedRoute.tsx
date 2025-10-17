import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}: any) => {
    const token = JSON.parse(sessionStorage.getItem("token") as string);

  return token ? children : <Navigate to="/login" />
}