// curried Function
// Clousre
getDisCount = (rate) => (price) => rate * price;
const ans = (getTenpercentOff = getDisCount(0.1));
//price에 가격을 입력하게 되면 동일한 할인률에 대하여 모든 상품들을 적용 가능하게 됨
getTenpercentOff(price);

console.log(ans);
