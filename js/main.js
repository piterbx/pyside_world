let $navbar;
let $navbarBtn;
let $menuTabsBtnsArea;
let $menuTabsContent;
let $class;

const main = () => {
    prepareElements();
    prepareEvents();
    AOS.init({
        delay: 200,
        once: true
    });
};

const prepareElements = () => {
    $navbar = document.querySelector('.navbar');
    $navbarBtn = document.querySelector('.navbar-mobile-btn');
    $menuTabsBtnsArea = document.querySelector('.menu-tabs-btns');
    $menuTabsContent = document.querySelector('.menu-tabs-content');
};

const prepareEvents = () => {
    document.addEventListener('scroll', menu);
    $navbar.addEventListener('click', menuMobile);
    $navbarBtn.addEventListener('click', menuMobile);
    $menuTabsBtnsArea.addEventListener('click', menuTabsCheckClick);
    window.addEventListener('resize', function(){
        if(window.innerWidth>=500){
            $navbar.classList.remove('navbar-open');
        };
    });
};

const menu = () => {
    if(scrollY>=120 && window.innerWidth>=500){
        $navbar.classList.add('navbar-visible');
    } else {
        $navbar.classList.remove('navbar-visible');
    };
};

const menuMobile = () => {
    if(window.innerWidth<500){
        $navbar.classList.toggle('navbar-open');
    };
};

const menuTabsShow = el => {
    const allElements = $menuTabsContent.querySelectorAll('.card');
    $class = el;
    allElements.forEach(menuTabsForEach);
    if(el=='all-lessons'){
        $menuTabsContent.style.width = 100+'%';
    } else {
        $menuTabsContent.style.width = 80+'%';  
    };
};

const menuTabsForEach = el => {
    if(el.classList.contains($class)){
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    };
};

const menuTabsCheckClick = e => {
    if(e.target.closest('button').classList.contains('btn-all')){
        menuTabsShow('all-lessons');
    } else if(e.target.closest('button').classList.contains('btn-basics')){
        menuTabsShow('basics');
    } else if(e.target.closest('button').classList.contains('btn-little-advanced')){
        menuTabsShow('little-advanced');
    } else if(e.target.closest('button').classList.contains('btn-advanced')) {
        menuTabsShow('advanced');
    };
    menuTabsCheckBtn(e);
    console.clear(); //because of error closest() is null
};

const menuTabsCheckBtn = e => {
    const allBtns = $menuTabsBtnsArea.querySelectorAll('.btn');
    allBtns.forEach(el => {
        el.classList.remove('btn-active');
    });
    e.target.closest('button').classList.add('btn-active');
};

document.addEventListener('DOMContentLoaded', main);