import './style.css'
import navbar from './components/Navbar/Navbar';
import footer from './components/Footer/Footer';
import { products } from './components/Products/Products';
import { filtersTemplateAndEventListeners } from './components/Filters/Filters';
import { PRODUCTS } from './constants';

const loadApplication = () => {
    navbar();
    products(PRODUCTS);
    filtersTemplateAndEventListeners();
    footer();
}

loadApplication();

    
