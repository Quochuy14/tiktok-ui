
// Lauyout
import { HeaderOnly } from "~/components/Layout"

// Pages
import { Home, Following, Profile, Upload } from "~/pages"

//Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "following", component: Following },
    { path: "profile", component: Profile },
    { path: "upload", component: Upload, layout: HeaderOnly }
]

const priviteRoutes = [

]

export { publicRoutes, priviteRoutes }