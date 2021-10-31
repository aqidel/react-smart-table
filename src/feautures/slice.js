import { createSlice } from '@reduxjs/toolkit';
import { userData, keys } from '../userData';
import _ from 'lodash';

export const slice = createSlice({
  name: 'slice',
  initialState: {
    userData: userData,
    allPages: userData,
    pageCount: 5,
    onPage: 10,
    currentPage: 0,
    backSort: -1,
  },
  reducers: {
    pagination: (state, action) => {
      let temp = _.flattenDeep(state.allPages);
      state.currentPage = action.payload.selected;
      state.pageCount = Math.ceil(temp.length / state.onPage);
      state.allPages = _.chunk(temp, state.onPage);
    },
    setOnPage: (state, action) => {
      state.onPage = action.payload;
    },
    remove: (state, action) => {
      let temp = _.flattenDeep(state.allPages);
      temp.splice(state.currentPage * state.onPage + action.payload, 1);
      state.pageCount = Math.ceil(temp.length / state.onPage);
      state.allPages = _.chunk(temp, state.onPage);

      temp = _.flattenDeep(state.userData);
      temp.splice(state.currentPage * state.onPage + action.payload, 1);
      state.userData = _.chunk(temp, state.onPage);
    },
    sort: (state, action) => {
      let temp = _.flattenDeep(state.allPages);
      let key = keys[action.payload];
      state.backSort = state.backSort * -1;

      temp.sort((x, y) => {
        if (x[key] > y[key]) {
          return 1 * state.backSort;
        }
        if (x[key] < y[key]) {
          return -1 * state.backSort;
        }
        return 0;
      });

      state.allPages = _.chunk(temp, state.onPage);
    },
    filter: (state, action) => {
      state.allPages = state.userData;
      
      let temp = _.flattenDeep(state.allPages);

      let filtered = temp.filter(item => {
        let values = Object.values(item).slice(1);
        return values.some(item => item.toLowerCase().includes(action.payload.toLowerCase()));
      });

      state.allPages = _.chunk(filtered, state.onPage);
    },
  },
})

export const { pagination, setOnPage, remove, sort, filter } = slice.actions;

export default slice.reducer;