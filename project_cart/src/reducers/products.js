let initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://salt.tikicdn.com/ts/product/39/1f/f8/4512fe9898661b5f3746f91370a22158.jpg',
        price: 500,
        description: 'Design by Apple',
        inventory: 10,
        rating : 3
    },
    {
        id: 2,
        name: 'Iphone 11 pro',
        image: 'https://csmobiles.com/27945-large_default/apple-iphone-11-pro-max-64gb-gris.jpg',
        price: 1200,
        description: 'Design by Apple',
        inventory: 10,
        rating: 5
    },
    {
        id: 3,
        name: 'Iphone Xs max',
        image: 'https://bizweb.dktcdn.net/100/112/815/products/xs-max-vang-86d20f37-92ab-4803-9b02-1ba2726618bf.png?v=1558422064420',
        price: 1000,
        description: 'Design by Apple',
        inventory: 10,
        rating: 4
    },
]

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}
export default products