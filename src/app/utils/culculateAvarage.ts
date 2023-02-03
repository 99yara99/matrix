import { MatrixCell } from '../../types';

const culcAvg = (matrice: MatrixCell[][]) => {
  let avg: number[] = [];
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
      avg[j] = Math.round(
        (avg[j] || 0) + matrice[i][j].amount / matrice.length
      );
    }
  }
  return avg;
};

export default culcAvg;
