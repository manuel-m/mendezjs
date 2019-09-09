export default function parallelize(items, fn, size = 10) {
  return new Promise(function(resolve) {
    let jobs = 0;

    for (let i = 0; i < size && items.length > 0; i++) {
      jobs++;
      const item = items.shift();
      fn(item).then(onDone);
    }

    function onDone() {
      --jobs;
      if (items.length > 0) {
        jobs++;
        const url = items.shift();
        fn(url, items.length).then(onDone);
      } else {
        if (jobs === 0) {
          resolve();
        }
      }
    }
  });
}
