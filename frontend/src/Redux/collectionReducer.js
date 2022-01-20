import * as types from './constants';

const initialState = {
    isLoading: false,
    collection:[],
    currentSelected:[]
    
}


 export const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_INFO: {
            let temp = [...state.collection];
            temp.unshift(action.payload);

            return {
                collection: [...temp]

            }
        }

        case types.DELETE_COLLECTION: {
            return {
                collection: []
            }
        }


        case types.ADD_COLLECTION: {
            let newArray;

            let temp = [...state.collection];
            if (temp.length > 0) {
                newArray = temp.concat(action.payload)
            } else newArray = [...temp];

            return {
                collection: [...newArray]
            }
        }

     case types.REFRESH_COLLECTION:{
            return {
                ...state,
                isLoading:false,
                collection: [...action.payload]
            }
     }

     case types.SET_LOADING: {
         return{
             ...state,
             isLoading:true
         }
     }
     case types.UNSET_LOADING:return{
         ...state,
         isLoading:false
     }


      default: return state


    }

}