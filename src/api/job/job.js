import axios from "axios"
import { setting } from "../../setting/setting"

const API_URL =`${setting.apiURL}/jobs`



export const createJob= (job) => {
return axios.post(`${API_URL}/createJob`,job)
    
}
export const getJobById= (jobId) => {
return axios.get(`${API_URL}/${jobId}`)
        
}
export const getAllJob= () => {
return axios.get(`${API_URL}/all`)
        
}
export const upDateJob= (job,jobId) => {
return axios.put(`${API_URL}/update/${jobId}`,job)
        
}
export const deleteAllJob= () => {
return axios.delete(`${API_URL}/deleteAll`)
        
}
export const deleteJobById= (jobId) => {
return axios.delete(`${API_URL}/delete/${jobId}`)
        
}
// export const applyJobByJobseekerId= (jobseekerId,jobId) => {
// return axios.post(`${API_URL}/apply/${jobseekerId}`,jobId)
        
// }
// export const getAllJobsByJobSeekerId= (jobseekerId) => {
// return axios.get(`${API_URL}/getAllJobs/${jobseekerId}`)
        
// }
