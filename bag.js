let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary()

}
 

function displayBagSummary() {
  let bagSummaryElement = document.querySelector(".bag-summary")

  let totalItem = 0
  let totalMRP = 0
  let totalDiscount = 0


  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price
  });

  let totalamount = totalMRP - totalDiscount 

  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">- ₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Platform Fee</span>
      <span class="price-item-value plat-fee"><span class="ship-fee">₹99</span>FREE</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Shipping Fee</span>
      <span class="price-item-value plat-fee"><span class="ship-fee">₹49</span>FREE</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${totalamount}</span>
    </div>
  </div>
  <button class="btn-place-order">
   <a href="address.html"><div class="place-order">PLACE ORDER</div></a>
  </button>
  `;
}

function loadBagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary()

}

function generateItemHTML(item) {
  return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs. ${item.current_price}</span>
        <span class="original-price">Rs. ${item.original_price}</span>
        <span class="discount"> Rs. (${item.discount} OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">x</div>
  </div>`;
}