// bank offer js.........

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-button");
  const offerDetails = document.querySelector(".offer-details");
  const arrowIcon = toggleButton.querySelector(".arrow");

  toggleButton.addEventListener("click", () => {
    offerDetails.style.display =
      offerDetails.style.display === "block" ? "none" : "block";

    toggleButton.classList.toggle("show");
    toggleButton.innerHTML =
      offerDetails.style.display === "block"
        ? 'Show Less <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" class="offersV2-base-arrowIcon" style="transform: rotate(-90deg);"><path fill-rule="evenodd" d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"></path></svg></span>'
        : 'Show More <span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" class="offersV2-base-arrowIcon" style="transform: rotate(90deg);"><path fill-rule="evenodd" d="M6.797 5.529a.824.824 0 0 0-.042-.036L1.19.193a.724.724 0 0 0-.986 0 .643.643 0 0 0 0 .94L5.316 6 .203 10.868a.643.643 0 0 0 0 .938.724.724 0 0 0 .986 0l5.566-5.299a.644.644 0 0 0 .041-.978"></path></svg></span>';
  });
});

// payment js 

document.addEventListener("DOMContentLoaded", () => {
  const paymentList = document.querySelectorAll("#payment-list li");
  const methodInfo = document.getElementById("method-info");
  const detailsForm = document.getElementById("details-form");
  const placeOrderButton = document.getElementById("place-order");

  const paymentDetails = {
    recommended: {
      description: "You can pay via Cash/UPI on delivery.",
      form: `<label>
                    <input type="radio" name="cod-option" value="cash" required> Cash on Delivery (Cash/UPI)
                        <span class="cod-option">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 24 16"
                                prefix="">
                                <g fill="none" fill-rule="evenodd" transform="rotate(-6 29.622 -5.581)">
                                    <path stroke="#000"
                                        d="M19.938 1.386l1.03.072a1 1 0 0 1 .928 1.067l-.697 9.976a1 1 0 0 1-1.068.927L1.988 11.946">
                                    </path>
                                    <rect width="20" height="12" stroke="#000" rx="1"></rect>
                                    <path fill="#000" fill-rule="nonzero"
                                        d="M10.622 10l.744-.36-2.27-2.38c.216-.039.427-.101.633-.188.206-.086.394-.199.563-.336.17-.138.317-.3.441-.488.125-.188.214-.4.267-.637h1v-.798h-.992a1.612 1.612 0 0 0-.067-.234 2.82 2.82 0 0 0-.24-.5 1.462 1.462 0 0 0-.146-.204H12V3H8.122v.875h.559c.218 0 .414.025.588.075.174.05.325.117.454.204a1.276 1.276 0 0 1 .508.659h-2.11v.798h2.09c-.07.173-.179.32-.324.442a1.96 1.96 0 0 1-.488.298 3.005 3.005 0 0 1-1.063.23L8 7.198 10.622 10z">
                                    </path>
                                    <path stroke="#000"
                                        d="M3 0c-.167.833-.5 1.5-1 2s-1.167.833-2 1M3 12c-.167-.833-.5-1.5-1-2S.833 9.167 0 9M17 0c.167.833.5 1.5 1 2s1.167.833 2 1M17 12c.167-.833.5-1.5 1-2s1.167-.833 2-1">
                                    </path>
                                </g>
                            </svg>
                        </span>
                        <p class="inner-text">You can pay via Cash/UPI on delivery. </p>
            </label>
                      
                <br>
                
                    <label>
                        <input type="radio" name="cod-option" value="upi" required> Lazypay
                        <span class="lazypay-option">
                            <img src="https://constant.myntassets.com/checkout/assets/img/lazypay.png" alt="lazypay">
                        </span>
                    </label>
                </div>`
    },
    cod: {
      description: "You can pay via Cash/UPI on delivery.",
      form: `<label>
                <input type="radio" name="cod-option" value="cash" required> Cash on Delivery (Cash/UPI)
                <p class="inner-text">You can pay via Cash/UPI on delivery. </p>
             </label>`
    },
    upi: {
      description: "Pay securely using your UPI app.",
      form: `<label for="upi-id">Enter UPI ID:</label>
             <input class="upi-box" type="text" id="upi-id" placeholder="example@upi" required />`
    },
    card: {
      description: "Enter your credit or debit card details.",
      form: `<label for="card-number">Card Number:</label>
             <input  class="card-box" type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" required />
             <label for="card-number">Name:</label>
             <input  class="card-box" type="text" id="card-number" placeholder="Name on Card" required />
             <label for="expiry-date">Expiry Date:</label>
             <input class="card-box" type="month" id="expiry-date" older= required />
             <label for="cvv">CVV:</label>
             <input class="card-box" type="text" id="cvv" placeholder="XXX" maxlength="3" required />`
    },
    paylater: {
      description: "Pay later with flexible options.",
      form: `<label for="wallet-option">Choose Pay Later Account:</label>
             <select id="wallet-option" required>
               <option value="">Select a Account</option>
               <option value="paytm">Myntra Pay Later</option>
               <option value="amazonpay">Amazon Pay Later</option>
               <option value="phonepe">Flipkart Pay Later</option>
             </select>`
    },
    wallet: {
      description: "Use wallets like Paytm, Amazon Pay, etc.",
      form: `<label for="wallet-option">Choose Wallet:</label>
             <select id="wallet-option" required>
               <option value="">Select a Wallet</option>
               <option value="paytm">Paytm</option>
               <option value="amazonpay">Amazon Pay</option>
               <option value="phonepe">PhonePe</option>
             </select>`
    },
    emi: {
      description: "Choose EMI options with your bank.",
      form: `<label for="emi-bank">Select Bank:</label>
             <select id="emi-bank" required>
               <option value="">Select a Bank</option>
               <option value="hdfc">HDFC Credit Card EMI</option>
               <option value="icici">ICICI Credit Card EMI</option>
               <option value="kotak">Kotak Credit Card EMI</option>
               <option value="sbi">SBI Credit Card EMI</option>
               <option value="idfc">IDFC Credit Card EMI</option>
               <option value="axis">Axis Credit Card EMI</option>
               <option value="hsbc">HSBC Credit Card EMI</option>
             </select>
             <label for="emi-tenure">Choose Tenure:</label>
             <select id="emi-tenure" required>
               <option value="">Select Tenure</option>
               <option value="3">3 months</option>
               <option value="6">6 months</option>
               <option value="12">12 months</option>
             </select>`
    },
    netbanking: {
      description: "Pay securely through net banking.",
      form: `<label for="netbank-bank">Select Bank:</label>
             <select id="netbank-bank" required>
               <option value="">Select a Bank</option>
                 <option value="axis">Axis Bank</option>
               <option value="hdfc">HDFC Bank</option>
               <option value="icici">ICICI Bank</option>
               <option value="sbi">SBI</option>
               <option value="kotak">Kotak</option>
             </select>`
    }
  };

  paymentList.forEach((item) => {
    item.addEventListener("click", () => {
      // Highlight selected payment method
      paymentList.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");

      // Display method details and form
      const method = item.getAttribute("data-method");
      methodInfo.innerHTML = `<p>${paymentDetails[method].description}</p>`;
      detailsForm.innerHTML = paymentDetails[method].form;

      // Enable the Place Order button
      if (method === "cod") {
        const codOptions = document.getElementsByName("cod-option");
        codOptions.forEach((radio) => {
          radio.addEventListener("change", () => {
            placeOrderButton.disabled = false;
          });
        });
      } else {
        placeOrderButton.disabled = false; // Enable button for other methods
      }
    });
  });



  // placeOrderButton.addEventListener("click", () => {
  //   alert("Order placed successfully!");
  // });
});






