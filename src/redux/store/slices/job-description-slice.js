import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  job: {
    id: '',
    jobName: '',
    companyName: '',
    maxPrice: '',
    minPrice: '',
    description: ''
  },
  jobs: [],
};
export const jobDescriptionSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      
    }
   
  }
});

export const { setJob } = jobDescriptionSlice.actions;
export default jobDescriptionSlice.reducer;
// state.jobList = action.payload;
      // state.jobDetail = action.payload