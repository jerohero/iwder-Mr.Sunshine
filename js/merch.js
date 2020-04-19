function productDetails(product){
  document.getElementById("modal").className = "modal modal-on";
  let productDetails = getProductDetails(product);
  document.getElementById("modal-img").src = productDetails.img;
  document.getElementById("modal-title").innerText = productDetails.title;
  document.getElementById("modal-price").innerText = "\u20AC" + productDetails.price;
  document.getElementById("modal-description").innerText = productDetails.description;
}

function closeModal(){
  document.getElementById("modal").className = "modal modal-off";
}

window.onclick = function(event){
  if(event.target == document.getElementById("modal")){
    document.getElementById("modal").className = "modal modal-off";
  }
}

let currentProduct;

function getProductDetails(product){
  currentProduct = product;
  if(product == 'musicbox'){
    const desc = document.getElementById("musicboxDesc").innerHTML;
    return {
      img: "img/musicbox.png",
      title: "Eugene's music box",
      price: "15,99",
      description: desc
    };}
  else if (product == "matryoshka"){
    const desc = document.getElementById("matryoshkaDesc").innerHTML;
    return {
      img: "img/matryoshka.jpg",
      title: "Piglet matryoshka doll",
      price: "7,99",
      description: desc
    };}
    else if (product == "portrait"){
      const desc = document.getElementById("portraitDesc").innerHTML;
      return {
        img: "img/portrait.jpg",
        title: "Couple portrait",
        price: "4,99",
        description: desc
      };}
    else if (product == "oxfordset"){
      const desc = document.getElementById("oxfordsetDesc").innerHTML;
      return {
        img: "img/oxfordset.png",
        title: "Mr. Sunshine Oxford set",
        price: "12,99",
        description: desc
      };}
    else if (product == "springfield"){
      const desc = document.getElementById("springfieldDesc").innerHTML;
      return {
        img: "img/springfield.jpg",
        title: "Springfield M1903",
        price: "39,99",
        description: desc
      };}
    else if (product == "eugenehat"){
      const desc = document.getElementById("eugenehatDesc").innerHTML;
      return {
        img: "img/eugenehat.jpg",
        title: "Eugene Choi's hat",
        price: "19,99",
        description: desc
      };}
}

function toOrderForm(){
  window.location.replace("../orderproduct/" + currentProduct + ".html")
}

window.onload = () => {
  const searchbar = document.getElementById("js--searchbar");
  const productCardList = document.getElementsByClassName("productCard");
  const productList = document.getElementsByClassName("product");

  searchbar.onkeyup = (event) => {
    let filter = event.target.value.toUpperCase();
    for(let i = 0; i < productCardList.length; i++){
      let innerHTML = productCardList[i].innerHTML.toUpperCase();
      if(innerHTML.indexOf(filter) !== -1){
        productList[i].style.display = ""; //zichtbaar
      }
      else{
        productList[i].style.display = "none"; //onzichtbaar
      }
    }
  }
}
