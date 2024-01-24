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


const product =[
    {
        image: '/img/cart1.jpeg',
        title: 'Black Zari Brocade Kurta Set',
        price: 3500
    },
    {
        image: '/img/cart2.jpeg',
        title: 'Red Embroided Ethnic Dress',
        price: 2500
    },
    {
        image: '/img/cart3.jpeg',
        title: 'Zero Point Collar Set',
        price: 2300
    },
    {
        image: '/img/cart4.jpeg',
        title: 'Jacquard Kurta Set',
        price: 2100
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

        document.getElementById("totalA").innerHTML = "₹ 00.00";
        document.getElementById("totalB").innerHTML = "₹ 00.00";
    }
    else{
        document.getElementById("root").innerHTML = categories.map((items)=>{
            let {image, title, price} = items;
            total = total+price;
            document.getElementById("totalA").innerHTML = "₹ "+ total +".00";

            if(c==50){
                document.getElementById("totalB").innerHTML="₹ "+(total-c)+".00";
            }else{
                document.getElementById("totalB").innerHTML="₹ "+total+ ".00";
            }

            return(
                `<tr>
                    <td width="550"><div class="img-box"><img class="img" src=${image}></div></td>
                    <td width="960"><p style='font-size:15px;'>${title}</p></td>
                    <td width="150"><h2 style='font-size:15px; color:black; '>₹ ${price}.00</h2></td>
                    <td width="70">`+"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>"+
                `</tr>`
            );
        }).join('');
    }
}
displaycart();



