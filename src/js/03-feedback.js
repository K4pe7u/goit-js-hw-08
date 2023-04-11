import throttle from 'lodash.throttle';
// const formEl = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input[name="email"]');
// const messageEl= document.querySelector('textarea[name="message"]');
// zamiast metody łańcuchowej (powyżej) pobieram pozycje bezpośrednio z forumlarza

// dowiedziec się która metoda jest szybsza

const feedbackEl = document.querySelector('.feedback-form');
const emailInput = feedbackEl.querySelector('input[name="email"]');
const messageInput = feedbackEl.querySelector('textarea[name="message"]');

// uzyłem lodash.throttle, do ustawienia częstoliwości aktualizacji localstorage
// 500milisekund ;]

const saveForm = throttle(() => {
  const stateForm = {
    email: emailInput.value,
    message: messageInput.value,

    // wartości inputów
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(stateForm));
}, 500);

// zdarzenie zapisania danych z localstorage po odświeżeniu strony
// JSON.parse -> parsowanie -> odczyt danych z local'a

feedbackEl.addEventListener('input', saveForm);

const stateLSForm = JSON.parse(localStorage.getItem('feedback-form-state'));
if (stateLSForm) {
  emailInput.value = stateLSForm.email;
  messageInput.value = stateLSForm.message;
}
// zdarzenie wymazania danych z localstorage i inputa po sumbicie

feedbackEl.addEventListener('submit', event => {
  event.preventDefault();
  const stateForm = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(stateForm);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  // puste pola po naciśnięciu sumbit'a
});

// przykład fu try/catch z odczytem localstorage'a
// function xyz() {
//     try {
//       const zyx = JSON.parse(localStorage.getItem('feedback-form-state'));

//       if (zyx) {
//         emailInput.value = zyx.email || '';
//         messageInput.value = zyx.message || '';
//       }
//     } catch (err) {
//       console.error('coś tam')
//   }

//   xyz();

// nie wiem która metoda odczytania będzie bardziej czysta... -> dopytać
