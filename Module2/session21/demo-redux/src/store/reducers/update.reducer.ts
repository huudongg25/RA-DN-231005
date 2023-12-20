const initState: boolean = false

interface Action {
    type: string;
    payload?: boolean
}

const updateReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case "TOGGLE":
            state = !state
            break;

    }

    return state
}

export default updateReducer