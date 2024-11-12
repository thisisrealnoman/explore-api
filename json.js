const user = {id:1, name: "Pixel F", job: "mobile"};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

/*
{ id: 1, name: 'Pixel F', job: 'mobile' }
{"id":1,"name":"Pixel F","job":"mobile"}
*/

const shop = {
    owner : 'Sahrukh',
    address: {
        street: '123 road',
        city: "Dhaka",
        country: "BD"
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

// console.log(shop);
const shopJSON = JSON.stringify(shop);
// console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);