import User from "./user.entity";

const createTable = () => {
    User.sync().then(()=>{
        console.log('User created');
    })
}

export default createTable