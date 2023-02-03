import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import './MainPage.css';
import { Link } from 'react-router-dom';
import { setState } from '../../redux/matrixReducer';
import InputComponent from './InputComponent/input';

function MainPage() {
  const [columns, setColumns] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [cells, setCells] = useState<number>(0);

  const dispatch = useAppDispatch();

  return (
    <div className="Main">
      <div className="matrixBuilder">
        <h2>Matrix Builder</h2>
        <div className="inputAll">
          <div className="inputDiv">
            <InputComponent
              value={columns}
              onChange={(e) => setColumns(Number(e.target.value))}
              textInput={'Enter the number of colums'}
            />
          </div>
          <div className="inputDiv">
            <InputComponent
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
              textInput={'Enter the number of rows'}
            />
          </div>
          <div className="inputDiv">
            <InputComponent
              value={cells}
              onChange={(e) => setCells(Number(e.target.value))}
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
