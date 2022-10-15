const pwdLength = document.getElementById('inputPwd').value
const form = document.getElementsByTagName('form')[0]
const result = document.getElementById('result')
const copyPwd = document.getElementById('copyPwd')
const inputResult = document.getElementById('inputResult')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // result.innerHTML = `Your password is ${generatePassword()}`
    inputResult.value = generatePassword(pwdLength)
})

function generatePassword (pwdLength) {
    const bigString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()*;/,_-"
    const specialString = "@#$%"

    let pwd = ""

    for (let i = 1; i < pwdLength; i++){
      pwd += bigString.charAt(Math.random() * bigString.length)
    }

    pwd += specialString.charAt(Math.random() * specialString.length)

    return pwd
}
