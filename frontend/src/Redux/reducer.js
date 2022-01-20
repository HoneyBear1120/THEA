import * as types from './constants';

const initialState={
    isAutheticated:false,
    userInfo:[],
    currentPage:null,
    isLoading:true,
    currentSidebarIs : "All items"
}

const theaReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.LOGIN: 
           let temp= [...state.userInfo];
           temp.length=0;
           temp.push(action.payload)
         
        return{
            ...state,
            isAutheticated:true,
             userInfo:[...temp],
             isLoading:false
        }

        case types.LOGOUT:{
            let temprorary=[]
        
            return{
                ...state,
                isAutheticated:!state.isAutheticated,
                userInfo:[...temprorary]
            }

        }

       case types.CHANGE_PAGE: {
           return {
               ...state,
               currentPage:action.payload
           }
       }
       case types.ACTIVE_SIDEBAR:{
           return{
               ...state,
               currentSidebarIs : action.payload
           }
       }
            
        default:return state    
    }
}


export default theaReducer;