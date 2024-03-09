import axios from "axios"
import { setting } from "../../setting/setting"

const API_URL =`${setting.apiURL}/jobseekers`



export const createJobSeeker= (jobseeker) => {
return axios.post(`${API_URL}/createJobSeeker`,jobseeker)
    
}
export const getJobSeekerById= (jobseekerId) => {
return axios.get(`${API_URL}/${jobseekerId}`)
        
}
export const getAllJobSeekers= () => {
return axios.get(`${API_URL}/all`)
        
}
export const upDateJobSeeker= (jobseeker,jobseekerId) => {
return axios.put(`${API_URL}/update/${jobseekerId}`,jobseeker)
        
}
export const deleteAllJobSeekers= () => {
return axios.delete(`${API_URL}/deleteAll`)
        
}
export const deleteJobSeekerById= (jobseekerId) => {
return axios.delete(`${API_URL}/${jobseekerId}`)
        
}
export const applyJobByJobseekerId= (jobseekerId,jobId) => {
return axios.post(`${API_URL}/apply/${jobseekerId}`,jobId)
        
}
export const getAllJobsByJobSeekerId= (jobseekerId) => {
return axios.get(`${API_URL}/getAllJobs/${jobseekerId}`)
        
}
