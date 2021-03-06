// a reducer takes in two thiings:

//1 the action info about what happend
//2 copy of current state
const posts = (state = [], action) => {
    
    switch(action.type) {
        case 'INCREMENT_LIKES':
            console.log("incremeting likes");
            const i = action.index
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)
            ]
        default:
        return state
    }
}

export default posts;