fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log('lỗi');
    })


//  async function getData(){}
const getData = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    let result = await data.json()
    console.log(result);
    return result
}
getData()