
// let bagItems = []

// onLoad()
// function onLoad() {
//     displayItemonHomePage();
//     displayBagIcon();
//     let bagItemsStr = localStorage.getItem('bagItems')
//     bagItems = bagItemsStr ? JSON.parse(bagItemsStr): []


// }


// function addToBag(itemId) {
//     bagItems.push(itemId)
//     displayBagIcon();
//     localStorage.setItem('bagItems',JSON.stringify(bagItems));
// };

// function displayBagIcon() {
//     let bagItemsCountElement = document.querySelector(".bag-item-count");
//     if (bagItems.length > 0) {
//         bagItemsCountElement.style.visibility = "visible"
//         bagItemsCountElement.innerText = bagItems.length
//     } else {
//         bagItemsCountElement.style.visibility = "hidden"
//     }

// };

// function displayItemonHomePage() {

// if (!itemsContainer) {
//     return
// }

// let itemContainerElement = document.querySelector(".items-container");

// let innerHTML = ""
// items.forEach(item => {
//     innerHTML += `<div class="item-container">
//         <img class="item-img" src="${item.image}" alt="watch1">
//         <div class="watch-rating"> ${item.watch_rating.start} ★ ${item.watch_rating.end} </div>
//         <div class="watch-name">${item.watch_name}</div>
//         <div class="watch-model">${item.watch_model}</div>
//         <div class="price">
//             <span class="current-price">Rs. ${item.current_price}</span>
//             <span class="original-price">Rs. ${item.original_price}</span>
//             <span class="discount">(Rs. ${item.discount} OFF)</span>
//         </div>
//         <button class="btn">Add to Bag</button>
//     </div>`;    
// });

// itemContainerElement.innerHTML = innerHTML



let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ★ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs. ${item.current_price}</span>
          <span class="original-price">Rs. ${item.original_price}</span>
          <span class="discount">(Rs. ${item.discount} OFF)</span>
      </div>
     
      <button class="btn-add-bag1" onclick="addToBag(${item.id})">Buy Now</button>
       <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
       
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}