const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
  
  noBtn.style.left = `${Math.max(20, x)}px`;
  noBtn.style.top = `${Math.max(20, y)}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // 모바일 터치 시 클릭되는 현상 방지
  moveButton();
});

yesBtn.addEventListener('click', () => {
  alert('야호! 그럼 데이트 날짜 정하자! 💕');
  // '응' 눌렀을 때 특정 링크(오픈채팅/구글폼 등)로 보낼 경우 아래 주석(# 제거)해 사용하세요:
  // window.location.href = "https://open.kakao.com/...";
});
