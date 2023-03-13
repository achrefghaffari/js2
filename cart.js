const product = [
    {
        id: 0,
        image: 'https://images.anandtech.com/doci/16869/02_galaxyzfold3_5g_main_kv_2p_678x452.jpg',
        title: 'Z flip Foldable Mobile',
        price: 120,
        
        
    },
    {
        id: 1,
        image: 'https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/9743/1.jpg?7444',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'https://hollywood.tn/wp-content/uploads/2022/05/250D.jpg',
        title: '250D DSLR camera',
        price: 230,
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/I/71VR6c3j2bL._SL1500_.jpg',
        title: 'Head Phone',
        price: 100,
    }
];
const categories = [...new Set(product.map((item) => { return item }))

]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}.</p>
        <h2>${price}.00$</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        
     `</div>
        </div>`
    )
}).join('')
var cart = [];
function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();

}



function delElement(a) {
    cart.splice(a, 1);
    displaycart();

}
function displaycart(a) {
    let j = 0; total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowing' src=${image}>
                </div>
                
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00$</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>");

        }).join('');

    }
    

}
var like= document.getElementsByClassName('fa-heart');
for(let el of like){
    el.addEventListener("click",function(){
        if(el.style.color=== "black") {el.style.color="red"}
        else {el.style.color="black"}
    })
}
    

