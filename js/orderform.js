let product = location.href.split("/").slice(-1);
product = product.toString().replace(".html", "");

let sent = false;
if(product.includes("?")){
  product = product.substring(0, product.indexOf("?"));
  sent = true;
}

const productDetails = {};

if(product == 'musicbox'){
  productDetails["title"] = "Mr. Sunshine music box"
  productDetails["price"] = "15,99";
  productDetails["img"] = "../img/musicbox.png";
}
else if (product == "matryoshka"){
  productDetails["title"] = "Mr. Sunshine matryoshka"
  productDetails["price"] = "7,99";
  productDetails["img"] = "../img/matryoshka.jpg";
}
else if (product == "portrait"){
  productDetails["title"] = "Mr. Sunshine portrait"
  productDetails["price"] = "4,99";
  productDetails["img"] = "../img/portrait.jpg";
}
else if (product == "oxfordset"){
  productDetails["title"] = "Mr. Sunshine Oxford set"
  productDetails["price"] = "89,99";
  productDetails["img"] = "../img/oxfordset.png";
}
else if (product == "springfield"){
  productDetails["title"] = "Springfield M1903"
  productDetails["price"] = "39,99";
  productDetails["img"] = "../img/springfield.jpg";
}
else if (product == "eugenehat"){
  productDetails["title"] = "Eugene' Choi's hat"
  productDetails["price"] = "19,99";
  productDetails["img"] = "../img/eugenehat.jpg";
}

function formatDate(date) {
    let day = '' + date.getDate();
    let month = '' + (date.getMonth() + 1);
    const year = date.getFullYear();

    if (month.length < 2) {
        month = '0' + month;}
    if (day.length < 2) {
        day = '0' + day;}
    return [day, month, year].join('/');
}


window.onload = () => {
  window.scroll(0, document.body.scrollHeight);
  const date = new Date();

  if(sent == true){
    let formValues = location.href.split("&");
    let email;
    for (let i = 0; i < formValues.length; i++) {
      if(formValues[i].includes("email")){
        email = formValues[i];
        email = email.replace("email=", "");
        email = email.replace("%40", "@");
      }
    }
    document.getElementById("js--orderUpdate").innerText =
    "Successfully ordered \"" + productDetails.title + "\" for \u20AC" + productDetails.price + " on " + formatDate(date) + ".\nDetails will be sent to " + email + ".";
  }

  document.getElementById("js--title").innerText = productDetails.title;
  document.title = "Purchasing " + productDetails.title;
  document.getElementById("js--order-img").src = productDetails.img;

}
