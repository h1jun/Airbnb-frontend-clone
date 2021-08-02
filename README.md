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
- 유아 인원만 별도로 count 하도록 수정
- 총 인원 0명 시 마이너스 버튼 button disabled 해주기