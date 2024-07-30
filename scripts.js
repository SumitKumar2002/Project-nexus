document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    const password = e.target.querySelector('input[type="password"]:nth-child(3)').value;
    const confirmPassword = e.target.querySelector('input[type="password"]:nth-child(4)').value;
    
    if (password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match!");
    }
});
