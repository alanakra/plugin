const form = document.getElementsByTagName('form')[0]
const result = document.getElementById('result')
const copyPwd = document.getElementById('copyPwd')
const inputResult = document.getElementById('inputResult')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const resultPassword = generatePassword()
  result.innerHTML = `Your password is ${resultPassword}`
  inputPwd.value = ''
})

function generatePassword () {
    const inputPwd = document.getElementById('inputPwd').value
    const bigString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()*;/,_-"
    const specialString = "@#$%"

    let pwd = ""
    for (let i = 1; i < inputPwd; i++){
      pwd += bigString.charAt(Math.random() * bigString.length)
    }

    pwd += specialString.charAt(Math.random() * specialString.length)

    return pwd
}
