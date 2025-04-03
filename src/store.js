
"use client";
import { createStore } from 'redux';
import combinedPolayadiReducer from './app/reducers';

const PandikarimbaraStore = createStore(combinedPolayadiReducer);

export default PandikarimbaraStore;
