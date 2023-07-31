import { AUTH, TRACKER } from "./actionTypes"

export const authenticate=(payload)=>{
 return { type:AUTH, payload }
}
export const addTrackerArray=(payload)=>{
 return { type:TRACKER,payload }
}