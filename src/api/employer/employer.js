import axios from "axios"
import { setting } from "../../setting/setting"

const API_URL =`${setting.apiURL}/employers`


// create employer
export const createEmployer= (employer) => {
return  axios.post(`${API_URL}`,employer)
    
}
export const getEmployerById= (employerId) => {
return axios.get(`${API_URL}/${employerId}`)
        
}
export const getAllEmployer= () => {
return axios.get(`${API_URL}/all`)
        
}
export const upDateEmployer= (employer,employerId) => {
return axios.put(`${API_URL}/update/${employerId}`,employer)
        
}
export const deleteAllEmployer= () => {
return axios.delete(`${API_URL}/deleteAll`)
        
}
export const deleteEmployerById= (employerId) => {
return axios.delete(`${API_URL}/delete/${employerId}`)
        
}
export const createJobByEmployerId= (employerId,job) => {
return axios.post(`${API_URL}/employerJob/${employerId}`,job)
        
}
export const getAllEmployersJobs= (employerId) => {
return axios.get(`${API_URL}${employerId}`)
        
}
