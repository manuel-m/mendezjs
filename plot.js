export function clear({ ctx, width, height }) {
  ctx.clearRect(0, 0, width, height);
}

export function plotValues({ ctx, width, height, curves }) {
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
