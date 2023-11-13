export const PRODUCTS = [
    {
        id: 1,
        name: 'JBL TUNE 510BT',
        price: 300,
        seller: 'JBL',
        description: 'Wireless noise canceling over-ear headphones',
        type: 'wireless',
        numberOfReviews: 10,
        rating: 5,
        colors: ['red', 'blue', 'white', 'black'],
        imgUrl: '/products-images/photo-1.jpg'
    },
    {
        id: 2,
        name: 'Sony WH-CH520',
        price: 39,
        seller: 'SONY',
        description: 'Cable noise canceling over-ear headphones',
        type: 'cable',
        numberOfReviews: 14,
        rating: 5,
        colors: ['blue', 'white', 'black', 'pink'],
        imgUrl: '/products-images/photo-2.jpg'
    },
    {
        id: 3,
        name: 'Sony mdr-zx110',
        price: 9.99,
        seller: 'SONY',
        description: 'Cable headphones',
        type: 'cable',
        numberOfReviews: 147,
        rating: 4,
        colors: ['pink', 'skyblue', 'black', 'white'],
        imgUrl: '/products-images/photo-3.jpg'
    },
    {
        id: 4,
        name: 'JBL Tune Buds',
        price: 99.99,
        seller: 'JBL',
        description: 'True Wireless Noise Canceling Headphones',
        type: 'internal',
        numberOfReviews: 177,
        rating: 5,
        colors: ['blue', 'black', 'white'],
        imgUrl: '/products-images/photo-4.jpg'
    },
    {
        id: 5,
        name: 'Bose QuietComfort Earbuds',
        price: 262,
        seller: 'Bose',
        description: 'Bluetooth Wireless Noise Reduction Headphones',
        type: 'cable',
        numberOfReviews: 77,
        rating: 3,
        colors: ['blue', 'black', 'white'],
        imgUrl: '/products-images/photo-5.jpg'
    },
    {
        id: 6,
        name: 'Bose QuietComfort 45',
        price: 362,
        seller: 'Bose',
        description: 'Cable Noise Reduction Headphones',
        type: 'cable',
        numberOfReviews: 97,
        rating: 3,
        colors: ['black', 'white'],
        imgUrl: '/products-images/photo-6.jpg'
    },
    {
        id: 7,
        name: 'Bose QuietComfort Ultra',
        price: 252,
        seller: 'Bose',
        description: 'Bluetooth Wireless Noise Reduction Headphones',
        type: 'gaming',
        numberOfReviews: 178,
        rating: 4,
        colors: ['black', 'white'],
        imgUrl: '/products-images/photo-7.jpg'
    },
    {
        id: 8,
        name: 'MAJOR IV',
        price: 149,
        seller: 'Marshall',
        description: 'Bluetooth Wireless Noise Reduction Headphones',
        type: 'wireless',
        numberOfReviews: 178,
        rating: 4,
        colors: ['black'],
        imgUrl: '/products-images/photo-8.jpg'
    },
    {
        id: 9,
        name: 'MOTIF A.N.C.',
        price: 199,
        seller: 'Marshall',
        description: 'Bluetooth Wireless Noise Reduction Headphones',
        type: 'wireless',
        numberOfReviews: 138,
        rating: 4,
        colors: ['black'],
        imgUrl: '/products-images/photo-9.jpg'
    },
    {
        id: 10,
        name: 'MONITOR II A.N.C.',
        price: 299,
        seller: 'Marshall',
        description: 'Bluetooth Wireless Noise Reduction Headphones',
        type: 'wireless',
        numberOfReviews: 209,
        rating: 4,
        colors: ['black'],
        imgUrl: '/products-images/photo-10.jpg'
    },
    {
        id: 11,
        name: 'Sony WH-CH720N',
        price: 78,
        seller: 'SONY',
        description: 'Bluetooth Wireless Noise Reduction Headphones',
        type: 'wireless',
        numberOfReviews: 109,
        rating: 3,
        colors: ['black', 'white', 'red', 'blue'],
        imgUrl: '/products-images/photo-11.jpg'
    },
    {
        id: 12,
        name: 'JBL Tune Flex Ghost',
        price: 99.99,
        seller: 'JBL',
        description: 'True Wireless Noise Canceling Headphones',
        type: 'gaming',
        numberOfReviews: 69,
        rating: 4,
        colors: ['black', 'white'],
        imgUrl: '/products-images/photo-12.jpg'
    },
]

export const SOCIAL_NETWORK = [
    {
        id: 'linkedin',
        icon: '/icons/linkedin.svg',
        url: 'https://www.linkedin.com/in/claudia-palmerini-b01a99136/'
    },
    {
        id: 'github',
        icon: '/icons/github.svg',
        url: 'https://github.com/BePalm89'
    },
    {
        id: 'portfolio',
        icon: '/icons/portfolio.png',
        url: 'https://bepalm-portfolio.netlify.app/'
    }
]

export const FILTERS = [{label: 'active filters', value: 'active'}, {label: 'max price', value: 'price'}, {label: 'sellers', value: 'sellers'}];

export const SELLERS_OPTIONS = PRODUCTS.filter((product, index) => {
    return index === PRODUCTS.findIndex((el => el.seller === product.seller));
}).map(el => el.seller);