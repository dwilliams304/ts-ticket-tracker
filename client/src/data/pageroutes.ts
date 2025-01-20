import { 
    Home, 
    TicketPage
} from "../components/pages"

import { PageRouteType } from "../types"

export const PageRoutes: PageRouteType[] = [
    {
        path: "/",
        element: Home,
        protectedRoute: false
    },
    {
        path: "ticket/:id",
        element: TicketPage,
        protectedRoute: false
    }
]