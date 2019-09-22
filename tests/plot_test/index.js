// https://stackoverflow.com/questions/7054272/how-to-draw-smooth-curve-through-n-points-using-javascript-html5-canvas

// http://localhost:9000/index.html

import { plotValues } from '../../plot';

const canvas = document.getElementById('graph_curve');
const ctx = canvas.getContext('2d');

plotValues({
  ctx,
  width: canvas.width,
  height: canvas.height,
  curves: [
    {
      values: [0, -100, -200, 200, 100],
      offset: 0,
      val_min: -200,
      val_max: 200,
      style: {
        strokeStyle: '#0000FF',
        lineWidth: 1.3,
        shadowColor: '#000000',
        shadowBlur: 3,
      },
    },
    {
      values: [0],
      offset: 0,
      val_min: -200,
      val_max: 200,
      style: {
        strokeStyle: '#888',
        lineWidth: 0.5,
        shadowBlur: 0,
      },
    },
    {
      values: new Array(50).fill(0).map(_ => 400 * Math.random() - 200),
      offset: 0,
      val_min: -200,
      val_max: 200,
      style: {
        strokeStyle: '#008800',
        lineWidth: 1,
        shadowColor: '#000000',
        shadowBlur: 0,
      },
    },
  ],
});
