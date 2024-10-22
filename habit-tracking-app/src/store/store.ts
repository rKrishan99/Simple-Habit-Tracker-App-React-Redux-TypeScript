// This code is setting up the Redux store for your application. 
//The store is like a big box that holds the state (data) of your app and allows you to manage that state easily.

import { configureStore } from '@reduxjs/toolkit'
import habitReducer from '../store/habit-slice' //This slice contains logic for managing the habit state (like adding, updating, or deleting habits).

//This part creates the store and assigns the habitReducer to manage the habit slice of your state.
//The state will have a habit key.
//The value for habit will be managed by the habitReducer (logic from your habit-slice).
export default configureStore({
  reducer: {
    habit: habitReducer 
  }
})