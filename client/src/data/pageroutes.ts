import TestUserAuthenticationPage from "../components/common/TestUserAuthenticationPage"
import { 
    Dashboard,
    TicketPage
} from "../components/pages"
import TicketBoard from "../components/pages/TicketBoard/TicketBoard"

import { PageRouteType } from "../types"

export const PageRoutes: PageRouteType[] = [
    {
        path: "/dashboard",
        element: Dashboard,
        protectedRoute: false
    },
    {
        path: "/:boardName/ticket/:ticketID",
        element: TicketPage,
        protectedRoute: false
    },
    {
        path: "/:boardName",
        element: TicketBoard,
        protectedRoute: false
    },
    {
        path: "/auth",
        element: TestUserAuthenticationPage,
        protectedRoute: true,
        redirPath: "/dashboard"
    }
]