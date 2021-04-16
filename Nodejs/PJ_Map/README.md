# 지도 만들어보기

### 목차

1. 개요
1. 카카오맵 API 등록
1. 지도 검색해서 위도 경도 DB 등록
1. 좌표 전체 불러오기

### mysql

mysql -u root -p

### kako api -> 기본 위도 경도 설정

DEFAULT_LONGITUDE = "경도"
DEFAULT_LATITUDE = "위도"

- 사용자의 첫 위치를 불러 올 수 없는 경우 사용

### 초기 설정

1. db를 sync를 시켜야 함
1. Apts.js -> geo (위도 경도 표현)
