import './Products.css';

const templateStars = (rating, numberOfReviews) => {
    const filledStars = '<div class="star filled"></div>';
    const emptyStars = '<div class="star empty"></div>';

    const generateStarts = () => {
        const filledCount = Math.floor(rating);
        const emptyCount = 5 - filledCount;

        return filledStars.repeat(filledCount) + emptyStars.repeat(emptyCount); 
    }

    return `            
        <div class="reviews flex-container-row">
            ${generateStarts()} <span>(${numberOfReviews})</span>
        </div>`
}

const templateCard = (product) => {
    return `
        <div class="card flex-container-column" role="button">
            <div class="card-img">
                <img src="${product.imgUrl}" alt="${product.name}">
            </div>
            <div class="product-colors flex-container-row">
                ${product.colors.map(color => {
                    return `<div style="background-color:${color}" class="circle-color"></div>`
                }).join("")}
            </div>
            <div class="primary-info flex-container-row">
                <div class="info-vynil">
                    <h3>${product.name}</h3>
                </div>
                <div class="info">
                    ${product.price}€
                </div>
            </div>
            <div class="seller-info flex-container-row">
                <p>Seller:</p>
                <p class="info">${product.seller}</p>
            </div>
            <div class="description">
                <p>${product.description}</p>
            </div>
            ${templateStars(product.rating, product.numberOfReviews)}
            <div class="cta mt-s">
                <button class="pt-xs pb-xs">
                    Add to Cart
                </button>
            </div>
        </div>`;
}

const products = (produtcs) => {

    document.querySelector('.product-container').innerHTML = '';

    produtcs.forEach(product => {
        const cardHtml = templateCard(product);
        document.querySelector('.product-container').innerHTML += cardHtml;
    });
}

export { products };