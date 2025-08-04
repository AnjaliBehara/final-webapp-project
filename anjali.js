const products = [
  {
    name: "Red T-Shirt",
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRqAKCjG0AnjQUT45Jxfk2Lxfx_W6CSTRrCzV8tFkoM2EJdORxYE_8sm-b2vNBNUK1t-nmbadluB23WYiEzoeOWq3VH9eRu13EybTok0Vg",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRM6S3a-4v_jCAAU88lfxCC3I-3aTOwVvPO1vGzl7PiDlLj0gIQQ0BLtHtBM87QsJSlUbFjhEpLd-PfBFGvq7j23Gz2-PdqWMjklux5-scA",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxUkfjabZlYOsk_J25V07VTo1HCrxIOrvg9VkAvxzGa_ycaNlZvsPPSw&s",

      
    ]
  },
  {
    name: "Blue Hoodie",
    images: [
      "https://www.flipkart.com/mens-sweatshirts/light-blue~color/pr?sid=clo,qvw,64a,vui",
      "https://www.meesho.com/men-full-sleeves-royal-blue-colored-solid-hooded-sweatshirt/p/616rlw",
      "https://www.flipkart.com/flyind-vogue-outfit-full-sleeve-printed-men-women-sweatshirt/p/itmb731305ee427b?pid=SWSH4CFGXZT8AVRB&lid=LSTSWSH4CFGXZT8AVRBZCFU9V&marketplace=FLIPKART&store=clo%2Fqvw%2F64a%2Fvui&srno=b_1_1&otracker=browse&fm=organic&iid=en_1lakg_fNyc3Zm77sS6fLpwcNRJM5nBZXnFtXkIRokiYjjv5EHaw1VPs1mZoPtSIFDgrhfLONR8pDDZPHSzxH7A%3D%3D&ppt=None&ppn=None&ssid=q9t6c1ltww0000001754308903611",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_LX3GxrHB9WANwNUX-5YNKohlBci13qMy2coJyISnuTkhkQ5u2QHjvg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_LX3GxrHB9WANwNUX-5YNKohlBci13qMy2coJyISnuTkhkQ5u2QHjvg&s",
     ]
  },
  {
    name: "Sneakers",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDVD9xGmKrH3_6UWRBqX0084es7ZEg8qAscCJtVb6DmqEwckm63INnznWUJoysuIUBfInZvUibeOMt_Kpa7o4Gpj3YglwiXvE9WBD0yxVKaHIEKkQSrhxqqAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRCzc4wmzzmNXW3R1fTiwgTamJilAG_MfSaPRdetjZlpPWwYT8pR2NA9EL0UHqaLxGUKYTNxVY3wf7WtQ_HU-NcOn8SBV6ZsFMrjHD3d3fmGkDpeDjcFWf",
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPbjJl2jBOd3IveGbD1Gu3et3XjzBE2jUTtNU2e1Xtr4FZVH4l4hXrKKzBiBqdnFLkUkP_zMwaYDFs_zguWv_CUrbdQFxd-ivBDh9o3P1eLRIEI5gG12s9",



      
    ]
  },
  {
    name: "Black Cap",
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQEI8a1iMg3y1jjIObUQaGZr6LGeboIWLiuKUo_EbwIjjxSw8vBbqUnw7gFEgG0MCI6m-OFE_ESyP0tQD1x_5wpaST_P8Lu-RfkvNYdWeuTCRTOT-PvkC-bw",
      "https://www.meesho.com/s/p/4fao00?utm_source=s_cc",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHdrrfDxv1nIR-jwk1YCyxjMdxjVUcaD3zGANsgZwvqk83O2k86_RBHf08jD8xTOan1kH5k5MeJTIGn9oP0cREvxORJyAgSx_-djC4gi-wQ2ZNHeJ38Iyd",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvKgmVQxA50LLCdK44v8HOqttmklCV_zoDSW2IpqNEb1kKfeJ9jgW06Y&s",

    ]
  }
];

const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

function renderProducts(list) {
  container.innerHTML = "";
  list.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";

    const imageGallery = product.images
      .map(
        (img) => `
          <a href="${img}" target="_blank">
            <img src="${img}" loading="lazy" alt="${product.name}" />
          </a>
        `
      )
      .join("");

    div.innerHTML = `
      <h2>${product.name}</h2>
      <div class="gallery">${imageGallery}</div>
    `;
    container.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});

renderProducts(products);
