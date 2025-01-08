import { url } from "./configuration"


export const register = async() =>{
    const response = await fetch(`${url}/register`,{
        method:{
            
        }
    })
}