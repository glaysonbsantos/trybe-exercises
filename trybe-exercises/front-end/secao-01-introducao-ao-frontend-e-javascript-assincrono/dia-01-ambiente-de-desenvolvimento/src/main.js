import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtnEl = document.querySelector('#generatePasswordBtn');
const displayPasswordEl = document.querySelector('h2');
const copyBtn = document.querySelector('#copyBtn');
let randomPassword = '';

passwordBtnEl.addEventListener('click', () => {
    randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;
});

copyBtn.addEventListener('click', () => {
    copy(randomPassword);
    alert('Senha copiada!');
});
