// generate shop page
let shop = document.getElementById("product-list");

let shopItemDetails = [
  {
    id: "product-1",
    name: "Ear Rings",
    price: "$100",
    img: "img/product/product1.jpg"  
  },
  {
    id: "product-2",
    name: "Necklace",
    price: "$100",
    img: "img/product/product2.jpg"  
  },
  {
    id: "product-3",
    name: "Necklace",
    price: "$100",
    img: "img/product/product3.jpg" 
  },
  {
    id: "product-4",
    name: "Necklace",
    price: "$100",
    img: "img/product/product4.jpg" 
  },
  {
    id: "product-5",
    name: "Bangles",
    price: "$100",
    img: "img/product/product5.jpg" 
  },
  {
    id: "product-6",
    name: "Bangles",
    price: "$100",
    img: "img/product/product6.jpg" 
  },
  {
    id: "product-7",
    name: "Necklace",
    price: "$100",
    img: "img/product/product7.jpg"
  },
  {
    id: "product-8",
    name: "Necklace",
    price: "$100",
    img: "img/product/product8.jpg"
  },
  {
    id: "product-9",
    name: "Necklace",
    price: "$100",
    img: "img/product/product9.jpg"
  },
  {
    id: "product-10",
    name: "Ear Rings",
    price: "$100",
    img: "img/product/product10.jpg"
  },
  {
    id: "product-11",
    name: "Necklace",
    price: "$100",
    img: "img/product/product11.jpg"
  },
  {
    id: "product-12",
    name: "Bangles",
    price: "$100",
    img: "img/product/product12.jpg"
  },
  {
    id: "product-13",
    name: "Bangles",
    price: "$100",
    img: "img/product/product13.jpg"
  },
  {
    id: "product-14",
    name: "Bangles",
    price: "$100",
    img: "img/product/product14.jpg"
  },
  {
    id: "product-15",
    name: "Bangles",
    price: "$100",
    img: "img/product/product15.jpg"
  },
  {
    id: "product-16",
    name: "Bangles",
    price: "$100",
    img: "img/product/product16.jpg"
  },
  {
    id: "product-17",
    name: "Necklace",
    price: "$100",
    img: "img/product/product17.jpg"
  },
  {
    id: "product-18",
    name: "Necklace",
    price: "$100",
    img: "img/product/product18.jpg"
  },
  {
    id: "product-19",
    name: "Ear Rings",
    price: "$100",
    img: "img/product/product19.jpg"
  },
  {
    id: "product-20",
    name: "Necklace",
    price: "$100",
    img: "img/product/product20.jpg"
  },
]

let generateShop = () => {
  return (shop.innerHTML = shopItemDetails.map((x) => {
    let {name, price, img} = x;
    return `
    <div class="pro" onclick="window.location.href='product-description.html';">
      <img src=${img} alt="">
      <div class="description">
          <span>Jewellery</span>
          <h5 class="product-Name">${name}</h5>
          <div class="star">
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
          </div>
          <h4>${price}</h4>
      </div>
      <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
  </div>
  `;
  }).join(""));
};

generateShop();





