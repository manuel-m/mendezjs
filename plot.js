export function plotValues({ ctx, curves }) {
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
