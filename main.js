const myInputs = document.querySelectorAll('.input');
const form = document.getElementById('form');
const errorImg1 = document.getElementById('errorImg1');
const errorImg2 = document.getElementById('errorImg2');
const errorImg3 = document.getElementById('errorImg3');
const errorImg4 = document.getElementById('errorImg4');
const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const warningMsg = document.querySelectorAll('.warning-msg');
const myStore = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const { firstName, lastName, password, email } = myStore;
  if (firstName.length > 0) {
    errorImg1.style.display = 'none';
    warningMsg[0].style.display = 'none';
  } else {
    errorImg1.style.display = 'block';
    warningMsg[0].style.display = 'block';
  }

  if (lastName.length > 0) {
    errorImg2.style.display = 'none';
    warningMsg[1].style.display = 'none';
  } else {
    errorImg2.style.display = 'block';
    warningMsg[1].style.display = 'block';
  }
  if (email.length > 0 && regex.test(myStore.email)) {
    errorImg3.style.display = 'none';
    warningMsg[2].style.display = 'none';
  } else {
    errorImg3.style.display = 'block';
    warningMsg[2].style.display = 'block';
  }
  if (password.length > 8) {
    errorImg4.style.display = 'none';
    warningMsg[3].style.display = 'none';
  } else {
    errorImg4.style.display = 'block';
    warningMsg[3].style.display = 'block';
  }
});
myInputs.forEach((myInput, index) => {
  myInput.addEventListener('keyup', (event) => {
    const key = event.target.name;
    const value = event.target.value;
    myStore[key] = value;
    // console.log(myStore);
  });
});
