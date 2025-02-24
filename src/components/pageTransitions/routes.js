import { lazy } from "react";

const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));


const pageTransitionsRoutes = [
    { title: 'Home', path: 'home', component: Home },
    { title: 'Products', path: 'products', component: Products },
    { title: 'Contact', path: 'contact', component: Contact },
    { title: 'About', path: 'about', component: About },
]

export default pageTransitionsRoutes;