const initState: number = 0

interface Action {
    type: string;
    payload: number
}

const countReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case "UP":
            state++
            break;

        case "DOWN":
            state--
            break;
    }

    return state
}

export default countReducer

for(let i = 0;i < 3 ; i++) {
    setTimeout(()=>{
        console.log(i);
    })
}


for(var j = 0;j < 3 ; j++) {
    setTimeout(()=>{
        console.log(j);
    })
}