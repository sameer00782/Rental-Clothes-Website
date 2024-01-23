let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');

}



//header
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});



const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}


 /*cart-page*/

 const product =[
    {
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120
    },
    {
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 150
    },
    {
        image: 'image/ee-3.jpg',
        title: '250 DSLR Camera',
        price: 230
    },
    {
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: 100
    },
]

const categories = [...new Set(product.map((item)=>
    {return item}))];

    function delElement(a){
        categories.splice(a, 1);
        displaycart();
    }

    function promo(){
        let promocode=document.getElementById('promocode').value;
        if(promocode==1234){
            displaycart(50);
        }
        else(
            prompt("Enter correct promo code")
        )
    }

function displaycart(c){
    let j=0, total=0;
    document.getElementById("itemA").innerHTML = categories.length + " Items";
    document.getElementById("itemB").innerHTML = categories.length + " Items";
    if(categories.length==0){
        document.getElementById("root").innerHTML="Your cart is empty";

        document.getElementById("totalA").innerHTML = "$ 00.00";
        document.getElementById("totalB").innerHTML = "$ 00.00";
    }
    else{
        document.getElementById("root").innerHTML = categories.map((items)=>{
            let {image, title, price} = items;
            total = total+price;
            document.getElementById("totalA").innerHTML = "$ "+ total +".00";

            if(c==50){
                document.getElementById("totalB").innerHTML="$ "+(total-c)+".00";
            }else{
                document.getElementById("totalB").innerHTML="$ "+total+ ".00";
            }

            return(
                `<tr>
                    <td width="150"><div class="img-box"><img class="img" src=${image}></div></td>
                    <td width="360"><p style='font-size:15px;'>${title}</p></td>
                    <td width="150"><h2 style='font-size:15px; color:black; '>$ ${price}.00</h2></td>
                    <td width="70">`+"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>"+
                `</tr>`
            );
        }).join('');
    }
}
displaycart();