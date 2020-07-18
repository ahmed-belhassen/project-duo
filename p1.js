
var obj={}
obj.firstName = document.getElementById('fName').value
obj.lastname = document.getElementById('lName').value
obj.email = document.getElementById('email').value
obj.password = document.getElementById('pw').value
var a = obj.firstName 
var b = obj.lastname 
var c = obj.email 
var d = obj.password 
localStorage.setItem("key",a)
localStorage.setItem("key2",b)
localStorage.setItem("key3",c)
localStorage.setItem("key4",d)

  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})