import * as types from './constants';



export const login=(userinfo) =>{

    return {
        type:`${types.LOGIN}`,
        payload: userinfo
    }
}


export const logout=()=>{
    return{
        type:`${types.LOGOUT}`
    }
}



export const changePage=(page)=>{
    return{
        type:`${types.CHANGE_PAGE}`,
        payload:page
    }
}



export const refreshCollection=(data)=>{
    return {
        type:`${types.REFRESH_COLLECTION}`,
        payload:data
    }
}

export const deleteCollection=()=>{
    return {
        type:`${types.DELETE_COLLECTION}`,
    }
}

export const setLoading=()=>{
    return {
        type:`${types.SET_LOADING}`,
    }
}

export const removeLoading=()=>{
    return {
        type:`${types.UNSET_LOADING}`,
    }
}

export const activeSidebar = (data) => {
    return{
        type: `${types.ACTIVE_SIDEBAR}`,  
        payload: data 
    }
}