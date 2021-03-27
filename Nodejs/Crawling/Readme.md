# Crawling

# 목차

1. Crawling 개요
1. 배송위치 추적
1. Pupppeteer -> python 셀레니움과 비슷

정적인 데이터 -> 네이버 id, pw -> 로그인 상태에서 게시물 가져오는 경우
chrome브라우저에서 소스를 가져옴

### 순서

1. URL에서 HTML을 가져옴
1. 내가 원하는 부분을 가져옴

- 패키지
  1. request
     url로 호출 후 데이터를 가져옴
  2. cheerio
     jQuery 방식으로 DOM을 가져와서 데이터를 정제

* m1칩이라 12.0버전을 지원하지 않아서 다른 버전을 사용하도록 함

### 요청하기

request.js 에 url 을 입력하여서 받아올 수 있음
