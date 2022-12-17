// import { createSlice } from '@reduxjs/toolkit';

// const findSlice = createSlice({
//   name: 'find',
//   initialState: null,
//   reducers: {
//     findCloseNum: (state, action) => {
//         let arr = [];
//         let goal = action.payload.goal;
//         for (let i = 0; i < 3; i++) {
//             const num = [].reduce((prev, curr) => (Math.abs(curr - goal) < Math.abs(prev - goal) && curr !== goal) ? curr : prev);
//             arr.push(num);
//             counts.splice(counts.indexOf(num), 1)
//         }
//     },
//   },
// });

// export const {} = findSlice.actions;
// export default findSlice.reducer;

// // [
// //   [{id:0, amount:564}, {id:0, amount:987}, {id:0, amount:321}, {id:0, amount:789}],
// //   [{id:0, amount:564}, {id:0, amount:987}, {id:0, amount:321}, {id:0, amount:789}],
// //   [{id:0, amount:564}, {id:0, amount:987}, {id:0, amount:321}, {id:0, amount:789}],
// //   [{id:0, amount:564}, {id:0, amount:987}, {id:0, amount:321}, {id:0, amount:789}],
// ]
