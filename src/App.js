import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Table from './app/Table/table';
import { setState } from './app/redux/matrixReducer';

function App() {
  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [cells, setCells] = useState('');
  const [showMatrix, setShowMatrix] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="Main">
      <div className="matrixBuilder">
        <h2>Matrix Builder</h2>
        <div className="columns">
          <p>Enter the number of colums</p>
          <input
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
          ></input>
        </div>
        <div className="rows">
          <p>Enter the number of rows</p>
          <input value={rows} onChange={(e) => setRows(e.target.value)}></input>
        </div>
        <div className="cells">
          <p>Enter the number of cells</p>
          <input
            value={cells}
            onChange={(e) => setCells(e.target.value)}
          ></input>
        </div>
        <button
          className="button"
          onClick={() => {
            dispatch(setState({ columns, rows }));
            setShowMatrix(true);
          }}
        >
          Create Matrix
        </button>

        {showMatrix && <Table columns={columns} cells={cells} />}
      </div>
    </div>
  );
}

export default App;
