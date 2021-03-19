### JavaSciprt

브라우저를 제어하기 위해서 넷스케이프에서 개발한 언어

- 확대
  AJAX 활용, Debug 툴의 발전 V8 활용 -> Node Js의 등자
  자바스크립트 개발자안기 위한 환경을 조성

### 자료형 변수형

var로 선언
동적언어 이므로 자료형을 선언할 필요없음
기본자료형과 객체(Object) 두 가지로 나뉜다.

- Symbol
  es6에서 처음으로 추가, 유일하고 변경 불가

### 동적 언어, 정적 언어

정적언어 : 문자형, 정수형 -> 변환 과정이 필요함
동적언어 : 자동으로 선언되어서 조금 더 편리함

### 배열

배열의 인덱싱 : 0 부터 시작하여서 설정이 된다.

### 함수

- this를 통한 선언
  이렇게 선언하게 되면 공용 변수로 선언이 되어서 외부에서 접근이 가능하지만
  var를 통해서 선언하면 사용할 수 없게 된다.

```javascript
function Car(a, b, c) {
  this.name = a;
  this.color = b;
  var move = c;
}

var a = new Car("현대", "노란색", "전진");
console.log(a.name, a.color, a.move);
현대, 노란색, undefined;
```

### 프로토타입

객체로 생성된 것 들이 프로토타입 기반으로 생성된 것 이라고 생각하면 됨

```javascript
    function Car(a, b, c) {
            this.name = a;
            this.color = b;
        }

        Car.prototype.move = function() {
            console.log(this.name + "차이고" + this.color + "색 입니다.");
        };
        var a = new Car("현대", "노란");
        a.move();
    </script>
```

- 배열에서의 사용

```javascript
var a = [1, 2, 3, 4, 10];
Array.prototype.print = function () {
  for (var i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
};
a.print();
```

### 리터럴 객체

인덱스를 생성하고 싶은 경우 사용가능 {}
객체의 개념이지만 new Object가 생략되어있다고 생각하면 됨
선언과 동시에 생성이 된다고 생각하면 됨

```javascript
console.log(typeof(보고싶은 내용))
```

### 조건문

- if , swtich 문 존재
  많이 한 내용이므로 스킵

### 콜백 함수 및 클로저

함수 안 인자를 함수로 받는 경우가 존재
익명 함수

- 클로저의 사용 용도
  페이지네이션, 함수를 사용하는데 공간이 필요하다고 판단이 되면 사용하면 된다.
  다른 사람이 어떤 경우에 사용했는지에 대해서 조금 더 알아보고 사용하면 된다.

```javascript
function test(num, callback) {
  console.log(num);
  callback();
}
test(1, function () {
  console.log("콜백 함수가 실행됩니다.");
});
```
