(function () {
  'use strict';

  function plotValues({ ctx, width, height, curves }) {
    for (let curve of curves) {
      const { values, offset, val_min, val_max, style } = curve;

      const val_len = values.length;
      if (val_len === 0) continue;

      const w_delta = width / (val_len - 1);
      const h_ratio = height / (val_max - val_min);

      const y0 = height - (values[offset] - val_min) * h_ratio;

      ctx.beginPath();
      ctx.moveTo(0, y0);

      if (val_len === 1) {
        ctx.lineTo(width, y0);
      } else {
        for (let i = 1; i < val_len; i++) {
          const x = i * w_delta;
          const yi = height - (values[i + offset] - val_min) * h_ratio;
          ctx.lineTo(x, yi);
        }
      }

      Object.assign(ctx, style);

      ctx.stroke();
      ctx.closePath();
    }
  }

  // https://stackoverflow.com/questions/7054272/how-to-draw-smooth-curve-through-n-points-using-javascript-html5-canvas

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

}());
