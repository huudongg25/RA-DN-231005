const numbers = [1, 2, 3, 4, 5, 6, 7]

//forEach() lặp qua từng phần tử và k trả về gì hết , truyền vào 1 function (element,index)
//forEach function k có return
numbers.forEach(function (element, index) {
    console.log(index + ":" + element); 
})

//map() lặp qua từng phần tử nhưng sẽ trả về 1 mảng mới k làm ảnh hưởng tới mảng cũ
//cú pháp giống y forEach() nhưng có return

const num2 = numbers.map(function(element,index){
    if(element % 2== 0) {
        return element * 2
    }else {
        return element
    }
})
console.log("map array",num2);

//filter() lặp qua từng phần tử và trả về mảng mới giống map nhưng có điều kiện k làm ảnh hưởng mảng cũ
// cú pháp giống y map()

const evenArray = numbers.filter(function(element,index){
    return element % 2 == 0
})

console.log("mảng chẵn" , evenArray);

//every() nó sẽ lặp qua và trả về true/false theo điều kiện
//cú pháp giống mấy th trên

const isCheckEveryNumber = numbers.every(function(element,index){
    return element > 1
})

console.log(isCheckEveryNumber);
//some() nó sẽ giống every() nhưng ngược lại là chỉ cần 1 element thoả mãn điều kiện

const isCheckSomeNumber = numbers.some(function(element,index){
    return element > 1
})

console.log(isCheckSomeNumber);

//find() sẽ lặp qua kiểm tra điều kiện và trả element đúng với điều kiện
//cú pháp giống vs filter()

const findElment = numbers.find(function(element,index){
    return element % 2 == 0
})

console.log(findElment);