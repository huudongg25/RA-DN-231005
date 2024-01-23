import Cart from "./cart.model";
import Information from "./infor.model";
import Todo from "./todo.model";
import User from "./user.model";

const createTable = () => {
    // User.sync().then(() => {
    //     console.log('User created');
    // })
    // Information.sync().then(()=>{
    //     console.log('Information created');
    // })
    // Cart.sync().then(()=>{
    //     console.log('Information created');
    // })
    Todo.sync().then(()=>{
        console.log('Todo created');
    })
}

export default createTable