// var register = document.querySelector('.js-navbar--item__register')
// var modal = document.querySelector('.js-modal')
// var backModal = document.querySelector('.js-auth-form__btn-back')

// function showRegister() {
//     modal.classList.add('open')
// }

// register.addEventListener('click', showRegister)

// function EndshowRegister() {
//     modal.classList.remove('open')
// }

// backModal.addEventListener('click', EndshowRegister)

var categorys = document.querySelectorAll('.category-item');

function showCategory() {
    var active = document.querySelector('.category-item--active');
    this.classList.add("category-item--active");
    // thêm class active vao nút đc  click
    active.classList.remove("category-item--active");
    // xóa

}

for (var category of categorys) {
    category.addEventListener('click', showCategory)
}
// ------------------------
var finderBtns = document.querySelectorAll('.navbar-finder__btn');

function showfinderBtn() {
    var active = document.querySelector('.navbar-finder__btn-active');
    this.classList.add("navbar-finder__btn-active");
    active.classList.remove("navbar-finder__btn-active");

}

for (var finderBtn of finderBtns) {
    finderBtn.addEventListener('click', showfinderBtn)
}
// ------------------------
var pagenationBtns = document.querySelectorAll('.pagenation__container-item-number');

function showPagenationBtns() {
    var active = document.querySelector('.pagenation__container-item-active');
    this.classList.add("pagenation__container-item-active");
    active.classList.remove("pagenation__container-item-active");

}
for (var pagenationBtn of pagenationBtns) {
    pagenationBtn.addEventListener('click', showPagenationBtns)
}