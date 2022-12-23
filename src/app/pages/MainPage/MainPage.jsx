import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './MainPage.css';
import { Link } from 'react-router-dom';
import { setState } from '../../redux/matrixReducer';

function MainPage() {
  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [cells, setCells] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="Main">
      <div className="matrixBuilder">
        <h2>Matrix Builder</h2>
        <div className="inputAll">
          <div className="inputDiv">
            <p className="text">Enter the number of colums</p>
            <input
              className="input"
              value={columns}
              onChange={(e) => setColumns(e.target.value)}
            ></input>
          </div>
          <div className="inputDiv">
            <p className="text">Enter the number of rows</p>
            <input
              className="input"
              value={rows}
              onChange={(e) => setRows(e.target.value)}
            ></input>
          </div>
          <div className="inputDiv">
            <p className="text">Enter the number of cells</p>
            <input
              className="input"
              value={cells}
              onChange={(e) => setCells(e.target.value)}
            ></input>
          </div>
        </div>

        <Link to={'/matrix'}>
          <button
            className="button"
            onClick={() => {
              dispatch(setState({ columns, rows, cells }));
            }}
          >
            <p className="btnText">Create Matrix</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
