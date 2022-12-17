import { useSelector, useDispatch } from 'react-redux';
import './table.css';
import { addRow, deleteRow, increment } from '../redux/matrixReducer';
import { useState } from 'react';

function Table({ columns, cells }) {
  const table = useSelector((state) => state.matrix);
  const dispatch = useDispatch();
  const [closeNumbers, setCloseNumbers] = useState(null);
  const [indexOfArray, setIndexOfArray] = useState(null);
  console.log(indexOfArray);
  const findClosestNum = (goal) => {
    let result = [];
    let stateArr = [];

    table.map((array) => {
      return array.map((obj) => {
        return stateArr.push(obj.amount);
      });
    });

    stateArr.splice(stateArr.indexOf(goal), 1);

    for (let i = 0; i < cells; i++) {
      const num = stateArr.reduce((prev, curr) =>
        Math.abs(curr - goal) < Math.abs(prev - goal) && curr !== goal
          ? curr
          : prev
      );

      result.push(num);

      stateArr.splice(stateArr.indexOf(num), 1);
    }
    setCloseNumbers(result);
  };

  const createTable = (matrice) => {
    return (
      <>
        <div>
          {matrice.map((rowsArr, index) => (
            <div className="tableSumBtn">
              <div className="rowsTable">
                {rowsArr.map((obj, indexof) => {
                  let percent = `${Math.round(
                    (obj.amount /
                      rowsArr.reduce((next, object) => {
                        return next + object.amount;
                      }, 0)) *
                      100
                  )}%`;
                  return (
                    <div
                      className="rowsNum"
                      style={{
                        backgroundColor: closeNumbers?.includes(obj.amount)
                          ? 'yellow'
                          : 'transparent',
                      }}
                      onMouseOver={(event) => {
                        event.target.style.background = 'red';
                        findClosestNum(obj.amount);
                      }}
                      onMouseOut={(event) => {
                        event.target.style.background = 'transparent';
                        setCloseNumbers(null);
                      }}
                      onClick={() => {
                        dispatch(
                          increment({
                            rows: index,
                            columns: indexof,
                            amount: obj.amount,
                          })
                        );
                      }}
                      key={obj.id}
                    >
                      <span className="spanNum">
                        {index === indexOfArray ? percent : obj.amount}
                      </span>
                      {index === indexOfArray && (
                        <div
                          className="backgroundRowsNum"
                          style={{ height: percent }}
                        ></div>
                      )}
                    </div>
                  );
                })}
                <div
                  className="sum"
                  onMouseOver={() => {
                    setIndexOfArray(index);
                  }}
                  onMouseOut={() => {
                    setIndexOfArray(null);
                  }}
                >
                  {rowsArr.reduce((next, object) => {
                    return next + object.amount;
                  }, 0)}
                </div>
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
        <div className="oso">
          <div className="avgMain">
            {culcAvg(matrice).map((elem) => (
              <div className="avg">{elem}</div>
            ))}
          </div>
          <div className="avgBtn">
            {culcAvg(matrice).reduce((next, object) => {
              return next + (object.amount || object);
            }, 0)}
          </div>
        </div>
      </>
    );
  };

  const culcAvg = (matrice) => {
    let avg = [];
    for (let i = 0; i < matrice.length; i++) {
      for (let j = 0; j < matrice[i].length; j++) {
        avg[j] = Math.round(
          (avg[j] || 0) + matrice[i][j].amount / matrice.length
        );
      }
    }
    return avg;
  };

  return (
    <div className="mainTable">
      <button onClick={() => dispatch(addRow(columns))}>Add row</button>
      <div>{createTable(table)}</div>
    </div>
  );
}
export default Table;
