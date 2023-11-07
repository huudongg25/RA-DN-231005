//sự kiện từ bàn phím
window.addEventListener('keydown', function (event) {
    console.log(event.code);
})

//sự kiện scroll trên trình duyệt
window.addEventListener("scroll", function () {
    // Lấy chiều cao màn hình
    var scrollPosition = window.scrollY || window.pageYOffset;
    console.log(scrollPosition);
    if(scrollPosition >= 80){
        const header = document.querySelector('header')
        header.style.display = 'block'
    }else {
        console.log(22222);
        const header = document.querySelector('header')
        console.log(header);
        header.style.display = 'none'
    }
});

//sự kiện form = submit => khi form đc submit

