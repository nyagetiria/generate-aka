const form = document.getElementById("akanForm");
const result = document.getElementById("result");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    if (!birthdate || !gender) {
        return alert('Enter birthdate and select gender.');
    }

    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return alert('Invalid date');
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    const formula = ((CC / 4 - 2 * CC - 1) + (5 * YY / 4) + (26 * (month + 1) / 10) + day) % 7;
    const dayOfWeek = (Math.floor(formula) + 7) % 7;

    const names = {
        male: ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'],
        female: ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    };

    result.textContent = `Your Akan name is ${names[gender][dayOfWeek]}`;
});