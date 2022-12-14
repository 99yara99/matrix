import { useSelector, useDispatch } from 'react-redux';
import './table.css';
import { addRow, deleteRow, increment } from '../redux/reducer';

function Table({ columns }) {
  const table = useSelector((state) => state.matrix);
  const dispatch = useDispatch();

  const createTable = (matrice) => {
    return (
      <>
        <div>
          {matrice.map((rowsArr, index) => (
            <div className="tableSumBtn">
              <div className="rowsTable">
                {rowsArr.map((num, indexof) => (
                  <>
                    <div
                      className="rowsNum"
                      onMouseOver={(event) => {
                        event.target.style.background = 'red';
                      }}
                      onMouseOut={(event) => {
                        event.target.style.background = '';
                      }}
                      key={num.id}
                    >
                      <button
                        onClick={() => {
                          dispatch(
                            increment({
                              rows: index,
                              columns: indexof,
                              amount: num.amount,
                            })
                          );
                        }}
                      >
                        {num.amount}
                      </button>
                    </div>
                  </>
                ))}
                <div className="sum">
                  {rowsArr.reduce((next, object) => {
                    return next + (object.amount || object);
                  }, 0)}
                </div>
              </div>
              <div className="buttonClose">
                <button
                  onClick={() => {
                    dispatch(deleteRow(index));
                  }}
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="oso">
          <div className="avgMain">
            {culcAvg(matrice).map((elem) => (
              <div className="avg">
                <button className="avgBtn">{elem}</button>
              </div>
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
