let fruitsproduct = document.querySelector("#fruitsproduct")
let productId = Number(localStorage.getItem("selectedProduct"));
function backbtn() {
    localStorage.setItem("scrollTo", "product");
    
    window.location.href = "index.html";
}




let products = [
    // fruits
  
{ id: 1,
    name: "Mango", 
    quality: "The Best Production Of Our Farms, High Quality Class (A) Mangoes." ,
    sizes : "350-850 gr",
    packaging :"5Kg Cartons",
    shipping :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
    Availability :`<div  class="row    mt-0">
    <div class="col-lg-1 px-1 px-lg-2 mb-3 mb-lg-0 col-2">
     <div class="mounth-card ">
      <div class="mo-head bg-success text-center">
       <p class="mb-0">Jan</p>
      </div>
      <div class="mo-body text-center">
       <i class="fa-solid fa-xmark"></i>
      </div>
     </div>
    </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Feb</p>
       </div>
       <div class="mo-body text-center">
       <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Mar</p>
       </div>
       <div class="mo-body text-center">
       <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Apr</p>
       </div>
       <div class="mo-body text-center">
      <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">May</p>
       </div>
       <div class="mo-body text-center">
       <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Jun</p>
       </div>
       <div class="mo-body text-center">
      <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Jul</p>
       </div>
       <div class="mo-body text-center">
      <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Aug</p>
       </div>
       <div class="mo-body text-center">
        <img src="./img/fruits/mango.webp" alt="mango">
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Seb</p>
       </div>
       <div class="mo-body text-center">
        <img src="./img/fruits/mango.webp" alt="mango">
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Oct</p>
       </div>
       <div class="mo-body text-center">
        <img src="./img/fruits/mango.webp" alt="mango">
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Nov</p>
       </div>
       <div class="mo-body text-center">
        <img src="./img/fruits/mango.webp" alt="mango">
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Dec</p>
       </div>
       <div class="mo-body text-center">
        <img src="./img/fruits/mango.webp" alt="mango">
       </div>
      </div>
     </div>`,
    img : "./img/fruits/mango.webp"
},
{ id: 2,
    name: "Orange", 
    quality: "The Best Production Of Our Farms, High Quality Class (A) Orange." ,
    sizes : "40-48-56-64-72-80-88",
    packaging :"8Kg (Open top Cartons) , 15Kg (Telescopic Cartons)",
    shipping :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
    Availability :`<div  class="row    mt-0">
    <div class="col-lg-1 px-1 px-lg-2 mb-3 mb-lg-0 col-2">
     <div class="mounth-card ">
      <div class="mo-head bg-success text-center">
       <p class="mb-0">Jan</p>
      </div>
      <div class="mo-body text-center">
       <img src="./img/fruits/Orange.webp" alt="Orange">
      </div>
     </div>
    </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Feb</p>
       </div>
       <div class="mo-body text-center">
       <img src="./img/fruits/Orange.webp" alt="Orange">
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Mar</p>
       </div>
       <div class="mo-body text-center">
       <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Apr</p>
       </div>
       <div class="mo-body text-center">
      <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">May</p>
       </div>
       <div class="mo-body text-center">
       <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Jun</p>
       </div>
       <div class="mo-body text-center">
      <i class="fa-solid fa-xmark"></i>       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Jul</p>
       </div>
       <div class="mo-body text-center">
      <i class="fa-solid fa-xmark"></i></div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Aug</p>
       </div>
       <div class="mo-body text-center">
        <i class="fa-solid fa-xmark"></i> 
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Seb</p>
       </div>
       <div class="mo-body text-center">
        <i class="fa-solid fa-xmark"></i> 
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Oct</p>
       </div>
       <div class="mo-body text-center">
        <i class="fa-solid fa-xmark"></i> 
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Nov</p>
       </div>
       <div class="mo-body text-center">
        <i class="fa-solid fa-xmark"></i> 
       </div>
      </div>
     </div>
     <div class="col-lg-1 px-1 px-lg-2 col-2">
      <div class="mounth-card ">
       <div class="mo-head bg-success text-center">
        <p class="mb-0">Dec</p>
       </div>
       <div class="mo-body text-center">
        <img src="./img/fruits/Orange.webp" alt="Orange">
       </div>
      </div>
     </div>`,    
     img : "./img/fruits/Orange.webp"
},
      // fruits

      //   vegetables
      { id: 3,
        name: "Sweet Potatoes", 
        quality: "The Best Production Of Our Farms, High Quality Class (A) Sweet Potatoes." ,
        sizes : "150-850 gr",
        packaging :"6/10 kg Open Top Carton , 600k Bin",
        shipping :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
        Availability :`<div  class="row    mt-0">
        <div class="col-lg-1 px-1 px-lg-2 mb-3 mb-lg-0 col-2">
         <div class="mounth-card ">
          <div class="mo-head bg-success text-center">
           <p class="mb-0">Jan</p>
          </div>
          <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
          </div>
         </div>
        </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Feb</p>
           </div>
           <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Mar</p>
           </div>
           <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Apr</p>
           </div>
           <div class="mo-body text-center">
          <i class="fa-solid fa-xmark"></i>       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">May</p>
           </div>
           <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Jun</p>
           </div>
           <div class="mo-body text-center">
          <i class="fa-solid fa-xmark"></i>       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Jul</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/sweet potatoes.webp" alt="sweet potatoes">
          </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Aug</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/sweet potatoes.webp" alt="sweet potatoes"> 
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Seb</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/sweet potatoes.webp" alt="sweet potatoes">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Oct</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/sweet potatoes.webp" alt="sweet potatoes"> 
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Nov</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/sweet potatoes.webp" alt="sweet potatoes"> 
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Dec</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/sweet potatoes.webp" alt="sweet potatoes">
           </div>
          </div>
         </div>`,    
                 img : "./img/vegetables/sweet potatoes.webp"
    } ,{ id: 4,
        name: "Potato", 
        quality: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!" ,
        packaging :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
        shipping :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
        cooling :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
        img : "./img/vegetables/potato.webp"
    },{ id: 5,
        name: "Red Onion", 
        quality: "The Best Production Of Our Farms, High Quality Class (A) Red Onion." ,
        sizes : "150-850 gr",
        packaging :"5-10 kg , 1 Ton Bag",
        shipping :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
        Availability :`<div  class="row    mt-0">
        <div class="col-lg-1 px-1 px-lg-2 mb-3 mb-lg-0 col-2">
         <div class="mounth-card ">
          <div class="mo-head bg-success text-center">
           <p class="mb-0">Jan</p>
          </div>
          <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
          </div>
         </div>
        </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Feb</p>
           </div>
           <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Mar</p>
           </div>
           <div class="mo-body text-center">
           <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Apr</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">May</p>
           </div>
           <div class="mo-body text-center">
           <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Jun</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">      </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Jul</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">
          </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Aug</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Seb</p>
           </div>
           <div class="mo-body text-center">
           <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Oct</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Nov</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Dec</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp" alt="red onion">
           </div>
          </div>
         </div>`,  
            img : "./img/vegetables/—Pngtree—red onion clipart illustration isolated_17065670.webp"
    },{ id: 6,
        name: "Golden Onion", 
        quality: "The Best Production Of Our Farms, High Quality Class (A) Golden Onion." ,
        sizes : "150-850 gr",
        packaging :"5-10 kg , 1 Ton Bag",
        shipping :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
        Availability :`<div  class="row    mt-0">
        <div class="col-lg-1 px-1 px-lg-2 mb-3 mb-lg-0 col-2">
         <div class="mounth-card ">
          <div class="mo-head bg-success text-center">
           <p class="mb-0">Jan</p>
          </div>
          <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
          </div>
         </div>
        </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Feb</p>
           </div>
           <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Mar</p>
           </div>
           <div class="mo-body text-center">
           <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">      </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Apr</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">May</p>
           </div>
           <div class="mo-body text-center">
           <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Jun</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">      </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Jul</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">
          </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Aug</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Seb</p>
           </div>
           <div class="mo-body text-center">
           <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Oct</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Nov</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Dec</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp" alt="golden onion">
           </div>
          </div>
         </div>`,  
         img : "./img/vegetables/pngtree-brown-onion-with-its-papery-skin-png-image_20049352.webp"
    },{ id: 7,
        name: "Garlic", 
        quality: "The Best Production Of Our Farms, High Quality Class (A) Garlic." ,
        sizes : "35-90 mm",
        packaging :"2-10 Kg Bunches/Carton",
        shipping :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora officiis vel. Maiores rem, aperiam incidunt voluptatibus explicabo mollitia distinctio minima fuga provident sunt odit, adipisci quod nobis eos quis!",
        Availability :`<div  class="row    mt-0">
        <div class="col-lg-1 px-1 px-lg-2 mb-3 mb-lg-0 col-2">
         <div class="mounth-card ">
          <div class="mo-head bg-success text-center">
           <p class="mb-0">Jan</p>
          </div>
          <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
          </div>
         </div>
        </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Feb</p>
           </div>
           <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Mar</p>
           </div>
           <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>      </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Apr</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/pngtree-whole-garlic-bulb-with-peeled-clove-png-image_21233664.webp" alt="garlic">       </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">May</p>
           </div>
           <div class="mo-body text-center">
           <img src="./img/vegetables/pngtree-whole-garlic-bulb-with-peeled-clove-png-image_21233664.webp" alt="garlic">      </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Jun</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/pngtree-whole-garlic-bulb-with-peeled-clove-png-image_21233664.webp" alt="garlic">      </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Jul</p>
           </div>
           <div class="mo-body text-center">
          <img src="./img/vegetables/pngtree-whole-garlic-bulb-with-peeled-clove-png-image_21233664.webp" alt="garlic">
          </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Aug</p>
           </div>
           <div class="mo-body text-center">
            <img src="./img/vegetables/pngtree-whole-garlic-bulb-with-peeled-clove-png-image_21233664.webp" alt="garlic">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Seb</p>
           </div>
           <div class="mo-body text-center">
           <img src="./img/vegetables/pngtree-whole-garlic-bulb-with-peeled-clove-png-image_21233664.webp" alt="garlic">
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Oct</p>
           </div>
           <div class="mo-body text-center">
           <i class="fa-solid fa-xmark"></i>
           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Nov</p>
           </div>
           <div class="mo-body text-center">
            <i class="fa-solid fa-xmark"></i>           </div>
          </div>
         </div>
         <div class="col-lg-1 px-1 px-lg-2 col-2">
          <div class="mounth-card ">
           <div class="mo-head bg-success text-center">
            <p class="mb-0">Dec</p>
           </div>
           <div class="mo-body text-center">
            <i class="fa-solid fa-xmark"></i>
           </div>
          </div>
         </div>`,  
            img : "./img/vegetables/pngtree-whole-garlic-bulb-with-peeled-clove-png-image_21233664.webp"
    },



];

let product = products.find((p) => p.id == productId);

if (product) {
    fruitsproduct.innerHTML = `
    <div class="container">
  <div class="sec-head mb-3 d-flex align-items-center justify-content-center">
    <div class="position-relative sec-head-child mb-5">
    <h3 class="fs-1 text-success text-center"> ${product.name} </h3>
    <i class="fa-solid fa-leaf details-i"></i>
    </div>
  </div>
  <div id="fruits" class="py-3">
    <div class="d-flex  justify-content-between head-fruits mb-2 align-items-center">
      <button  id="backbtnfru" onclick="backbtn()" class="btn all-btn btn-outline-dark" ><i class="fa-solid fa-arrow-left me-2"></i>Back</button>
    </div>
    

    <div id="rowdetails" class="row mt-2">

           <h3 class="text-success text-center fs-1 mt-4 mb-5 d-block d-lg-none">About</h3>
           <div class="col-lg-6 d-flex justify-content-center align-items-center">
            <img class=" details-img mb-5 mt-md-4 mb-lg-0" src="${product.img}" alt="">
           </div>

           <div class="col-lg-6">
            <h3 class="text-success text-center mb-5 d-none d-lg-block">About</h3>
            <h5 class="text-black">Quality :</h5>
            <p class="mb-4 fw-medium">${product.quality}</p>
            <h5 class="text-black">Packaging :</h5>
            <p class="mb-4 fw-medium">${product.packaging}</p>
            <h5 class="text-black">Sizes :</h5>
            <p class="mb-4 fw-medium">${product.sizes}</p>
            <h5 class="text-black">Shipping :</h5>
            <p class="mb-5 fw-medium">${product.shipping}</p>
               
          </div>

          <div class="col-lg-9 m-auto ">
            <h4 class="text-success mt-4 text-center">Availability </h4>
            <p class="mb-4 ">${product.Availability}</p>
               
          </div>

          
    </div>





  </div>


  




</div>

  `;
}

