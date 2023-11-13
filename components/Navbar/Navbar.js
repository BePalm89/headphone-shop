import './Navbar.css';

const template = () => {
    return `
      <nav class="flex-container-row pr-l pl-l">
        <div>
          <a href="#">
            <img class="logo" src="/favicon/headphone.jpg" alt="logo" />
          </a>
        </div>
        <ul class="flex-container-row">
            <li class="pl-xs pt-xs pr-xs pb-xs">
                <a href="#">
                    <img src="/icons/profile.png">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/icons/favorite.png">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/icons/cart.png">
                </a>
            </li>
            <li id="filter-icon">
                <a href="#">
                    <img src="/icons/filters.png">
                </a>
            </li>
        </ul>
      </nav>
    `
}

const handleFilterSection = () => {
    const asideElement = document.querySelector('aside');
    asideElement.classList.toggle("open")
}

const navbar = () => {
    document.querySelector("header").innerHTML = template();

    const filterButton = document.querySelector('#filter-icon');
    filterButton.addEventListener('click', handleFilterSection)
}

export default navbar;
  
