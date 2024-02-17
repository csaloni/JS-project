// Show Real Products

let products = [
  {
    name: "Wireless-headphones",
    heading: "headphones for your Style",
    price: "5600",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Chanel Paris",
    price: "250000",
    image: "https://images.unsplash.com/photo-1599342166997-58552e91d9f5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  {
    name: "Champagne",
    price: "550000",
    image: "https://plus.unsplash.com/premium_photo-1673823665960-2b3ac8fd4829?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },

  {
    name: "Prada Milano Bag",
    price: "700000",
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",

  },
  {
    name: "Canvas Painting",
    price: "1000000",
    image: "https://images.unsplash.com/photo-1613206468203-fa00870edf79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
];

let popular = [
  {

    name: "Canon Camera",
    price: "35000 ",
    image:
      "https://images.unsplash.com/photo-1612917165527-debe12403463?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },

  {

    name: "Rolex Watch",
    price: "250000",
    image:
      "https://images.unsplash.com/photo-1619976491498-f2dadb25fb3b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },

  {
    name: "Rolex Watch",
    price: "250000",
    image:
      "https://images.unsplash.com/photo-1619976491498-f2dadb25fb3b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },

  {
    name: "Matte Lipsticl",
    price: "50000",
    image:
      "https://images.unsplash.com/photo-1617422275558-e5f616302690?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },




];



function showCase() {
  let clutter = ""
  products.forEach(function (s) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden  ">
    <img class="h-full w-full object-covers" src="${s.image}" alt="">
    </div>
    <div class="data w-full px-2 py-5">
      <h1 class="font-semibold text-xl leading-none tracking-tight">
      ${s.name}
        
      </h1>
      <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
          <h3 class="font-semibold opacity-20"></h3>
          <h4 class="font-semibold mt-2">${s.price}</h4>
        </div>
        <button
          class="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"
        >
          <i class="ri-add-line"></i>
        </button>
      </div>
    </div>
  </div>`
  })
  document.querySelector(".products").innerHTML = clutter;

}
showCase();






function showPopularProducts() {
  let saloni = ""
  popular.forEach(function (s) {
    saloni += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
      <img class="w-full h-full object-cover"
        src="${s.image}"
        alt="" />
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${s.name}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
        Bisco Do Lobo
      </h4>
      <h4 class="mt-3 font-semibold text-zinc-500">${s.price}</h4>
    </div>
  </div>` 
  })

  document.querySelector(".populars").innerHTML = saloni;
}


showPopularProducts();