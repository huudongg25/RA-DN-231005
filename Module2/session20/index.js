fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log('lỗi');
    })


//  async function getData(){}
const getData = async () => {
    try {
        let data = await fetch('https://jsonplaceholder.typicodea.com/users')
        let data2 = await fetch('https://jsonplaceholder.typicode.com/post')
        let result = await data.json()
        console.log(result);
        return result
    } catch (error) {
        console.log(2222);
        console.log(error);
    }
}
getData()