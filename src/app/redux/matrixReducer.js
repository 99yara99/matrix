import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const getRandomInt = () => {
  let min = Math.ceil(100);
  let max = Math.floor(1000);
  return Math.floor(Math.random() * (max - min) + min);
};

const matrixSlice = createSlice({
  name: 'matrix',
  initialState: [],
  reducers: {
    setState: (state, action) => {
      let matrix = [];
      for (let i = 0; i < action.payload.rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < action.payload.columns; j++) {
          matrix[i][j] = { id: nanoid(), amount: getRandomInt() };
        }
      }
      let columns = action.payload.columns;
      let rows = action.payload.rows;
      let cells = action.payload.cells;
      return { table: matrix, columns, rows, cells };
    },
    addRow: (state, action) => {
      let arrayinsert = [];
      for (let j = 0; j < action.payload; j++) {
        arrayinsert.push({ id: nanoid(), amount: getRandomInt() });
      }
      state.table.push(arrayinsert);
    },
    deleteRow: (state, action) => {
      state.table.splice(action.payload, 1);
    },
    increment: (state, action) => {
      state.table[action.payload.rows][action.payload.columns] = {
        id: nanoid(),
        amount: action.payload.amount + 1,
      };
    },
  },
});

export const { setState, addRow, deleteRow, increment } = matrixSlice.actions;
export default matrixSlice.reducer;

// [
//   [{id:0, amount:564}, {id:0, amount:987}, {id:0, amount:321}, {id:0, amount:789}],
//   [{id:0, amount:564}, {id:0, amount:987}, {id:0, amount:321}, {id:0, amount:789}],
//   [{id:0, amount:564}, {id:0, amount:987}, {id:0, amount:321}, {id:0, amount:789}],
//   [{id:0, amount:564}, {id:0, amount:987}, {id:0, amount:321}, {id:0, amount:789}],
// ]
