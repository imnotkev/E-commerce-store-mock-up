let items;

async function renderItems(filter) {
  const itemsWrapper = document.querySelector(".items");
  itemsWrapper.classList += " items__loading";

  if (!items) {
    items = await getItems();
  }
  itemsWrapper.classList.remove("items__loading");

  if (filter === "LOW_TO_HIGH") {
    items.sort(
      (a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
    );
  } else if (filter === "HIGH_TO_LOW") {
    items.sort(
      (a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
    );
  } else if (filter === "POPULARITY") {
    items.sort((a, b) => b.amountSold - a.amountSold);
  }

  const itemsHtml = items
    .map((item) => {
      return `<div class="item">
      <figure class="item__img--wrapper">
          <img class="item__img" src="${item.url}">
      </figure>
      <div class="item__title">
          ${item.title}
      </div>
      <div class="item__price">
      ${priceHtml(item.originalPrice, item.salePrice)}
      </div>
  </div>`;
    })
    .join("");

  itemsWrapper.innerHTML = itemsHtml;
}

function filterItems(event) {
  renderItems(event.target.value);
}

function priceHtml(originialPrice, salePrice) {
  if (!salePrice) {
    return `$${originialPrice.toFixed(2)}`;
  }
  return `<span class="item__price--normal">$${originialPrice.toFixed(
    2
  )}</span> $${salePrice.toFixed(2)}`;
}

setTimeout(() => {
  renderItems();
});

// FAKE DATA
function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "JUICE WRLD X VLONE BONES HOODIE BLACK",
            url: "./assets/black-hoodie-1-front.jpg",
            originalPrice: 149.99,
            salePrice: null,
            amountSold: 950,
          },
          {
            id: 2,
            title: "JUICE WRLD X VLONE BONES HOODIE WHITE",
            url: "./assets/white-hoodie-1-front.jpg",
            originalPrice: 149.99,
            salePrice: 99.99,
            amountSold: 576,
          },
          {
            id: 3,
            title: "JUICE WRLD X VLONE LUMIN HOODIE BLACK",
            url: "./assets/white-hoodie-2-front.jpg",
            originalPrice: 149.99,
            salePrice: null,
            amountSold: 750,
          },
          {
            id: 4,
            title: "JUICE WRLD X VLONE LUMIN HOODIE WHITE",
            url: "./assets/black-hoodie-2-front.jpg",
            originalPrice: 149.99,
            salePrice: 99.99,
            amountSold: 610,
          },
          {
            id: 5,
            title: "JUICE WRLD VINYL FIGURE",
            url: "./assets/juice-figure.jpg",
            originalPrice: 249.99,
            salePrice: null,
            amountSold: 350,
          },
          {
            id: 6,
            title: "JUICE WRLD “FIGHTING DEMONS” LIMITED EDITION OFFICIAL VINYL",
            url: "./assets/juice-vinyl.jpg",
            originalPrice: 49.99,
            salePrice: 34.99,
            amountSold: 700,
          },
          {
            id: 7,
            title: "FIGHTING DEMONS ALBUM COVER HOODIE BLACK",
            url: "./assets/juice-black-hoodie.jpg",
            originalPrice: 79.99,
            salePrice: null,
            amountSold: 643,
          },
          {
            id: 8,
            title: "FIGHTING DEMONS ALBUM COVER HOODIE WHITE",
            url: "./assets/juice-white-hoodie.jpg",
            originalPrice: 79.99,
            salePrice: null,
            amountSold: 654,
          },
          {
            id: 9,
            title: "999DBYE & 999DRIDDANCE TRIPLE PLATINUM ANNIVERSARY TEE BLUE",
            url: "./assets/juice-blue-tshirt.jpg",
            originalPrice: 34.99,
            salePrice: 29.99,
            amountSold: 270,
          },
          {
            id: 10,
            title: "999DBYE & 999DRIDDANCE 4 YEAR ANNIVERSARY SHORTS",
            url: "./assets/juice-black-shorts.jpg",
            originalPrice: 49.99,
            salePrice: 29.99,
            amountSold: 189,
          },
          {
            id: 11,
            title: "DEATH RACE FOR LOVE SWEATPANTS BLACK",
            url: "./assets/juice-black-pants.jpg",
            originalPrice: 69.99,
            salePrice: 54.99,
            amountSold: 342,
          },
          {
            id: 12,
            title: "GOODBYE & GOOD RIDDANCE SWEATPANTS",
            url: "./assets/juice-white-pants.jpg",
            originalPrice: 69.99,
            salePrice: null,
            amountSold: 250,
          },
        ])
      }, 1000);
    });
  }