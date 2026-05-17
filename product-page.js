const jewelryProducts = [
  {
    id: 1,
    name: "Twinkle Infinie Pendant Necklace",
    category: "Necklace",
    material: "18KT Gold",
    price: "₦7,184,700.00 ",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Ziora Lab Diamond Engagement Ring",
    category: "Ring",
    material: "18KT Gold",
    price: "₦5,246,000.00 ",
    image:
      "https://i.pinimg.com/1200x/3f/fb/71/3ffb71a50c8cb7e235828db4cac865fe.jpg",
  },

  {
    id: 3,
    name: "Pear Cut Moissanite Bride Set",
    category: "Bride Set",
    material: "925 Sterling Silver",
    price: "₦722,100.00 ",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Royal Crystal Tennis Bracelet",
    category: "Bracelet",
    material: "18KT White Gold",
    price: "₦3,480,000.00 ",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "Celestia Diamond Halo Ring",
    category: "Ring",
    material: "18KT Rose Gold",
    price: "₦4,950,000.00 ",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    name: "Infinity Luxe Charm Necklace",
    category: "Necklace",
    material: "18KT Gold",
    price: "₦2,870,000.00 ",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    name: "Veloura Sapphire Stud Earrings",
    category: "Earrings",
    material: "925 Sterling Silver",
    price: "₦980,000.00 ",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    name: "Aurielle Diamond Drop Earrings",
    category: "Earrings",
    material: "18KT White Gold",
    price: "₦2,340,000.00 ",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 9,
    name: "Moonlight Pearl Pendant",
    category: "Pendant",
    material: "18KT Gold",
    price: "₦1,650,000.00 ",
    image:
      "https://i.pinimg.com/736x/20/2b/e7/202be7c377c4e8fbd68a326b12db45ce.jpg",
  },

  {
    id: 10,
    name: "Empress Emerald Luxury Ring",
    category: "Ring",
    material: "18KT Gold",
    price: "₦6,720,000.00 ",
    image:
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 11,
    name: "Twilight Diamond Choker",
    category: "Necklace",
    material: "18KT White Gold",
    price: "₦8,120,000.00 ",
    image:
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 12,
    name: "Lunara Crystal Bangle",
    category: "Bracelet",
    material: "925 Sterling Silver",
    price: "₦540,000.00 ",
    image:
      "https://i.pinimg.com/736x/de/0e/04/de0e04bd84e7147895da0bfa38a5e940.jpg",
  },

  {
    id: 13,
    name: "Golden Infinity Couple Band",
    category: "Ring",
    material: "18KT Gold",
    price: "₦1,200,000.00 ",
    image:
      "https://i.pinimg.com/1200x/2b/17/2d/2b172d821e1f0453ed1f5cee3b7b1d6c.jpg",
  },

  {
    id: 14,
    name: "Starlight Diamond Layered Necklace",
    category: "Necklace",
    material: "18KT Rose Gold",
    price: "₦3,760,000.00 ",
    image:
      "https://i.pinimg.com/736x/9f/16/9d/9f169db52d3a773f81a6ac5dbbed45e1.jpg",
  },

  {
    id: 15,
    name: "Aurora Heart Pendant Necklace",
    category: "Pendant",
    material: "925 Sterling Silver",
    price: "₦690,000.00 ",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 16,
    name: "Velvet Bloom Gemstone Ring",
    category: "Ring",
    material: "18KT White Gold",
    price: "₦2,980,000.00 ",
    image:
      "https://i.pinimg.com/1200x/81/66/3c/81663c8dc8f63a52f682136f873e2c3b.jpg",
  },

  {
    id: 17,
    name: "Eterna Luxe Hoop Earrings",
    category: "Earrings",
    material: "18KT Gold",
    price: "₦1,870,000.00 ",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 18,
    name: "Crystal Vine Tennis Necklace",
    category: "Necklace",
    material: "18KT White Gold",
    price: "₦5,940,000.00 ",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 19,
    name: "Radiant Princess Cut Ring",
    category: "Ring",
    material: "18KT Rose Gold",
    price: "₦4,110,000.00 ",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 20,
    name: "Opal Dream Luxury Bracelet",
    category: "Bracelet",
    material: "925 Sterling Silver",
    price: "₦870,000.00 ",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 21,
    name: "Twinkle Infinie Pendant Necklace",
    category: "Necklace",
    material: "18KT Gold",
    price: "₦7,184,700.00 ",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 22,
    name: "Ziora Diamond Engagement Ring",
    category: "Ring",
    material: "18KT Gold",
    price: "₦5,246,000.00 ",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 23,
    name: "Pear Moissanite Bride Set",
    category: "Bride Set",
    material: "925 Sterling Silver",
    price: "₦722,100.00 ",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 24,
    name: "Royal Crystal Tennis Bracelet",
    category: "Bracelet",
    material: "18KT White Gold",
    price: "₦3,480,000.00 ",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 25,
    name: "Crystal Vine Tennis Necklace",
    category: "Necklace",
    material: "18KT White Gold",
    price: "₦5,940,000.00 ",
    image:
      "https://i.pinimg.com/736x/fe/a4/61/fea461e8bb46bf541cdd7d2f37df44a1.jpg",
  },

  {
    id: 26,
    name: "Radiant Princess Cut Ring",
    category: "Ring",
    material: "18KT Rose Gold",
    price: "₦4,110,000.00 ",
    image:
      "https://i.pinimg.com/1200x/b2/ce/af/b2ceaf4d91d2df3df72cf8ca82409b2c.jpg",
  },

  {
    id: 27,
    name: "Twilight Diamond Choker",
    category: "Necklace",
    material: "18KT White Gold",
    price: "₦8,120,000.00 ",
    image:
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 28,
    name: "Lunara Crystal Bangle",
    category: "Bracelet",
    material: "925 Sterling Silver",
    price: "₦540,000.00 ",
    image:
      "https://i.pinimg.com/1200x/5c/74/4b/5c744b62d1880c33a9d147b88738974b.jpg",
  },

  {
    id: 29,
    name: "Celestia Diamond Halo Ring",
    category: "Ring",
    material: "18KT Rose Gold",
    price: "₦4,950,000.00 ",
    image:
      "https://i.pinimg.com/1200x/2e/58/f4/2e58f476bfabe5c8f5363488f6913c09.jpg",
  },

  {
    id: 30,
    name: "Infinity Luxe Charm Necklace",
    category: "Necklace",
    material: "18KT Gold",
    price: "₦2,870,000.00 ",
    image:
      "https://i.pinimg.com/736x/66/aa/ac/66aaacafc876f5ef4dd740d384e9cbab.jpg",
  },

  {
    id: 31,
    name: "Sapphire Stud Earrings",
    category: "Earrings",
    material: "925 Sterling Silver",
    price: "₦980,000.00 ",
    image:
      "https://i.pinimg.com/1200x/c8/5f/b7/c85fb7ebff3ec8de4050610ccd720582.jpg",
  },

  {
    id: 32,
    name: "Aurielle Diamond Drop Earrings",
    category: "Earrings",
    material: "18KT White Gold",
    price: "₦2,340,000.00 ",
    image:
      "https://i.pinimg.com/1200x/dd/76/67/dd7667eccfa89937c4d0a0b24b6bd275.jpg",
  },
];

let myProduct = document.querySelector("#products");
jewelryProducts.forEach(function (value, index) {
  myProduct.innerHTML += `
    <div class="group shadow shadow-md rounded-md w-full h-[380px] md:h-[340px] lg:h-[330px] hover:lg:h-[360px] p-2">
        <img src="${value.image}" class=" rounded-md h-[200px] w-full object-cover">
        <div>
         <p class="mt-[10px] font-medium">${value.name}</p>
         <p class="mt-[5px] font-medium"> ${value.material}</p>
         <p class="mt-[8px] font-bold"> ${value.price}</p>
        
         <button onclick="addToCart(${index})"
          class=" hidden group-hover:block bg-[#303030] text-white w-full mt-[5px] p-2 rounded-md">
          Add To Cart
         </button>
        </div>
    </div>
    `;
});

function filterProducts() {
  let search = document.querySelector("#searchProduct").value;

  let productFilters = jewelryProducts.filter(function (value) {
    return value.name.toLowerCase().includes(search.toLowerCase());
  });

  if (productFilters.length === 0) {
    document.getElementById("products").innerHTML = "";
    document.querySelector("#noProduct").classList.remove("hidden");
  } else {
    document.querySelector("#noProduct").classList.add("hidden");
    let filterMap = productFilters.map(function (value) {
      return `
        <div class="shadow shadow-md rounded-md w-full h-[370px] md:h-[350px] lg:h-[350px] p-2">
        <img src="${value.image}" class=" rounded-md h-[200px] w-full object-cover">
        <p class="mt-[10px] font-medium">${value.name}</p>
        <p class="mt-[5px] font-medium"> ${value.material}</p>
        <p class="mt-[10px] font-bold"> ${value.price}</p>
        </div>
        `;
    });

    document.getElementById("products").innerHTML = filterMap.join("");
  }
}
