document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const form = document.getElementById('travel-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('form-success');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        let isValid = true;

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formSuccess.style.display = 'none';

        if (username.value.trim() === '') {
            nameError.textContent = 'El nombre es obligatorio.';
            isValid = false;
        }

        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            emailError.textContent = 'El correo electrónico es obligatorio.';
            isValid = false;
        } else if (!emailValue.includes('@') || !emailRegex.test(emailValue)) {
            emailError.textContent = 'Introduce un correo electrónico válido.';
            isValid = false;
        }

        if (message.value.trim() === '') {
            messageError.textContent = 'El mensaje no puede estar vacío.';
            isValid = false;
        }

        if (isValid) {
            formSuccess.style.display = 'block';
            form.reset(); 
        }
    });
});
