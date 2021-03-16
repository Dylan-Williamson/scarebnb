import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../features/userSlice';
// import appReducer from '../features/appSlice';

// export default configureStore({
//   reducer: {
//     user: userReducer,
//     app: appReducer,
//   },
// });