import { AUTH, TRACKER } from "./actionTypes"


const state={
    trackerArray:[],
    auth:false
}

export const reducer =(store=state,{type,payload})=>{
    switch (type) {
        case AUTH : {
            return { ...store,auth:payload}
        }
        case TRACKER : {
            return { ...store,trackerArray:payload}
        }   
           
        default: { return store}
            
    }
}