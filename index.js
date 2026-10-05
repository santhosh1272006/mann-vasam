
            // menu-btn
            

const menuBtn = document.getElementById("menuBtn");
const navall = document.querySelector(".navall");

menuBtn.addEventListener("click", function() {

    navall.classList.toggle("active");

});

/*------------------------------------------------------------------------------------*/


        // Nav bar Login page


const overlay = document.getElementById('overlay');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeBtn');
 
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const modalTitle = document.getElementById('modalTitle');
 
  openBtn.addEventListener('click', () => overlay.classList.add('active'));
  closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
 
  function showLogin() {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    modalTitle.textContent = 'Login';
  }
 
  function showSignup() {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    modalTitle.textContent = 'Sign Up';
  }
 
  loginTab.addEventListener('click', showLogin);
  signupTab.addEventListener('click', showSignup);
  document.getElementById('toSignup').addEventListener('click', showSignup);
  document.getElementById('toLogin').addEventListener('click', showLogin);
 
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login form submitted! (connect this to your backend)');
  });
 
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signup form submitted! (connect this to your backend)');
  });


  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});


  
/*-----------------------------------------------------------------------------------------------------*/

    // mobile Nav bar 

    


/*------------------------------------------------------------------------------------------*/
        // box 1 (shop now )

document.getElementById("shopNow").addEventListener("click", function () {
    document.getElementById("shopSection").scrollIntoView({
        behavior: "smooth"
    });
});

        // box 1 (explore more )

document.getElementById("exploremore").addEventListener("click", function () {
    document.getElementById("productSection").scrollIntoView({
        behavior: "smooth"
    });
});


        // box 14 (shop now )

document.getElementById("shop").addEventListener("click", function () {
    document.getElementById("shopSection").scrollIntoView({
        behavior: "smooth"
    });
});

/*----------------------------------------------------------------------------------------------------------------*/

            // Whatsapp Via Button Last box


document.getElementById('orderBtn').addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const message = document.getElementById('userMessage').value.trim();

    if (!name || !phone) {
        alert('Please enter your name and phone number');
        return;
    }

    const businessNumber = "919345486145"; 

    const text = `Hello, I'd like to place an order.%0A
Name: ${name}%0A
Phone: ${phone}%0A
Message: ${message || 'N/A'}`;

    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

    const url = isMobile
        ? `https://wa.me/${businessNumber}?text=${text}`
        : `https://web.whatsapp.com/send?phone=${businessNumber}&text=${text}`;

    window.open(url, '_blank');
});

/*--------------------------------------------------------------------------------------------------------*/


            // Shop section box4, box5

document.querySelector('.now').addEventListener('click', () => {
    document.getElementById('shopSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

/*---------------------------------------------------------------------------------------------------------------*/



            // box9 Mission and vision


function toggleMore(section) {
  const content = document.getElementById('moreInfo' + section);
  const label = document.getElementById('viewLabel' + section);
  const arrow = document.getElementById('arrowIcon' + section);

  const isOpen = content.classList.toggle('show');

  label.textContent = isOpen ? 'VIEW LESS' : 'VIEW MORE';
  arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}




/*------------------------------------------------------------------------------------------------------------------*/


            // box6 regsiter as farmer


document.addEventListener("DOMContentLoaded", function () {
    /* ============================
       GET ELEMENTS
    ============================ */

    const openBtn =
        document.getElementById("registerFarmerBtn");
    const closeBtn =
        document.getElementById("closeFormBtn");
    const overlay =
        document.getElementById("modalOverlay");
    const form =
        document.getElementById("farmerForm");
    const successMsg =
        document.getElementById("successMsg");

    /* ============================
       OPEN FORM
    ============================ */

    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        overlay.classList.add("open");
        successMsg.classList.remove("show");
        form.style.display = "block";
    });

    /* ============================
       CLOSE FORM
    ============================ */

    closeBtn.addEventListener("click", function () {
        overlay.classList.remove("open");
    });

    /* ============================
       CLICK OUTSIDE FORM
    ============================ */

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            overlay.classList.remove("open");
        }

    });

    /* ============================
       ERROR FUNCTION
    ============================ */

    function setError(fieldId, hasError) {
        document
            .getElementById(fieldId)
            .classList.toggle("error", hasError);
    }

    /* ============================
       NAME VALIDATION
    ============================ */

    function validateName() {
        const value =
            document
                .getElementById("fullName")
                .value
                .trim();
        const valid = value.length >= 3;
        setError("field-name", !valid);
        return valid;

    }

    /* ============================
       PHONE VALIDATION
    ============================ */

    function validatePhone() {
        const value =
            document
                .getElementById("phone")
                .value
                .trim();
        const valid =
            /^[6-9]\d{9}$/.test(value);
        setError("field-phone", !valid);
        return valid;
    }

    /* ============================
       EMAIL VALIDATION
    ============================ */

    function validateEmail() {
        const value =
            document
                .getElementById("email")
                .value
                .trim();
        const valid =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(value);
        setError("field-email", !valid);
        return valid;
    }

    /* ============================
       LOCATION VALIDATION
    ============================ */

    function validateLocation() {
        const value =
            document
                .getElementById("location")
                .value
                .trim();
        const valid = value.length >= 2;
        setError("field-location", !valid);
        return valid;
    }

    /* ============================
       PRODUCE VALIDATION
    ============================ */

    function validateProduce() {
        const value =
            document
                .getElementById("produce")
                .value;
        const valid = value !== "";
        setError("field-produce", !valid);
        return valid;
    }

    /* ============================
       LAND SIZE VALIDATION
    ============================ */

    function validateLandSize() {
        const value =
            parseFloat(
                document
                    .getElementById("landSize")
                    .value
            );
        const valid =
            !isNaN(value) && value > 0;
        setError("field-landsize", !valid);
        return valid;
    }


    /* ============================
       VALIDATE WHEN LEAVING FIELD
    ============================ */

    document
        .getElementById("fullName")
        .addEventListener("blur", validateName);
    document
        .getElementById("phone")
        .addEventListener("blur", validatePhone);
    document
        .getElementById("email")
        .addEventListener("blur", validateEmail);
    document
        .getElementById("location")
        .addEventListener("blur", validateLocation);
    document
        .getElementById("produce")
        .addEventListener("change", validateProduce);
    document
        .getElementById("landSize")
        .addEventListener("blur", validateLandSize);

    /* ============================
       FORM SUBMIT
    ============================ */

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const allValid = [
            validateName(),
            validatePhone(),
            validateEmail(),
            validateLocation(),
            validateProduce(),
            validateLandSize()
        ].every(Boolean);

        /* ============================
           IF VALIDATION FAILS
        ============================ */

        if (!allValid) {

            const firstError =
                document.querySelector(".field.error");

            if (firstError) {

                firstError
                    .querySelector("input, select")
                    .focus();
            }
            return;
        }

        /* ============================
           SUCCESS
        ============================ */
        form.style.display = "none";
        successMsg.classList.add("show");
        form.reset();

    });

});



/*=-----------------------------------------------------------------------------------------------------------*/





        // Last page box17


document.addEventListener("DOMContentLoaded", function () {

    const exploreBtn =
        document.getElementById("exploreBtn");

    const panel =
        document.getElementById("panel-terms");


    exploreBtn.addEventListener("click", function () {

        const isOpen =
            panel.classList.contains("open");


        if (isOpen) {

            /* CLOSE */

            panel.classList.remove("open");

            exploreBtn.classList.remove("active");

            exploreBtn.querySelector("span")
                .textContent = "EXPLORE";

        } else {

            /* OPEN */

            panel.classList.add("open");

            exploreBtn.classList.add("active");

            exploreBtn.querySelector("span")
                .textContent = "EXPLORE LESS";

        }

    });

});

/*------------------------------------------------------------------------------------------------------------------------*/

        // Add to cart (box4 and box5)



        document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       ELEMENTS
    ========================================= */

    const buttons =
        document.querySelectorAll(".buy");

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    const navCart =
        document.getElementById("navCart");

    const cartDropdown =
        document.getElementById("cartDropdown");

    const cartIconWrapper =
        document.querySelector(".cart-icon-wrapper");

    const closeCart =
        document.getElementById("closeCart");

    const checkoutBtn =
        document.getElementById("checkoutBtn");

    const checkoutPage =
        document.getElementById("checkoutPage");

    const checkoutItems =
        document.getElementById("checkoutItems");

    const checkoutTotal =
        document.getElementById("checkoutTotal");

    const placeOrder =
        document.getElementById("placeOrder");

    const thankYou =
        document.getElementById("thankYou");

    const continueShopping =
        document.getElementById("continueShopping");


    /* =========================================
       CART ARRAY
    ========================================= */

    let cart = [];


    /* =========================================
       BUY BUTTON
    ========================================= */

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {


                /* GET PRODUCT CARD */

                const productCard =
                    button.closest(".product-card");


                /* PRODUCT NAME */

                const name =
                    button.dataset.name;


                /* PRICE */

                const basePrice =
                    parseFloat(
                        button.dataset.price
                    );


                /* WEIGHT SELECT */

                const weightSelect =
                    productCard.querySelector(
                        ".weight-select"
                    );


                /* SELECTED WEIGHT */

                const weight =
                    parseInt(
                        weightSelect.value
                    );


                /* TOTAL PRICE */

                const totalPrice =
                    basePrice * weight;


                /* =================================
                   CHECK EXISTING ITEM
                ================================= */

                const existing =
                    cart.find(function (item) {

                        return (
                            item.name === name &&
                            item.weight === weight
                        );

                    });


                /* =================================
                   ADD OR INCREASE QUANTITY
                ================================= */

                if (existing) {

                    existing.quantity++;

                } else {

                    cart.push({

                        name: name,

                        weight: weight,

                        price: totalPrice,

                        quantity: 1

                    });

                }


                /* =================================
                   UPDATE CART
                ================================= */

                updateCart();


                /* =================================
                   BUY BUTTON TEXT
                ================================= */

                const buttonText =
                    button.querySelector("p");

                if (buttonText) {

                    buttonText.textContent =
                        "Added ✓";

                    setTimeout(function () {

                        buttonText.textContent =
                            "Buy Now";

                    }, 1200);

                }


                /* =================================
                   CART COUNT ANIMATION
                ================================= */

                cartCount.classList.remove("bump");

                void cartCount.offsetWidth;

                cartCount.classList.add("bump");


                /* =================================
                   CART ICON ANIMATION
                ================================= */

                navCart.classList.remove(
                    "cart-highlight"
                );

                void navCart.offsetWidth;

                navCart.classList.add(
                    "cart-highlight"
                );


                /* =================================
                   OPEN CART AFTER BUY
                ================================= */

                navCart.classList.add("active");


            }
        );

    });


    /* =========================================
       UPDATE CART
    ========================================= */

    function updateCart() {


        cartItems.innerHTML = "";


        let total = 0;

        let count = 0;


        /* =================================
           EMPTY CART
        ================================= */

        if (cart.length === 0) {

            cartItems.innerHTML = `

                <p class="empty-cart">
                    Your cart is empty
                </p>

            `;

        }


        /* =================================
           CART ITEMS
        ================================= */

        cart.forEach(function (item, index) {


            const itemTotal =
                item.price * item.quantity;


            total += itemTotal;

            count += item.quantity;


            const itemDiv =
                document.createElement("div");


            itemDiv.className =
                "cart-item";


            itemDiv.innerHTML = `

                <div class="cart-item-info">

                    <span class="cart-item-name">

                        ${item.name}

                    </span>


                    <span class="cart-item-weight">

                        ${item.weight} KG × ${item.quantity}

                    </span>


                    <span class="cart-item-price">

                        ₹${itemTotal.toFixed(2)}

                    </span>

                </div>


                <button
                    type="button"
                    class="remove-item"
                    data-index="${index}">

                    <i class="fa-solid fa-trash"></i>

                </button>

            `;


            cartItems.appendChild(
                itemDiv
            );

        });


        /* =================================
           UPDATE CART COUNT
        ================================= */

        cartCount.textContent =
            count;


        /* =================================
           UPDATE TOTAL
        ================================= */

        cartTotal.textContent =
            "₹" + total.toFixed(2);


        /* =================================
           REMOVE ITEM
        ================================= */

        document
            .querySelectorAll(".remove-item")
            .forEach(function (removeBtn) {

                removeBtn.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();


                        const index =
                            parseInt(
                                removeBtn.dataset.index
                            );


                        cart.splice(
                            index,
                            1
                        );


                        updateCart();

                    }
                );

            });

    }


    /* =========================================
       CART ICON CLICK
    ========================================= */

    cartIconWrapper.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            navCart.classList.toggle(
                "active"
            );

        }
    );


    /* =========================================
       CLOSE CART BUTTON ×
    ========================================= */

    if (closeCart) {

        closeCart.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                navCart.classList.remove(
                    "active"
                );

            }
        );

    }


    /* =========================================
       PREVENT DROPDOWN CLICK CLOSE
    ========================================= */

    cartDropdown.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    /* =========================================
       CLICK OUTSIDE CLOSE
    ========================================= */

    document.addEventListener(
        "click",
        function () {

            navCart.classList.remove(
                "active"
            );

        }
    );


    /* =========================================
       CHECKOUT BUTTON
    ========================================= */

    checkoutBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            /* EMPTY CART */

            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add a product first."
                );

                return;

            }


            /* CREATE CHECKOUT */

            createCheckout();


            /* CLOSE CART */

            navCart.classList.remove(
                "active"
            );


            /* HIDE PRODUCTS */

            document
                .querySelector(".products")
                .style.display = "none";


            /* SHOW CHECKOUT */

            checkoutPage.classList.add(
                "show"
            );


            /* SCROLL */

            checkoutPage.scrollIntoView({

                behavior: "smooth"

            });

        }
    );


    /* =========================================
       CREATE CHECKOUT
    ========================================= */

    function createCheckout() {


        checkoutItems.innerHTML = "";


        let total = 0;


        cart.forEach(function (item) {


            const itemTotal =
                item.price * item.quantity;


            total += itemTotal;


            const checkoutItem =
                document.createElement("div");


            checkoutItem.className =
                "checkout-item";


            checkoutItem.innerHTML = `

                <div class="checkout-item-info">

                    <span class="checkout-item-name">

                        ${item.name}

                    </span>


                    <span class="checkout-item-details">

                        ${item.weight} KG × ${item.quantity}

                    </span>

                </div>


                <span class="checkout-item-price">

                    ₹${itemTotal.toFixed(2)}

                </span>

            `;


            checkoutItems.appendChild(
                checkoutItem
            );

        });


        checkoutTotal.textContent =
            "₹" + total.toFixed(2);

    }


    /* =========================================
       PLACE ORDER
    ========================================= */

    placeOrder.addEventListener(
        "click",
        function () {


            /* HIDE CHECKOUT */

            checkoutPage.classList.remove(
                "show"
            );


            /* SHOW THANK YOU */

            thankYou.classList.add(
                "show"
            );


            /* CLEAR CART */

            cart = [];


            updateCart();


            /* SCROLL */

            thankYou.scrollIntoView({

                behavior: "smooth"

            });

        }
    );


    /* =========================================
       CONTINUE SHOPPING
    ========================================= */

    continueShopping.addEventListener(
        "click",
        function () {


            /* HIDE THANK YOU */

            thankYou.classList.remove(
                "show"
            );


            /* SHOW PRODUCTS */

            document
                .querySelector(".products")
                .style.display = "grid";


            /* SCROLL TO PRODUCTS */

            document
                .querySelector(".products")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }
    );


    /* =========================================
       INITIAL CART
    ========================================= */

    updateCart();


});


/* =========================================
   EXPLORE PRODUCT BUTTON
========================================= */

document
    .getElementById("exploreProduct")
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "products.html";

        }
    );

// document.addEventListener("DOMContentLoaded", function () {


//     /* =========================================
//        ELEMENTS
//     ========================================= */

//     const buttons =
//         document.querySelectorAll(".buy");

//     const cartCount =
//         document.getElementById("cartCount");

//     const cartItems =
//         document.getElementById("cartItems");

//     const cartTotal =
//         document.getElementById("cartTotal");

//     const navCart =
//         document.getElementById("navCart");

//     const closeCart =
//         document.getElementById("closeCart");

//     const checkoutBtn =
//         document.getElementById("checkoutBtn");

//     const checkoutPage =
//         document.getElementById("checkoutPage");

//     const checkoutItems =
//         document.getElementById("checkoutItems");

//     const checkoutTotal =
//         document.getElementById("checkoutTotal");

//     const placeOrder =
//         document.getElementById("placeOrder");

//     const thankYou =
//         document.getElementById("thankYou");

//     const continueShopping =
//         document.getElementById("continueShopping");


//     /* =========================================
//        CART ARRAY
//     ========================================= */

//     let cart = [];


//     /* =========================================
//        BUY BUTTON
//     ========================================= */

//     buttons.forEach(function (button) {

//         button.addEventListener("click", function () {


//             /* GET PRODUCT CARD */

//             const productCard =
//                 button.closest(".product-card");


//             /* PRODUCT NAME */

//             const name =
//                 button.dataset.name;


//             /* PRICE PER KG */

//             const basePrice =
//                 parseFloat(
//                     button.dataset.price
//                 );


//             /* SELECT */

//             const weightSelect =
//                 productCard.querySelector(
//                     ".weight-select"
//                 );


//             /* SELECTED KG */

//             const weight =
//                 parseInt(
//                     weightSelect.value
//                 );


//             /* TOTAL FOR SELECTED KG */

//             const totalPrice =
//                 basePrice * weight;


//             /* =================================
//                CHECK EXISTING ITEM
//             ================================= */

//             const existing =
//                 cart.find(function (item) {

//                     return (
//                         item.name === name &&
//                         item.weight === weight
//                     );

//                 });


//             /* =================================
//                ADD OR INCREASE
//             ================================= */

//             if (existing) {

//                 existing.quantity++;

//             } else {

//                 cart.push({

//                     name: name,

//                     weight: weight,

//                     price: totalPrice,

//                     quantity: 1

//                 });

//             }


            

//             /* =================================
//                UPDATE CART
//             ================================= */

//             updateCart();


//             /* =================================
//                BUY BUTTON ANIMATION
//             ================================= */

//             const buttonText =
//                 button.querySelector("p");


//             buttonText.textContent =
//                 "Added ✓";


//             setTimeout(function () {

//                 buttonText.textContent =
//                     "Buy Now";

//             }, 1200);


//             /* =================================
//                CART COUNT ANIMATION
//             ================================= */

//             cartCount.classList.remove("bump");

//             void cartCount.offsetWidth;

//             cartCount.classList.add("bump");


//             /* =================================
//                CART ICON HIGHLIGHT
//             ================================= */

//             navCart.classList.remove(
//                 "cart-highlight"
//             );

//             void navCart.offsetWidth;

//             navCart.classList.add(
//                 "cart-highlight"
//             );


//             /* =================================
//                OPEN CART
//             ================================= */

//             navCart.classList.add(
//                 "active"
//             );


//             /* =================================
//                CLOSE CART
//             ================================= */

//             setTimeout(function () {

//                 navCart.classList.remove(
//                     "active"
//                 );

//             }, 3000);

//         });

//     });



//     /* =========================================
//        UPDATE CART
//     ========================================= */

//     function updateCart() {


//         cartItems.innerHTML = "";


//         let total = 0;

//         let count = 0;


//         /* =================================
//            EMPTY
//         ================================= */

//         if (cart.length === 0) {

//             cartItems.innerHTML = `

//                 <p class="empty-cart">
//                     Your cart is empty
//                 </p>

//             `;

//         }


//         /* =================================
//            CART ITEMS
//         ================================= */

//         cart.forEach(function (item, index) {


//             const itemTotal =
//                 item.price * item.quantity;


//             total += itemTotal;

//             count += item.quantity;


//             const itemDiv =
//                 document.createElement("div");


//             itemDiv.className =
//                 "cart-item";


//             itemDiv.innerHTML = `

//                 <div class="cart-item-info">

//                     <span class="cart-item-name">

//                         ${item.name}

//                     </span>


//                     <span class="cart-item-weight">

//                         ${item.weight} KG
//                         ×
//                         ${item.quantity}

//                     </span>


//                     <span class="cart-item-price">

//                         ₹${itemTotal.toFixed(2)}

//                     </span>

//                 </div>


//                 <button
//                     class="remove-item"
//                     data-index="${index}">

//                     <i class="fa-solid fa-trash"></i>

//                 </button>

//             `;


//             cartItems.appendChild(
//                 itemDiv
//             );

//         });


//         /* =================================
//            UPDATE NAV CART COUNT
//         ================================= */

//         cartCount.textContent =
//             count;


//         /* =================================
//            UPDATE CART TOTAL
//         ================================= */

//         cartTotal.textContent =
//             "₹" + total.toFixed(2);


//         /* =================================
//            REMOVE BUTTONS
//         ================================= */

//         document
//             .querySelectorAll(".remove-item")
//             .forEach(function (removeBtn) {

//                 removeBtn.addEventListener(
//                     "click",
//                     function (event) {

//                         event.stopPropagation();


//                         const index =
//                             parseInt(
//                                 removeBtn.dataset.index
//                             );


//                         cart.splice(
//                             index,
//                             1
//                         );


//                         updateCart();

//                     }
//                 );

//             });

//     }


//     /* =========================================
//        CHECKOUT BUTTON
//     ========================================= */

//     checkoutBtn.addEventListener(
//         "click",
//         function (event) {

//             event.stopPropagation();


//             /* NO ITEMS */

//             if (cart.length === 0) {

//                 alert(
//                     "Your cart is empty. Please add a product first."
//                 );

//                 return;

//             }


//             /* CREATE CHECKOUT */

//             createCheckout();


//             /* CLOSE CART */

//             navCart.classList.remove(
//                 "active"
//             );


//             /* HIDE PRODUCTS */

//             document
//                 .querySelector(".products")
//                 .style.display = "none";


//             /* SHOW CHECKOUT */

//             checkoutPage.classList.add(
//                 "show"
//             );


//             /* SCROLL */

//             checkoutPage.scrollIntoView({
//                 behavior: "smooth"
//             });

//         }
//     );


//     /* =========================================
//        CREATE CHECKOUT
//     ========================================= */

//     function createCheckout() {

//         checkoutItems.innerHTML = "";


//         let total = 0;


//         cart.forEach(function (item) {


//             const itemTotal =
//                 item.price * item.quantity;


//             total += itemTotal;


//             const checkoutItem =
//                 document.createElement("div");


//             checkoutItem.className =
//                 "checkout-item";


//             checkoutItem.innerHTML = `

//                 <div class="checkout-item-info">

//                     <span class="checkout-item-name">

//                         ${item.name}

//                     </span>


//                     <span class="checkout-item-details">

//                         ${item.weight} KG
//                         ×
//                         ${item.quantity}

//                     </span>

//                 </div>


//                 <span class="checkout-item-price">

//                     ₹${itemTotal.toFixed(2)}

//                 </span>

//             `;


//             checkoutItems.appendChild(
//                 checkoutItem
//             );

//         });


//         checkoutTotal.textContent =
//             "₹" + total.toFixed(2);

//     }


//     /* =========================================
//        PLACE ORDER
//     ========================================= */

//     placeOrder.addEventListener(
//         "click",
//         function () {


//             /* HIDE CHECKOUT */

//             checkoutPage.classList.remove(
//                 "show"
//             );


//             /* SHOW THANK YOU */

//             thankYou.classList.add(
//                 "show"
//             );


//             /* CLEAR CART */

//             cart = [];


//             updateCart();


//             /* SCROLL */

//             thankYou.scrollIntoView({
//                 behavior: "smooth"
//             });

//         }
//     );


//     /* =========================================
//        CONTINUE SHOPPING
//     ========================================= */

//     continueShopping.addEventListener(
//         "click",
//         function () {


//             /* HIDE THANK YOU */

//             thankYou.classList.remove(
//                 "show"
//             );


//             /* SHOW PRODUCTS */

//             document
//                 .querySelector(".products")
//                 .style.display = "grid";


//             /* SCROLL PRODUCTS */

//             document
//                 .querySelector(".products")
//                 .scrollIntoView({
//                     behavior: "smooth"
//                 });

//         }
//     );


//     /* =========================================
//        CART CLICK
//     ========================================= */

//     navCart.addEventListener(
//         "click",
//         function (event) {

//             event.stopPropagation();

//             navCart.classList.toggle(
//                 "active"
//             );

//         }
//     );


//     /* =========================================
//        PREVENT DROPDOWN CLOSE
//     ========================================= */

//     document
//         .getElementById("cartDropdown")
//         .addEventListener(
//             "click",
//             function (event) {

//                 event.stopPropagation();

//             }
//         );


//     /* =========================================
//        CLICK OUTSIDE CART
//     ========================================= */

//     document.addEventListener(
//         "click",
//         function () {

//             navCart.classList.remove(
//                 "active"
//             );

//         }
//     );


//     /* =========================================
//        INITIAL CART
//     ========================================= */

//     updateCart();

// });


// /*---------------------------------------------------------------------------------------------------*/

//             // explore button (box1)

// document.getElementById("exploreProduct").addEventListener("click", function () {

//     window.location.href = "products.html";

// });



/*---------------------------------------------------------------------------------------------------*/


           

/*---------------------------------------------------------------------------------------------------*/
