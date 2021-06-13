const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res({ p1_text: "p1의 텍스트 " });
  }, 1000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej({ p2_text: "p2의 텍스트 " });
  }, 3000);
});

Promise.all([p1, p2])
  .then((result) => {
    console.log("p1=" + result[0].p1_text);
    console.log("p2=" + result[1].p2_text);
  })
  .catch((err) => {
    console.log(err);
  });
