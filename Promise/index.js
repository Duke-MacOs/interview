const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 500);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 1500);
});

const pReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('reject from pReject'));
  }, 1500);
});

// 实现 Promise.all
const czPromiseAll = (values) => {
  return new Promise((resolve, rejected) => {
    if (!Array.isArray(values)) rejected(new Error('参数并非数组'));

    const result = [];
    let count = 0;
    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i])
        .then((res) => {
          result[i] = res;
          count++;
          if (count === values.length) resolve(result);
        })
        .catch((e) => {
          rejected(e);
        });
    }
  });
};

// 实现 Promise.any
const czPromiseAny = (values) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(values)) rejected(new Error('参数并非数组'));

    const rejectResult = [];
    let count = 0;
    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i])
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          rejectResult[i] = e;
          count++;
          if (count === values.length) rejected(rejectResult);
        });
    }
  });
};

// 实现 Promise.allSettled

const czPromiseAllSettled = (values) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(values)) rejected(new Error('参数并非数组'));

    const result = [];
    let count = 0;
    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i])
        .then((res) => {
          result[i] = res;
        })
        .catch((e) => {
          result[i] = e;
        })
        .finally(() => {
          count++;
          if (count === values.length) resolve(result);
        });
    }
  });
};

// 实现 Promise.race
const czPromiseRace = (values) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(values)) rejected(new Error('参数并非数组'));

    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i])
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};
