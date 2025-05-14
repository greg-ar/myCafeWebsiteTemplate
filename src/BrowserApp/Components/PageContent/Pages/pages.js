import LocationPinIcon from '@mui/icons-material/LocationPin';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PhoneIcon from '@mui/icons-material/Phone';
import HomePage from './HomePage/HomePage';
import LocationPage from './LocationPage/LocationPage';
import MenuPage from './MenuPage/MenuPage';
import ContactPage from './ContactPage/ContactPage';

export const pages = [
    {label:'Home',     path:'/',         navicon:null,                   component:<HomePage />     },
    {label:'Location', path:'/location', navicon:<LocationPinIcon/>,     component:<LocationPage /> },
    {label:'Menu',     path:'/menu',     navicon:<RestaurantMenuIcon/>,  component:<MenuPage />     },
    {label:'Contact',  path:'/contact',  navicon:<PhoneIcon/>,           component:<ContactPage />  },
]