

export const articleReducer = (initialState, action) => {

    
    
    switch(action.type){
        case '[Article] Add Article':
            
            return [...initialState, action.payload]

        case '[Article] Remove Article':
            return initialState.filter( art => art.id!=  action.payload)

        case '[Article] Toggle Article':
            return initialState.map((art) =>{
                if(art.id === action.payload){
                    return {
                        ...art, existe: !art.existe
                    }
                }

                return art;
            })

        default:
            return initialState;
    }

}