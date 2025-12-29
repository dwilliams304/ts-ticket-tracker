import { Outlet } from "react-router-dom";
import { Navigate } from "react-router";


type ProtectedRouteProps = {
    isAllowed: boolean;
    redirectPath?: string;
    children?: React.ReactNode;
}

export default function ProtectedRoute({
    isAllowed,
    redirectPath ="/",
    children
}: ProtectedRouteProps){

    if(!isAllowed) return <Navigate to={redirectPath} replace />
    else return children ? children : <Outlet />
}