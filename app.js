// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navbar-links");

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})

// tabbed content
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const productDetails = document.querySelector("#product-details");
const deliveryInformation = document.querySelector("#delivery-information");

tab1.addEventListener('click', () => {
    tab1.classList.add('is-active')
    tab2.classList.remove('is-active')
    productDetails.classList.remove('is-hidden')
    deliveryInformation.classList.add('is-hidden')
})

tab2.addEventListener('click', () => {
    tab2.classList.add('is-active')
    tab1.classList.remove('is-active')
    productDetails.classList.add('is-hidden')
    deliveryInformation.classList.remove('is-hidden')
})

// Add to cart butotn synchronisation
const cart = document.querySelector('#cart');
const addToCart = document.querySelector('#add-to-cart');
const reset = document.querySelector('#reset');

let cartContent = 0;

addToCart.addEventListener('click', () => {
    cartContent += 1
    cart.textContent = `Shopping Cart (${cartContent})`
})

reset.addEventListener('click', () => {
    cartContent = 0
    cart.textContent = `Shopping Cart (${cartContent})`
})

//discount modal when addToCart is clicked
const modal = document.querySelector('#discount-modal');
const modalBg = document.querySelector("#modal-bg");

addToCart.addEventListener('click', () => { 
    if (cartContent === 1) {
        modal.classList.add("is-active")
    }
})

modalBg.addEventListener('click', () => {
    modal.classList.remove("is-active")
})

//Sign up to newsletter modal
const signUpModal = document.querySelector('#sign-modal');
const signButton = document.querySelector('#sign-up');
const modal2Bg = document.querySelector("#modal-bg2");

signButton.addEventListener('click', () => {
    signUpModal.classList.add('is-active')
})

modal2Bg.addEventListener('click', () => {
    signUpModal.classList.remove('is-active')
})

const signedUpButton = document.querySelector('#signed-up')
const checkbox = document.querySelector('#checkbox')
signedUpButton.addEventListener('click', () => {
    if (checkbox.checked) {
        alert('Signed up successfully')
    }
})