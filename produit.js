
function Product(pic,city,price){
    this.pic = pic;
    this.city = city;
    this.price =price;
}

const product1 = new Product('Maison1.jpg', 'Paris', 1500);
const product2 = new Product('Maison2.jpg', 'Paris', 1300);
const product3 = new Product('Maison3.jpg', 'Paris', 1800);
const product4 = new Product('Maison4.jpg', 'lond', 1500);
const product5 = new Product('Maison5.jpg', 'New York', 2500);
const product6 = new Product('Maison6.jpg', 'New York', 3500);

let products = [];
products.push(product1,product2,product3,product4,product5,product6);

function populateTableListe(){
    let listOfProcuts = "";
    products.forEach(prod=>
        listOfProducts += `
          <tr class="text-center">
            <td><img src=${prod.pic} class="img-fluid img-thumbnail w-50"></td>
            <td class="w-25 align-middle">${prod.name}</td>
            <td class="w-25 align-middle">${prod.price}€</td>
            <td class="w-25 align-middle"><button class="btn btn-info">View</button></td>
          </tr>
          `   
      )
     
    document.getElementById('productList').innerHTML = listOfProducts;
}



