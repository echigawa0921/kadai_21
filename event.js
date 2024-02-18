function UpdateText() {
  const inputBtn = document.getElementById('btn');

  inputBtn.addEventListener('click', () => {
    setTimeout(() => {
      document.getElementById('text').innerText = 'ボタンをクリックしました';
    }, 2000);
  });
}

UpdateText();
