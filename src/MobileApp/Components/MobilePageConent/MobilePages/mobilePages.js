import LocationPinIcon from '@mui/icons-material/LocationPin';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PhoneIcon from '@mui/icons-material/Phone';
import MobileMenuPage from './MobileMenuPage/MobileMenuPage';
import MobileLocationPage from './MobileLocationPage/MobileLocationPage';
import MobileContactPage from './MobileContactPage/MobileContactPage';

export const mobilePages = [
    {label:'Location', path:'/location', navicon:<LocationPinIcon/>,     component:<MobileLocationPage /> },
    {label:'Menu',     path:'/menu',     navicon:<RestaurantMenuIcon/>,  component:<MobileMenuPage />     },
    {label:'Contact',  path:'/contact',  navicon:<PhoneIcon/>,           component:<MobileContactPage />  },
]