# 에어비앤비 클린 코딩

## 목표
- [에어비앤비](https://www.airbnb.co.kr/?_set_bev_on_new_domain=1626925447_Njg4YjA5OGM2ZDQ2) 메인 페이지와 온라인 체험페에지 프론트단 클론 코딩

# History
## 7월 26일
- 랜딩 페이지 header 작업 완료

## 7월 27일
- 랜딩 페이지 html/css 작업 완료
- 온라인 체험 header 작업 완료
- flexbox 익숙해지는 시간

## 7월 28일
- 온라인 체험 html/css 작업 완료

**고민사항**
- 구조적인 html 작성 방법
- CSS의 재사용성을 높이기 위한 방법

## 7월 29일
- 랜딩 페이지 header 부분 수정
- header 프로필 메뉴 클릭 시 드롭 다운 추가
- header 지구본 모양 클릭 시 언어/통화 모달창 추가

## 7월 30일
- 랜딩 페이지 스크롤 시 header 부분 고정 (`position: fixed;` 사용)
- 온라인 체험 페이지 스크롤 시 filter 부분 고정 (`position: sticky` 사용)

## 8월 2일
- login modal 수정 (`event.stopPropagation` 사용)
- 인원 count modal 추가
- 성인/어린이/유아 인원 추가 및 감소 시 총인원 count(`for`문으로 `previousElementSibling`를 사용하여 `person-num` 영역 수정)

**고민사항**
- 인원수 변경을 감지하여 총 인원 count를 변경할 수 있는지 알아보기
    - MutationObserver 적용 여부 확인해보기

**수정사항**
- Search bar 클릭 이벤트 수정(팝업)
- ~~유아 인원만 별도로 count 하도록 수정~~
- ~~총 인원 0명 시 마이너스 버튼 button disabled 해주기~~

## 8월 3일
- 인원 0명 시 button disabled 수정 완료
- 유아 인원만 별도로 count
- 인원 카운트 로직 추가
    - 어린이 1명 or 유아 1명 시 성인 자동 +1
    - 어린이 1명 이상 or 유아 1명 이상인 경우 성인 최소 인원 1명 유지(0명으로 내려갈 수 없음)
    - 어린이 0명 and 유아 0명일 때만 성인 0명으로 내려갈 수 있음 

**고민사항**
- 깔끔한 코드 정리
- 인원 부분을 변수로 넣어줘서 변경해 줄 수 있는지 알아보기

## 8월 4일
- 온라인 체험 > [베스트셀러 체험] 슬라이드 완성
- 온라인 체험 > [이번 주 신규 등록 체험] 슬라이드 완성

**수정사항**
- [베스트셀러 체험] 임시로 설정한 고정 길이 변경하기
- [이번 주 신규 등록 체험] 슬라이드 끝 여백 조절하기

## 8월 5일
- 전반적인 html,css 수정 중