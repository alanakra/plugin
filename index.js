const form = document.getElementsByTagName('form')[0]
const result = document.getElementById('result')
const copyPwd = document.getElementById('copyPwd')
const inputResult = document.getElementById('inputResult')
const blocResult = document.getElementsByClassName('blocResult')[0]
const bubbleText = document.getElementsByClassName('bubbletext')[0]

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const resultPassword = generatePassword()
  inputPwd.value = ''
  inputResult.value = resultPassword
  blocResult.style.display = "block"
  bubbleText.innerHTML = "Copy to clipboard"
})

copyPwd.addEventListener('click', () => {
  navigator.clipboard.writeText(inputResult.value).then(()=>{
    bubbleText.innerHTML = "Copied to clipboard"
  })
})

function generatePassword () {
    let inputPwd = document.getElementById('inputPwd').value
    if(inputPwd == 0) {
      inputPwd = 8
    }
    const bigString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}()*;/,_-"
    const specialString = "@#$%"

    let pwd = ""
    for (let i = 1; i < inputPwd; i++){
      pwd += bigString.charAt(Math.random() * bigString.length)
    }

    pwd += specialString.charAt(Math.random() * specialString.length)

    return pwd
}
