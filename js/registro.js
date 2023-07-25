const signupform = document.querySelector ("#signupform")
signupform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const username = document.querySelector ("#usuario")
    const password = document.querySelector ("#password")
        
    const users = JSON.parse(localStorage.getItem('users')) || []
    users.push({username: username, password: password})
    localStorage.setItem('users', JSON.stringify(users))
    window.location.href = 'pages/inicio.html';
})

