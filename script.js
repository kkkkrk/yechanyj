// HTML 요소 가져오기
const studyInput = document.getElementById('studyInput');
const addButton = document.getElementById('addButton');
const studyList = document.getElementById('studyList');

// "추가하기" 버튼 클릭 이벤트
addButton.addEventListener('click', () => {
  const userInput = studyInput.value.trim(); // 입력값 가져오기 (공백 제거)
  
  if (userInput) {
    // 새로운 리스트 항목 생성
    const listItem = document.createElement('li');
    listItem.textContent = userInput;

    // 리스트에 추가
    studyList.appendChild(listItem);

    // 입력창 비우기
    studyInput.value = '';
  } else {
    alert('공부한 내용을 입력해주세요!');
  }
});