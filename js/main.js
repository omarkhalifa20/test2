
let productbtn = document.querySelector ("#productbtn")
let product = document.querySelector ("#product")

// fruits btn to details

let mangobtn =document.querySelector ("#mango-btn")
mangobtn.addEventListener("click" ,function() {
  showDetails(1)
})

let orangebtn =document.querySelector ("#orange-btn")
orangebtn.addEventListener("click" ,function() {
  showDetails(2)
})

// fruits btn to details


// vegetables btn to details
let sweetpotatoesbtn =document.querySelector ("#sweetpotatoes-btn")
sweetpotatoesbtn.addEventListener("click" ,function() {
  showDetails(3)
})

let potatobtn =document.querySelector ("#potato-btn")
potatobtn.addEventListener("click" ,function() {
  showDetails(4)
})

let redonionbtn =document.querySelector ("#redonion-btn")
redonionbtn.addEventListener("click" ,function() {
  showDetails(5)
})

let goldenonionbtn =document.querySelector ("#goldenonion-btn")
goldenonionbtn.addEventListener("click" ,function() {
  showDetails(6)
})

let garlicbtn =document.querySelector ("#garlic-btn")
garlicbtn.addEventListener("click" ,function() {
  showDetails(7)
})



// vegetables btn to details
function showDetails(productId) {
  localStorage.setItem("selectedProduct", productId);
  window.location.href = "details.html";
}


productbtn.addEventListener ("click" , productscroll)


 function productscroll() {
  product.scrollIntoView({
    behavior: "smooth"
  })
    
}

window.addEventListener("DOMContentLoaded", function () {
  let sectionId = localStorage.getItem("scrollTo");
  if (sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    localStorage.removeItem("scrollTo"); 
  }
});





document.addEventListener("DOMContentLoaded", function () {
  let loaderShown = localStorage.getItem("loaderShown");

  if (!loaderShown) {
    setTimeout(function () {
      document.querySelector(".lod").classList.add("d-none");
      document.body.classList.remove("loading");
      localStorage.setItem("loaderShown", "true");
    }, 3000); 
  } else {
    document.querySelector(".lod").classList.add("d-none");
    document.body.classList.remove("loading");
  }
});


