"use strict";
// ПЗ 29, 90 минут. Подготовка и обработчик уже есть.
// Ваша задача — дописать 4 небольших участка с пометкой TODO.
// Сначала создайте форму в index.html, иначе form пока равен null.

  const form = document.querySelector("#login-form");

  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");
  const formStatus = document.querySelector("#form-status");

  
 

    // TODO 2. Проверьте email:
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formStatus.textContent = '';
      formStatus.classList.remove("form-status--success");
      emailError.textContent = '';
      passwordError.textContent = '';
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (email === '') {
        emailError.textContent = "Введите электронную почту";
    
      } else if (!emailPattern.test(email)) {
        emailError.textContent = "Неверный формат email.";
 
      }
      if (password.length < 8 ) {
        passwordError.textContent = "Пароль: минимум 8 символов.";

      }
      if (emailError.textContent === "" && passwordError.textContent === "") {
       formStatus.textContent = "Данные корректны. Учебная проверка пройдена.";
       formStatus.classList.add("form-status--success");

      }
    });
    // если email пустой — сообщение "Введите электронную почту.";
    // иначе, если !emailInput.checkValidity() — "Неверный формат email.".
    // При ошибке: emailInput.setAttribute("aria-invalid", "true");

    // TODO 3. Проверьте пароль:
    // если password.length < 8 — сообщение "Пароль: минимум 8 символов.".
    // При ошибке: passwordInput.setAttribute("aria-invalid", "true");

    // TODO 4. Если оба сообщения об ошибках пустые, покажите успех:
    // formStatus.textContent = "Данные корректны. Учебная проверка пройдена.";
    // formStatus.classList.add("form-status--success");