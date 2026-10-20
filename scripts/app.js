"use strict";
// ПЗ 29, 90 минут. Подготовка и обработчик уже есть.
// Ваша задача — дописать 4 небольших участка с пометкой TODO.
// Сначала создайте форму в index.html, иначе form пока равен null.

const form = document.querySelector("#login-form");

if (form) {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");
  const formStatus = document.querySelector("#form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Не перезагружаем страницу.

    // Перед каждой проверкой очищаем старые сообщения.
    emailError.textContent = "";
    passwordError.textContent = "";
    formStatus.textContent = "";
    formStatus.classList.remove("form-status--success");
    emailInput.setAttribute("aria-invalid", "false");
    passwordInput.setAttribute("aria-invalid", "false");
    // Находим необходимые элементы в DOM (если они ещё не найдены в стартовом проекте)
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formStatus = document.getElementById('form-status');


loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  emailError.textContent = '';
  passwordError.textContent = '';
  formStatus.textContent = '';
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;
  if (!emailValue) {
    emailError.textContent = 'Поле email не должно быть пустым.';
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Введите корректный адрес электронной почты.';
  }
  if (passwordValue.length < 8) {
    passwordError.textContent = 'Пароль должен быть не менее 8 символов.';
  }

  if (emailError.textContent === '' && passwordError.textContent === '') {
    formStatus.textContent = 'Данные корректны. Учебная проверка пройдена.';
  }
});
