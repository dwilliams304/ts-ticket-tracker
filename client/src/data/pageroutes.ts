import { 
    Home, 
} from "../components/pages"

import { PageRouteType } from "../types"

export const PageRoutes: PageRouteType[] = [
    {
        path: "/",
        element: Home,
        protectedRoute: false
    }
]