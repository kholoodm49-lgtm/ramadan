
function show(){
var namee=document.getElementById("name").value;
var phone=document.getElementById("phone").value;
var address=document.getElementById("address").value;
var price=document.getElementById("price").value;
var title="This request is being processed:-"

    console.log(namee);
    console.log(phone);
    console.log(address);
    console.log(price);
    document.getElementById("order").innerHTML=title;
    document.getElementById("username").innerHTML=namee;
    document.getElementById("userphone").innerHTML=phone;
    document.getElementById("useraddress").innerHTML=address;
    document.getElementById("userprice").innerHTML=price;
}