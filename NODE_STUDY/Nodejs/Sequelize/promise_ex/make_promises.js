const wait1seconds = new Promise((reslove, reject) => {
  console.log("promise 시작");
  setTimeout(() => {
    reject(console.log("1초 뒤에 찍습니다!!!"));
  }, 1000);
  //   reslove("promise 123");
});

wait1seconds
  .then((result) => {
    console.log("이행 완료");
  })
  .catch((err) => {
    console.log(err);
  });
