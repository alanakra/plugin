const inputPwd = document.getElementById('inputPwd')
const form = document.getElementsByTagName('form')[0]
const result = document.getElementById('result')

const pwdLength = inputPwd.value

form.addEventListener('submit', (e) => {
    e.preventDefault()
    result.innerHTML = `Your password is ${generatePassword()}`
})

function generatePassword (pwdLength = 8) {
    const bigString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()*;/,_-"
    const specialString = "@#$%"

    let pwd = ""

    for (let i = 1; i < pwdLength; i++){
      pwd += bigString.charAt(Math.random() * bigString.length)
    }

    pwd += specialString.charAt(Math.random() * specialString.length)

    return pwd
}
