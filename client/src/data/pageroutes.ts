import { 
    Home, 
} from "../components/pages"

type Route = {
    path: string;
    element: React.ElementType;
    protectedRoute: boolean;
    redirPath?: string;
}

export const PageRoutes: Route[] = [
    {
        path: "/",
        element: Home,
        protectedRoute: false
    }
]