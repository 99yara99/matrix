import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { MatrixCell } from '../../types';

interface MatrixIncrement {
  rows: number;
  columns: number;
  amount: number;
}

interface Table {
  columns?: number;
  rows?: number;
  cells?: number;
}

interface MatrixState extends Table {
  table: MatrixCell[][];
}

const getRandomInt = () => {
  let min = Math.ceil(100);
  let max = Math.floor(1000);
  return Math.floor(Math.random() * (max - min) + min);
};

const initialState: MatrixState = {
  table: [],
};

const matrixSlice = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<Table>) => {
      let matrix: MatrixCell[][] = [];
      if (action.payload.rows) {
        for (let i = 0; i < action.payload.rows; i++) {
          matrix[i] = [];
          if (action.payload.columns) {
            for (let j = 0; j < action.payload.columns; j++) {
              matrix[i][j] = { id: nanoid(), amount: getRandomInt() };
            }
          }
        }
      }

      let columns = action.payload.columns;
      let rows = action.payload.rows;
      let cells = action.payload.cells;
      return { table: matrix, columns, rows, cells };
    },
    addRow: (state, action: PayloadAction<number | undefined>) => {
      let arrayinsert: MatrixCell[] = [];
      if (action.payload) {
        for (let j = 0; j < action.payload; j++) {
          arrayinsert.push({ id: nanoid(), amount: getRandomInt() });
        }
        state.table.push(arrayinsert);
      }
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      state.table.splice(action.payload, 1);
    },
    increment: (state, action: PayloadAction<MatrixIncrement>) => {
      state.table[action.payload.rows][action.payload.columns] = {
        id: nanoid(),
        amount: action.payload.amount + 1,
      };
    },
  },
});

export const { setState, addRow, deleteRow, increment } = matrixSlice.actions;
export default matrixSlice.reducer;
