
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/friendsProfileSlices'
import createdGroupReducer from './slices/created-group-slice';
import jobsReducer from './slices/job-description-slice'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    createGroup:createdGroupReducer,
    jobs:jobsReducer,
    
    // other reducers...
  },
});

export default store;