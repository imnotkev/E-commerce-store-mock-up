/* 
MENU HOVER FUNC 
*/

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

/* 
ITEM HOVER FUNC 
*/

function onHover1()
{
    $("#product1").attr('src', './assets/black-hoodie-1-back.jpg');
}

function offHover1()
{
    $("#product1").attr('src', './assets/black-hoodie-1-front.jpg');
}

function onHover2()
{
    $("#product2").attr('src', './assets/white-hoodie-1-back.jpg');
}

function offHover2()
{
    $("#product2").attr('src', './assets/white-hoodie-1-front.jpg');
}

function onHover3()
{
    $("#product3").attr('src', './assets/black-hoodie-2-back.jpg');
}

function offHover3()
{
    $("#product3").attr('src', './assets/black-hoodie-2-front.jpg');
}

function onHover4()
{
    $("#product4").attr('src', './assets/white-hoodie-2-back.jpg');
}

function offHover4()
{
    $("#product4").attr('src', './assets/white-hoodie-2-front.jpg');
}