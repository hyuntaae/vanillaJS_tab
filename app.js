/*

****** 기능 정의 ******

0번 버튼 클릭 시
- 0번 버튼에 active 클래스 추가
- 다른 버튼에 붙은 active 클래스 제거
- 0번 컨텐츠 박스에 show 클래스 추가
- 다른 컨텐츠 박스에 붙은 show 클래스 제거

- 다른 버튼에 붙은 클래스 제거 할때는 모든 클래스 제거하고 다시 부여하는 방식으로 제작
  즉, 클래스 전체 초기화 하고 버튼과 컨텐츠 박스에 클래스 재부여

- 1번 2번 버튼도 같은 코드 반복

*/

const tabBtn = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');

/*

****** 첫번째 기능 구현 ******

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

*/


/* 

****** 코드 간략하게 다시 짜기 ******

- 버튼의 번호만 바뀐채 같은 코드가 반복되고 있으므로 반복문 사용해서 더 간단하게 만들 수 있을듯 하다.
- 반복 될때마다 번호 0이 1,2로 바뀌게 만들면 됨
- 반복문 안에 클릭이벤트에 버튼 번호를 직접 부여하지 말고 반복문이 진행될때마다 차례대로 0,1,2로 바뀌도록
  변수를 넣어주면 된다.
- i를 넣어주면 될듯
  첫번째 반복문 실행 -> i = 0 -> 첫번째 버튼이 동작하도록
  두번째 반복문 실행 -> i = 1 -> 두번째 버튼이 동작하도록
  세번째 반복문 실행 -> i = 2 -> 세번째 버튼이 동작하도록



for (let i = 0; i < 3; i++) {
  tabBtn[i].addEventListener('click', function(){
    tabBtn[0].classList.remove('active')
    tabBtn[1].classList.remove('active')
    tabBtn[2].classList.remove('active')
    tabContent[0].classList.remove('show')
    tabContent[1].classList.remove('show')
    tabContent[2].classList.remove('show')
    tabBtn[i].classList.add('active')
    tabContent[i].classList.add('show')
  })
}


- 클래스 제거해주는 초기화 코드도 번호만 바뀐채 반복하고 있으므로 이것도 반복문으로 만들어주면 될듯
- 첫번째 반복문 실행 -> 0번 버튼과 컨텐츠박스 클래스 제거
  두번째 반복문 실행 -> 1번 버튼과 컨텐츠박스 클래스 제거
  세번째 반복문 실행 -> 2번 버튼과 컨텐츠박스 클래스 제거


for (let i = 0; i < 3; i++) {
  tabBtn[i].addEventListener('click', function(){
    for (let x = 0; x < 3; x++) {
      tabBtn[x].classList.remove('active')
      tabContent[x].classList.remove('show')
    }
    tabBtn[i].classList.add('active')
    tabContent[i].classList.add('show')
  })
}

*/

/*

****** 확장성 있는 코드로 변경 ******

- 나중에 탭 갯수가 늘어나도 코드 수정 없이 잘 동작하는 코드를 만들 수 없을까
- 반복하는 횟수(지금은 3이라고 하드코딩 됨)에 숫자 3 대신 현재 탭의 갯수를 알아내는 코드를 작성하면 될듯하다.
- 클래스를 모두 찾아주는 셀렉터 getElementsByClassName 뒤에 .length를 붙이면 갯수를 세어줍니다.

*/

let tabCount = document.getElementsByClassName('tab-btn').length;

for (let i = 0; i < tabCount; i++) {
  tabBtn[i].addEventListener('click', function(){
    for (let x = 0; x < tabCount; x++) {
      tabBtn[x].classList.remove('active')
      tabContent[x].classList.remove('show')
    }
    tabBtn[i].classList.add('active')
    tabContent[i].classList.add('show')
  })
}

