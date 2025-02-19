//Khoi tao danh sach san pham
const products = [
    {id: 1, name: 'M16', price: 1500, quantity: 200},
    {id: 2, name: 'M4A1', price: 3000, quantity: 300},
    {id: 3, name: 'M249', price: 5400, quantity: 500}
];

//Su dung map va literal de hien thi danh sach san pham
const displayProducts = () =>
    products.forEach(({ id, name, price, quantity }) =>
        console.log(`ID: ${id}, Name: ${name}, Price: $${price}, Quantity: ${quantity}`)
    );

//Tinh tong gia tri hang ton kho, dung reduce
const calculateTotalValue = () => products.reduce((total, {price, quantity}) => total + price * quantity, 0);
console.log('\nTong ton kho: ', calculateTotalValue());


//Loc san pham theo gia, nhan tham so minprice va tra ve danh sach san pham >= minprice
const filterByPrice = (minPrice) => products.filter(({price}) => price >= minPrice);
console.log('\nSan pham co gia >=700: ', filterByPrice(700));

//Them san pham moi
const addProduct = (newProduct) => products.push(newProduct);
addProduct({id: 4, name: 'M60', price: 7000, quantity: 200});
console.log('\nSau khi them: ');
displayProducts();

//Xoa san pham theo Id
const removeProductById = (id) => products.splice(products.findIndex(product => product.id === id), 1);
removeProductById(2);
console.log('\nSau khi xoa: ');
displayProducts();


//Cap nhat so luong san pham
const updateQuantity = (id, newQuantity) =>
    products.map(product => (product.id === id ? { ...product, quantity: newQuantity } : product));
updateQuantity(1, 3);
console.log('\nSau khi update: ')
displayProducts();

