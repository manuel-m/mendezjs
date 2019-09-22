import { plotValues } from '../../plot';

// const values = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0];
const values = [0, -100, -200, 200, 100];

console.log('mendez plot');

const canvas = document.getElementById('graph_curve');
const ctx = canvas.getContext('2d');

plotValues({
  ctx,
  curves: [
    {
      values,
      offset: 0,
      val_len: values.length,
      val_min: -200,
      val_max: 200,
      width: canvas.width,
      height: canvas.height,
      style: {
        strokeStyle: '#0000FF',
        lineWidth: 1.3,
        shadowColor: '#000000',
        shadowBlur: 3,
      },
    },
  ],
});
