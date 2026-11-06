"use strict";
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

    // TODO 1. Получите значения полей
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // TODO 2. Проверьте email
    if (email === "") {
      emailError.textContent = "Введите электронную почту.";
      emailInput.setAttribute("aria-invalid", "true");
    } else if (!emailInput.checkValidity()) {
      emailError.textContent = "Неверный формат электронной почты.";
      emailInput.setAttribute("aria-invalid", "true");
    }

    // TODO 3. Проверьте пароль
    if (password.length < 8) {
      passwordError.textContent = "Пароль должен содержать минимум 8 символов.";
      passwordInput.setAttribute("aria-invalid", "true");
    }

    // TODO 4. Если ошибок нет
    if (emailError.textContent === "" && passwordError.textContent === "") {
      formStatus.textContent = "Данные корректны. Учебная проверка пройдена.";
      formStatus.classList.add("form-status--success");
    }
  });
}