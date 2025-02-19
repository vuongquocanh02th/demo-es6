//Muc tieu 1: Phan biet let va const
let city = "Ha Noi";
city = "HCM";
console.log(city);

const country = "Lao";
//country = "VN"; => Bao loi
console.log(country);
//Ket luan: let cho phep thay doi gia tri, const ko cho phep

//Muc tieu 2: Viet ham bang Arrow Function
const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello('Fuck'));

const welcome = () => `Welcome to the hell!`;
console.log(welcome());
//Ket luan: Arrow function giup ham ngan va de doc hon

//Muc tieu 3: Su dung template literals
const ten = 'Phong';
const tuoi = 23;
const tp = 'Ha Noi';
const intro = `Toi ten la ${ten}. Nam nay toi ${tuoi} tuoi, song o ${tp}`;
console.log(intro);

//Tao chuoi html bang literals
const html = `
    <h1>Hello Fuck</h1>
    <p>Welcome to the hell!</p>`
console.log(html);
//Ket luan: literal su dung dau ``(backtick) giup viet chuoi nhieu dong va noi suy de dang


//Muc tieu 4: Lam viec voi Destructuring
//1: Destructuring doi tuong
const product = {name: 'Laptop', price: 100, brand: 'Dell'};
const {name, price} = product;
console.log(name);
console.log(price);

//2: Destructuring mang
const colors = ['red', 'green', 'yellow', 'blue'];
const [c1, c2] = colors;
console.log(c1);
console.log(c2);
//Ket luan: Destructuring giup trich xuat gia tri tu doi tuong hoac mang de dang hon


//Muc tieu 5: Su dung Spread va Rest Operator
//1: Sao chep mang voi spread operator:
const fruits = ['apple', 'banana'];
const newFruits = [...fruits, 'fuck'];
console.log(newFruits);

//2: Viet ham tinh tong cac so bang rest operator
const sumAll = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(sumAll(1, 2, 3, 4));
//Ket luan: spread operator sao chep va mo rong mang, doi tuong
//Rest operator gom cac tham so thanh 1 mang

//Muc tieu 6: Lam viec voi Map, Filter, Reduce
//1: Dung map de nhan doi cac so trong mang
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);
//2: Dung filter de lay so chan
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
//3: Dung reduce de tinh tong
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum);
//Ket luan: map de bien doi mang, filter de loc, reduce de gop gia tri

//Muc tieu 7: Van dung kien thuc

const array = (arr) => {
    //Nhan doi cac so trong mang
    const doubl = arr.map((n) => n * 2);
    //Loc cac so lon hon 5
    const overFive = doubl.filter((n) => n > 5);
    //Tinh tong cac so con lai
    const total = overFive.reduce((a, b) => a + b, 0);
    return total;
}
console.log(array([1,2,3,4,5]));

