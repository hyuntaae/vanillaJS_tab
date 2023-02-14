/*
0번 버튼 클릭 시
- 0반 버튼에 active 클래스 추가
- 다른 버튼에 붙은 active 클래스 제거
- 0번 컨텐츠 박스에 show 클래스 추가
- 다른 컨텐츠 박스에 붙은 show 클래스 제거

- 다른 버튼에 붙은 클래스 제거 할때는 모든 클래스 제거하고 다시 부여하는 방식으로 제작
  즉, 클래스 전체 초기화 하고 버튼과 컨텐츠 박스에 클래스 재부여

- 1번 2번 버튼도 같은 코드 반복
*/

const tabBtn = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');

tabBtn[0].addEventListener('click', function(){
  tabBtn[0].classList.remove('active')
  tabBtn[1].classList.remove('active')
  tabBtn[2].classList.remove('active')
  tabContent[0].classList.remove('show')
  tabContent[1].classList.remove('show')
  tabContent[2].classList.remove('show')
  tabBtn[0].classList.add('active')
  tabContent[0].classList.add('show')
})

tabBtn[1].addEventListener('click', function(){
  tabBtn[0].classList.remove('active')
  tabBtn[1].classList.remove('active')
  tabBtn[2].classList.remove('active')
  tabContent[0].classList.remove('show')
  tabContent[1].classList.remove('show')
  tabContent[2].classList.remove('show')
  tabBtn[1].classList.add('active')
  tabContent[1].classList.add('show')
})

tabBtn[2].addEventListener('click', function(){
  tabBtn[0].classList.remove('active')
  tabBtn[1].classList.remove('active')
  tabBtn[2].classList.remove('active')
  tabContent[0].classList.remove('show')
  tabContent[1].classList.remove('show')
  tabContent[2].classList.remove('show')
  tabBtn[2].classList.add('active')
  tabContent[2].classList.add('show')
})
