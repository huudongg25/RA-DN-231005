let a =20

const promise: Promise<any> = new Promise((resolve, reject) => {    
    if(a >= 30) {
        resolve(a)
    }else {
        reject("Sai")
    }
})


//1 promise có 3 trạng thái
//promise chain là kiểu có nhiều hàm then phía dưới
promise
    .then((data) => {
        console.log(data);
        return data + 10
    })
    .then((data1)=>{
        console.log(data1);
    })
    .catch((err) => {
        return 1
    })
    .finally(()=>{
        console.log('xong rồi');
    })