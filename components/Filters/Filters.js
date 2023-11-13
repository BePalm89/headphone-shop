import './Filters.css';
import {FILTERS, SELLERS_OPTIONS, PRODUCTS} from '../../constants';
import {products} from '../Products/Products'

const asideElement = document.querySelector('aside');
let filteredProducts = [...PRODUCTS];
let activeFitlers = {
    maxPrice: null,
    seller: null,
}

const templateFilterContainer = (filter) => {
    return `
        <div class="filter-container pt-s pb-s pl-l pr-l">
            <div class="title-filter pb-s">
                <h4>${filter.label.toUpperCase()}</h4>
            </div>
            <div class="filter-${filter.value}">
            </div>
        </div>
    `
}

const templatePriceFilter = () => {
    return `
    <form id="max-price-form" class="flex-container-column">
        <input id="max-price-input" type="number" placeholder="Max" class="pl-s pt-xs pb-xs"/>
        <button class="pt-xs pb-xs">search</button>
    </form>
    `
}

const templateSellerFilter = () => {
    return `
        <select name="sellers" id="sellers">
            <option value="" disabled selected hidden>Select a seller</option>
                ${SELLERS_OPTIONS.map((seller) => {
                return `<option value="${seller}">${seller}</option>`;
            })}
        </select>
    `
}

const templateActiveFilters = ({maxPrice, seller}, results, activeFilterElement ) => {
    const filterValues = [];

    if (maxPrice) {
        filterValues.push(`Max Price: ${maxPrice}€`);
    }
    if (seller) {
        filterValues.push(`Seller: ${seller}`);
    }

    const filtersTemplate = filterValues.map(value => `<div class="active mb-s pl-s pt-xs pb-xs">${value}</div>`).join('');

    activeFilterElement.innerHTML = `
        <p class="mb-s results">Results: ${results}</p>` + 
        
        filtersTemplate + `
        
        <div class="clear-container">
            <button>Clear filters</button>
        </div>
    `;
}

const generateFiltersBoxes = () => {
    FILTERS.forEach((filter) => {
        asideElement.innerHTML += templateFilterContainer(filter);
    })
}


const filterProducts = (maxPrice, sellerOption) => {
    return PRODUCTS.filter((product) => {
        const maxPriceMatched = !maxPrice ||  product.price <= maxPrice;
        const sellerMatched = !sellerOption || product.seller === sellerOption;

        return maxPriceMatched && sellerMatched;
    });
}

const handleActiveFilterVisibility = (style) => {
    const activeFilterContaier = document.querySelectorAll(".filter-container")[0];
    activeFilterContaier.style.display = style;
}

const generatePriceAndSellerTemplates = () => {
    const  priceFilterSectionElement = document.querySelector(".filter-price");
    const  sellerFilterSectionElement = document.querySelector(".filter-sellers");
    priceFilterSectionElement.innerHTML += templatePriceFilter();
    sellerFilterSectionElement.innerHTML += templateSellerFilter();
}

const addEventListenerToFilters = () => {
    const maxPriceForm = document.querySelector('#max-price-form');
    const sellerOption = document.querySelector('#sellers');
    maxPriceForm.addEventListener('submit', handleFilters);
    sellerOption.addEventListener('input', handleFilters);
}

const filtersTemplateAndEventListeners = () => {

    generateFiltersBoxes();
    
    handleActiveFilterVisibility('none');
    
    generatePriceAndSellerTemplates();

    addEventListenerToFilters();
}

const handleClearFilter = () => {
    
    document.querySelector('#max-price-input').value = "";
    document.querySelector('#sellers').value = "";
    activeFitlers = {}
    handleActiveFilterVisibility('none');

    products(PRODUCTS);
}

const handleFilters = (e) => {
    
    e.preventDefault();
    
    const maxPriceInputValue = document.querySelector('#max-price-input').value;
    const maxPriceNumber = maxPriceInputValue && Number(maxPriceInputValue);
    const sellerOption = document.querySelector('#sellers').value;

    activeFitlers = {
        maxPrice: maxPriceNumber ?? null,
        seller: sellerOption ?? null
    }

    filteredProducts = filterProducts(maxPriceNumber, sellerOption);

    if (activeFitlers) {
        handleActiveFilterVisibility("block");
        const activeFilterElement = document.querySelector('.filter-active');
        templateActiveFilters(activeFitlers, filteredProducts.length,  activeFilterElement);
    }

    if(filteredProducts.length === 0) {
        const h2Element  = document.createElement("h2");
        h2Element.textContent = "The items you want have not been found";
        h2Element.className = "pl-l";
        const mainElement = document.querySelector("main");
        mainElement.appendChild(h2Element);
    }

    const clearButton = document.querySelector('.clear-container > button');
    clearButton.addEventListener('click', handleClearFilter)

    products(filteredProducts);
}

export { filtersTemplateAndEventListeners, filterProducts };