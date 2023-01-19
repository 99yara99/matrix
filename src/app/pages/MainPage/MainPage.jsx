import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './MainPage.css';
import { Link } from 'react-router-dom';
import { setState } from '../../redux/matrixReducer';
import InputComponent from './InputComponent/input';

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
            <InputComponent
              value={columns}
              onChange={(e) => setColumns(e.target.value)}
              textInput={'Enter the number of colums'}
            />
          </div>
          <div className="inputDiv">
            <InputComponent
              value={rows}
              onChange={(e) => setRows(e.target.value)}
              textInput={'Enter the number of rows'}
            />
          </div>
          <div className="inputDiv">
            <InputComponent
              value={cells}
              onChange={(e) => setCells(e.target.value)}
              textInput={'Enter the number of cells'}
            />
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
