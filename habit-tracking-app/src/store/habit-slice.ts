import { createSlice } from '@reduxjs/toolkit'

// This defines a Habit object, which will store information about an individual habit (like its name, frequency, and when it was completed).
export interface Habit {
    id: string;            // A unique identifier for each habit (e.g., "1", "abc123").
    name: string;          // The name of the habit (e.g., "Exercise").
    frequency: "daily" | "weekly";  // How often you want to do the habit ("daily" or "weekly").
    completedDates: string[];  // A list of dates when the habit was completed (e.g., ["2024-10-20"]).
    createAt: string;      // The date when the habit was created (e.g., "2024-10-01").
}

//This defines the shape of the state in Redux. 
//Here, HabitState means the state will contain a list of habits (using the Habit[] array).
interface HabitState {
    habit: Habit[];
}

// This is the starting state of your Redux store.
// When your app starts, the list of habits is empty (habit: []).
// As you add, remove, or modify habits, the state will change.
const initialState = {
    habit: [],
}


export const habitSlice = createSlice({
  name: 'habit', // Name of the slice (for Redux purposes).
  initialState, // The initial state of this slice.
  reducers: {  // Reducers to define how the state can be changed (you’ll add logic here later).
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // Logic for adding, removing, or updating habits will go here.


      
  }
});

// Action creators are generated for each case reducer function
export const {  } = habitSlice.actions

export default habitSlice.reducer


// State: Stores the current list of habits.
// Reducers: Functions that define how the state should change when certain actions happen (e.g., adding a new habit).

// Habit Interface: Describes what a habit looks like (with id, name, frequency, etc.).
// HabitState Interface: Describes the overall state (a list of habits).
// initialState: Sets up an empty list of habits at the start.
// createSlice: Manages state and actions to add, remove, or update habits.