(function () {
  'use strict';

  function plotValues({ ctx, curves }) {
    for (let curve of curves) {
      const {
        values,
        offset,
        val_len,
        val_min,
        val_max,
        width,
        height,
        style,
      } = curve;
      const w_delta = width / (val_len - 1);
      const h_ratio = height / (val_max - val_min);

      const y0 = height - (values[offset] - val_min) * h_ratio;
      ctx.moveTo(0, y0);
      // console.log(0, y0);

      for (let i = 1; i < val_len; i++) {
        const x = i * w_delta;
        const yi = height - (values[i + offset] - val_min) * h_ratio;
        ctx.lineTo(x, yi);
        // console.log(x, yi);
      }

      Object.assign(ctx, style);

      ctx.stroke();
      ctx.closePath();
    }
  }

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

}());
