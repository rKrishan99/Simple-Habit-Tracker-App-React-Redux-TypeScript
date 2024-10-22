// This code is setting up the Redux store for your application. 
//The store is like a big box that holds the state (data) of your app and allows you to manage that state easily.

import { configureStore } from '@reduxjs/toolkit'
import habitReducer from '../store/habit-slice' //This slice contains logic for managing the habit state (like adding, updating, or deleting habits).

//This part creates the store and assigns the habitReducer to manage the habit slice of your state.
//The state will have a habit key.
//The value for habit will be managed by the habitReducer (logic from your habit-slice).
const store = configureStore({
  reducer: {
    habit: habitReducer 
  }
})

// store.getState() is a function that returns the current state of the Redux store.
// ReturnType is a TypeScript utility type that extracts the return type of a given function
//will generate the type that matches the shape of your entire Redux state.
//This allows TypeScript to know what the state looks like when you access it in your components or selectors.
export type RootState = ReturnType<typeof store.getState>; 
                                                                      

//store.dispatch is a function used to send actions to the Redux store to update the state.
//typeof store.dispatch will generate the correct type for the dispatch function used in your store.                                                         
export type AppDispatch = typeof store.dispatch; //This is useful when you want to type your dispatch actions correctly inside your components or hooks.

export default store;