
AOS.init({
  duration: 1200,
})




// product section data

let data = [
  {
    "id": 1,
    "title": "High-Speed Fiber Optic Cable, 10Gbps, 50 Meters",
    "price": 700,
    "description": "This durable, high-performance fiber optic cable ensures lightning-fast data transmission, perfect for professional networking setups. Supports speeds up to 10Gbps over 50 meters, with ruggedized outer casing for both indoor and outdoor use.",
    "category": "electronics",
    "image": "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3d45cac6-3a8a-4bbb-a7c1-221260900fc7.__CR0,0,970,600_PT0_SX970_V1___.png",
    "rating": {
      "rate": 4.5,
      "count": 230
    }
  },
  {
    "id": 2,
    "title": "Fiber Optic Patch Cable, 1Gbps, 10 Meters",
    "price": 500,
    "description": "A flexible and durable fiber optic patch cable with a speed of up to 1Gbps. Ideal for short-distance connections between switches and routers.",
    "category": "electronics",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjN2Dy8ssLcfgMq-yIJmbzNt3DnGCvfgZUWykuqQNK1hCP574fIbyxa_pFtA8Dq5WHeY&usqp=CAU",
    "rating": {
      "rate": 4.2,
      "count": 150
    }
  },
  {
    "id": 3,
    "title": "Outdoor Armored Fiber Optic Cable, 100 Meters",
    "price": 800,
    "description": "Heavy-duty outdoor fiber optic cable designed for extreme conditions. Supports up to 10Gbps over 100 meters and is waterproof and UV-resistant.",
    "category": "electronics",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-AeFJyBoM1DxYavEdzWpOlpubgL240C07IAQZh2Y63Z-oH0tEhF-B_Q6diU_L-WYpmQ&usqp=CAU",
    "rating": {
      "rate": 4.7,
      "count": 180
    }
  },
  {
    "id": 4,
    "title": "Multimode Fiber Optic Cable, 40Gbps, 20 Meters",
    "price": 600,
    "description": "A multimode fiber optic cable suitable for data centers and high-speed networks. Supports speeds up to 40Gbps over a distance of 20 meters.",
    "category": "electronics",
    "image": "https://m.media-amazon.com/images/I/51+GgSN3XcL._AC_UF1000,1000_QL80_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 210
    }
  },
  {
    "id": 5,
    "title": "Single Mode Fiber Optic Cable, 100Gbps, 5 Meters",
    "price": 500,
    "description": "Designed for long-distance high-speed communication, this single-mode fiber cable supports 100Gbps over a short 5-meter distance.",
    "category": "electronics",
    "image": "https://media.startech.com/cms/products/gallery_large/spsmlclc-os2-xx.bom.jpg",
    "rating": {
      "rate": 4.8,
      "count": 85
    }
  },
  {
    "id": 6,
    "title": "10G Ethernet SFP+ Module for Fiber Optic Networks",
    "price": 600,
    "description": "An SFP+ module that allows 10G Ethernet connections over fiber optic cables. Compatible with most network switches.",
    "category": "electronics",
    "image": "https://target.scene7.com/is/image/Target/GUEST_b0972a8b-fd5a-42d8-a901-cf8fb191bf5f",
    "rating": {
      "rate": 4.4,
      "count": 190
    }
  },
  {
    "id": 7,
    "title": "Fiber Optic Cable Tester, Handheld",
    "price": 900,
    "description": "A portable fiber optic cable tester for quick diagnostics and troubleshooting of network installations.",
    "category": "electronics",
    "image": "https://m.media-amazon.com/images/I/71mJ8iZMfQL.jpg",
    "rating": {
      "rate": 4.7,
      "count": 60
    }
  },
  {
    "id": 8,
    "title": "Fiber Optic Splitter, 1x8",
    "price": 500,
    "description": "A fiber optic splitter that allows for splitting a single input into eight outputs, perfect for FTTH (fiber to the home) applications.",
    "category": "electronics",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41clO1JZPDL._SS400_.jpg",
    "rating": {
      "rate": 4.3,
      "count": 120
    }
  },
  {
    "id": 9,
    "title": "FTTH Fiber Optic Distribution Box",
    "price": 800,
    "description": "An outdoor fiber optic distribution box designed for fiber to the home networks. Comes with 16 ports and weatherproof protection.",
    "category": "electronics",
    "image": "https://m.media-amazon.com/images/I/21tC-NoXQjL._AC_UF1000,1000_QL80_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 130
    }
  },
  {
    "id": 10,
    "title": "Fiber Optic Connector Cleaner",
    "price": 500,
    "description": "A specialized cleaner for fiber optic connectors, ensuring reliable data transmission by preventing contamination and loss.",
    "category": "electronics",
    "image": "https://m.media-amazon.com/images/I/41hn-EbJlxL._AC_UF894,1000_QL80_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 75
    }
  },
  {
    "id": 11,
    "title": "1000ft Fiber Optic Cable Spool, 10Gbps",
    "price": 1000,
    "description": "A bulk spool of 1000 feet of fiber optic cable, designed for long-distance networking projects supporting speeds of up to 10Gbps.",
    "category": "electronics",
    "image": "https://m.media-amazon.com/images/I/51wbr26DxfL._AC_UF894,1000_QL80_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 95
    }
  },
  {
    "id": 12,
    "title": "Indoor Fiber Optic Cable, 30 Meters",
    "price": 600,
    "description": "A flexible and lightweight fiber optic cable designed for indoor use. Supports up to 10Gbps data rates over 30 meters.",
    "category": "electronics",
    "image": "https://www.riteav.com/cdn/shop/files/41GQsmfk6HL_b8db56d2-da4a-4888-8644-b42b53fec9a9.jpg?v=1720272988",
    "rating": {
      "rate": 4.4,
      "count": 110
    }
  },
  {
    "id": 13,
    "title": "Fiber Optic Coupler, LC-LC",
    "price": 500,
    "description": "A high-quality fiber optic coupler for connecting two LC connectors in networking systems.",
    "category": "electronics",
    "image": "https://m.media-amazon.com/images/I/41JbtLfnKVL._AC_UF1000,1000_QL80_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 45
    }
  },
  {
    "id": 14,
    "title": "Optical Power Meter for Fiber Optic Networks",
    "price": 700,
    "description": "A digital optical power meter for accurately measuring the power levels in fiber optic networks. Ideal for technicians and network installers.",
    "category": "electronics",
    "image": "https://kvcable.com/wp-content/uploads/2022/06/undersea-optical-fiber-cable.jpg",
    "rating": {
      "rate": 4.6,
      "count": 130
    }
  },
  {
    "id": 15,
    "title": "Portable Fiber Optic Fusion Splicer",
    "price": 1000,
    "description": "A portable fiber optic fusion splicer for joining two optical fibers. Perfect for professionals working in network installations.",
    "category": "electronics",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1NMGcx0ri2Z9MIKNv0BdeLbdKJs1Uv-CQQ&s",
    "rating": {
      "rate": 4.7,
      "count": 40
    }
  },
  {
    "id": 16,
    "title": "Multimode Fiber Optic Adapter Panel, 12 Ports",
    "price": 600,
    "description": "A fiber optic adapter panel with 12 multimode ports for high-speed network connections. Designed for rack-mount systems.",
    "category": "electronics",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL0w__3S3aVoezSiyDnJ7ZaDsA6J4yeAPL4ES8fG2pL_7JRbGcoYMUpIO65eiG5IGzwI&usqp=CAU",
    "rating": {
      "rate": 4.2,
      "count": 65
    }
  },
  {
    "id": 17,
    "title": "Single Mode Fiber Optic Patch Cable, 100Gbps, 2 Meters",
    "price": 500,
    "description": "A single-mode fiber optic patch cable supporting up to 100Gbps over a short 2-meter distance. Suitable for high-speed connections in data centers.",
    "category": "electronics",
    "image": "https://sc04.alicdn.com/kf/H46012a5cb9654d0e9c6755d67b9cd1f3X.jpg",
    "rating": {
      "rate": 4.9,
      "count": 200
    }
  },
  {
    "id": 18,
    "title": "MPO Fiber Optic Cable, 12 Fibers, 10 Meters",
    "price": 900,
    "description": "A high-density MPO fiber optic cable designed for data centers. Features 12 fibers and supports 40Gbps over a 10-meter distance.",
    "category": "electronics",
    "image": "https://cdn11.bigcommerce.com/s-zuoz5330p9/images/stencil/1280x1280/products/4216/6230/mpo-mpo-plenum-sm-9-125-os1-yellow-fiber-optic-patch-cable-12-fiber__19712.1634334631.jpg?c=2",
    "rating": {
      "rate": 4.5,
      "count": 150
    }
  },
  {
    "id": 19,
    "title": "Fiber Optic Cleaver for Precise Cable Cutting",
    "price": 500,
    "description": "A precision fiber optic cleaver designed for easy and accurate cutting of optical fiber cables. Essential for professionals in the field.",
    "category": "electronics",
    "image": "https://m.media-amazon.com/images/I/61mJEkYPA0L.jpg",
    "rating": {
      "rate": 4.7,
      "count": 85
    }
  },
  {
    "id": 20,
    "title": "Fiber Optic Enclosure, Rack Mountable",
    "price": 900,
    "description": "A durable, rack-mountable fiber optic enclosure with space for up to 24 fibers. Ideal for organizing and protecting fiber connections in network setups.",
    "category": "electronics",
    "image": "https://cdn.shopify.com/s/files/1/0806/9500/1374/files/8d511b677ce52618a718d0b56c4df104_medium_a06c8eb6-f1ec-4944-b6d1-eb01c6dd0752_large.jpg?v=1691427598",
    "rating": {
      "rate": 4.6,
      "count": 95
    }
  }
]


let homemainDiv = document.querySelector(".productcardmain");
let logOut = document.querySelector(".logout")

let lowToHigh = document.querySelector(".lowToHigh")
let highToLow = document.querySelector(".highToLow")
let searchInput = document.querySelector(".searchInput");

let addArr = JSON.parse(localStorage.getItem("cartItem")) || [];
let wishListArr = JSON.parse(localStorage.getItem("wishListItem")) || [];

let renderingFunction = () => {
  homemainDiv.innerHTML = "";

  data.forEach((ele, index) => {
    let boxDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.image;

    let h3 = document.createElement("h3");
    h3.innerText = ele.title;

    let p = document.createElement("p");
    p.innerText = `Rs ${ele.price}`;

    let cartBtn = document.createElement("button");
    cartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping carticon me-1 producthover"></i>`;

    let plusBtn = document.createElement("button");
    plusBtn.innerHTML = `<i class="fa-solid fa-plus plusicon ms-1"></i> `;

    cartBtn.onclick = () => {
      addToCartHandler(ele);
    }

    plusBtn.onclick = () => {
      wishListHandler(ele);
    }
    boxDiv.append(img, h3, p, cartBtn, plusBtn);
    homemainDiv.append(boxDiv);

  });
}

// add To card Data

let addToCartHandler = (product) => {
  let lsdata = JSON.parse(localStorage.getItem("currentUser")) || [];

  if (lsdata == "") {
    alert("Please Login First")
  } else {
    let checkpoint = addArr.some(function (element) {
      return element.id == product.id;
    })

    if (checkpoint) {
      alert("Alrady added")
    } else {
      addArr.push(product);
      localStorage.setItem("cartItem", JSON.stringify(addArr));
      alert("Item Added in Cart");
    }
  }
}


// add Wish List 

let wishListHandler = (product) => {

  let checkpoint = wishListArr.some(function (element) {
    return element.id == product.id;
  })

  if (checkpoint) {
    alert("Alrady added")
  } else {
    wishListArr.push(product);
    localStorage.setItem("wishListItem", JSON.stringify(wishListArr));
    alert("Item Added in Wish List");
  }
}


// data sorting 

lowToHigh.addEventListener("click", (e) => {
  e.preventDefault();
  data.sort((a, b) => {
    return a.price - b.price;
  });
  renderingFunction()
})

highToLow.addEventListener("click", (e) => {
  e.preventDefault();
  data.sort((a, b) => {
    return b.price - a.price;
  });
  renderingFunction()
})

renderingFunction();




// searching function 

searchInput.addEventListener("input", (e) => {
  let searchTerm = e.target.value.toLowerCase(); 
  let filteredData = data.filter(product =>
    product.title.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) 
  );
  renderFilteredData(filteredData); 
});

let renderFilteredData = (filteredData) => {
  homemainDiv.innerHTML = ""; 

  filteredData.forEach((ele) => {
    let boxDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.image;

    let h3 = document.createElement("h3");
    h3.innerText = ele.title;

    let p = document.createElement("p");
    p.innerText = `Rs ${ele.price}`;

    let cartBtn = document.createElement("button");
    cartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping carticon me-1 producthover"></i>`;

    let plusBtn = document.createElement("button");
    plusBtn.innerHTML = `<i class="fa-solid fa-plus plusicon ms-1"></i>`;

    cartBtn.onclick = () => {
      addToCartHandler(ele);
    }

    plusBtn.onclick = () => {
      wishListHandler(ele);
    }
    boxDiv.append(img, h3, p, cartBtn, plusBtn);
    homemainDiv.append(boxDiv);
  });
}


// logOut.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = "login.html";
//   localStorage.removeItem("currentUser");
// })