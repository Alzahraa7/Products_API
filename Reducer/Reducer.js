export const reducer = (state={}, action) =>{
    switch(action.type){
        case 'PRODUCT_LIST':{
            return {...state,products:action.payload};
        }
        case 'PRODUCT_DETAILS':{
            return {...state,proDetails:action.payload};
        }
        case 'CLEAR':{
            return {...state,proDetails:{}}
        }
        default:{
            return state;
        }
    }
}