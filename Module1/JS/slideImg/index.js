const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const imgArr = [
    'https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27.jpg',
    'https://img.meta.com.vn/Data/image/2021/09/22/anh-cho-dep-0.jpg',
    'https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-56-scaled.jpg',
    'https://images.ctfassets.net/hrltx12pl8hq/7vd4eckqr4joKNKwWUv0Mg/844d9d491f4ab942a90259d44bbcfa01/dogs-images.jpg?fit=fill&w=600&h=400',
    'https://image.tienphong.vn/w890/Uploaded/2023/Osgmky/1/b2d/1b2dc3bfb52deccd357e114b1a8cca6a.jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20230614/pngtree-bunch-of-white-puppies-standing-together-by-a-black-background-image_2922467.jpg'
]

const imgSub = $('.img-sub')
const imgMain = $('.img-main img')
let currentIndex = 0

imgArr.forEach((item, index) => {
    imgSub.innerHTML += `<img src=${item} />`
})

function renderImg() {
    const listSubImg = $$('.img-sub img')
    listSubImg.forEach((item) => {
        item.classList.remove('active')
    })
    imgMain.src = imgArr[currentIndex]
    listSubImg[currentIndex].classList.add('active')
    console.log(listSubImg);
}
renderImg()

function handleClickRight() {
    if (currentIndex == imgArr.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    renderImg()
}

function handleClickLeft() {
    if (currentIndex == 0) {
        currentIndex = imgArr.length - 1
    } else {
        currentIndex--
    }
    renderImg()
}

setInterval(() => {
    if (currentIndex == imgArr.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    renderImg()
}, 10000)

const listImgSub = $$('.img-sub img')

listImgSub.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index
        renderImg()
    })
})

window.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        if (currentIndex == imgArr.length - 1) {
            currentIndex = 0
        } else {
            currentIndex++
        }
        renderImg()
    }
})


window.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        if (currentIndex == 0) {
            currentIndex = imgArr.length - 1
        } else {
            currentIndex--
        }
        renderImg()
    }
})

listImgSub.forEach((item, index) => {
    item.addEventListener('mousemove', () => {
        currentIndex = index
        renderImg()
    })
})


