import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import './table.css';
import { addRow, deleteRow, increment } from '../../redux/matrixReducer';
import { useState } from 'react';
import culcAvg from '../../utils/culculateAvarage';
import { MatrixCell } from '../../../types';

function Table() {
  const { table, columns, cells } = useAppSelector((state) => state.matrix);
  const dispatch = useAppDispatch();
  const [closeNumbers, setCloseNumbers] = useState<number[]>();
  const [indexOfArray, setIndexOfArray] = useState<number>();

  const dispatchIncrement = (
    index: number,
    indexOf: number,
    obj: MatrixCell
  ) => {
    return dispatch(
      increment({
        rows: index,
        columns: indexOf,
        amount: obj.amount,
      })
    );
  };

  const findClosestNum = (goal: number) => {
    let result: number[] = [];
    let stateArr: number[] = [];

    table.map((array) => {
      return array.map((obj) => {
        return stateArr.push(obj.amount);
      });
    });

    stateArr.splice(stateArr.indexOf(goal), 1);

    if (cells) {
      for (let i = 0; i < cells; i++) {
        const num = stateArr.reduce((prev, curr) =>
          Math.abs(curr - goal) < Math.abs(prev - goal) && curr !== goal
            ? curr
            : prev
        );

        result.push(num);

        stateArr.splice(stateArr.indexOf(num), 1);
      }
    }
    setCloseNumbers(result);
  };

  const renderColNum = () => {
    let arr: number[] = [];
    if (columns) {
      for (let i = 1; i <= columns; i++) {
        arr.push(i);
      }
      return arr;
    }
  };

  const createTable = (matrice: MatrixCell[][]) => {
    const renderHeader = () => {
      return (
        <>
          <div className="headerNum">
            <span>№</span>
          </div>
          <div className="columnsNumberAll">
            {renderColNum()?.map((elem) => {
              return (
                <div className="columnsNumber">
                  <span>{elem}</span>
                </div>
              );
            })}
          </div>
          <div className="headerSum">
            <span>Sum</span>
          </div>
        </>
      );
    };

    const renderAvg = () => {
      return (
        <>
          <div className="headerAvg">
            <span>Avg</span>
          </div>
          <div className="avgMain">
            {culcAvg(matrice).map((elem) => (
              <div className="avg">
                <span className="avgText">{elem}</span>
              </div>
            ))}
          </div>
          <div className="avgSum">
            <span className="avgText">
              {culcAvg(matrice).reduce((next, object) => {
                return next + object;
                // return next + (object.amount || object);
              }, 0)}
            </span>
          </div>
        </>
      );
    };

    const renderCell = (rowsArr: MatrixCell[], index: number) => {
      return rowsArr.map((obj: MatrixCell, indexOf: number) => {
        return (
          <div
            className="rowsNum"
            style={{
              backgroundColor: closeNumbers?.includes(obj.amount)
                ? 'yellow'
                : 'aquamarine',
            }}
            onMouseEnter={(event) => {
              // event.target.style.background = '#e63946';
              // event.target.style.color = 'white';
              findClosestNum(obj.amount);
            }}
            onMouseLeave={(event) => {
              // event.target.style.background = 'aquamarine';
              setCloseNumbers(undefined);
            }}
            onClick={() => {
              dispatchIncrement(index, indexOf, obj);
            }}
            key={obj.id}
          >
            <span className="spanNum">
              {index === indexOfArray ? culcPercent(obj, rowsArr) : obj.amount}
            </span>
            {index === indexOfArray && (
              <div
                className="backgroundRowsNum"
                style={{ height: culcPercent(obj, rowsArr) }}
              ></div>
            )}
          </div>
        );
      });
    };

    const renderSumColumn = (index: number, rowsArr: MatrixCell[]) => {
      return (
        <div
          className="sum"
          onMouseOver={() => {
            setIndexOfArray(index);
          }}
          onMouseOut={() => {
            setIndexOfArray(undefined);
          }}
        >
          <span className="sumText">
            {rowsArr.reduce((next, object) => {
              return next + object.amount;
              // return next + (object.amount || object);
            }, 0)}
          </span>
        </div>
      );
    };

    const culcPercent = (obj: MatrixCell, rowsArr: MatrixCell[]) => {
      let percent = `${Math.round(
        (obj.amount /
          rowsArr.reduce((next, object) => {
            return next + object.amount;
          }, 0)) *
          100
      )}%`;
      return percent;
    };

    return (
      <>
        <div className="header">{renderHeader()}</div>
        <div>
          {matrice.map((rowsArr, index) => (
            <div className="tableSumBtn">
              <div className="rowsIndex">{index + 1}</div>
              <div className="rowsTable">
                {renderCell(rowsArr, index)}
                {renderSumColumn(index, rowsArr)}
              </div>
              <div className="buttonClose">
                <button
                  className="closeBtn"
                  onClick={() => {
                    dispatch(deleteRow(index));
                  }}
                >
                  ✖
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="avgAll">{renderAvg()}</div>
      </>
    );
  };

  return (
    <div className="mainTable">
      <button className="btnAdd" onClick={() => dispatch(addRow(columns))}>
        <span className="btnAddText">Add row</span>
      </button>
      <div className="tableAll">{createTable(table)}</div>
    </div>
  );
}
export default Table;
