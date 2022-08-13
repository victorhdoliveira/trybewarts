const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('btn');
const botaoCheck = document.getElementById('agreement');
const botaoSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const caracteresCounter = document.getElementById('counter');
const maxNum = 500;

// 3
botao.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// 18
botaoSubmit.disabled = true;

function clicaSubmit() {
  if (botaoCheck.checked === true) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
}

botaoCheck.addEventListener('click', clicaSubmit);

// 20
textArea.addEventListener('input', () => {
  const typeNum = textArea.value.length;
  const counter = maxNum - typeNum;
  caracteresCounter.textContent = `${counter}/500`;
});
