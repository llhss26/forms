var arr = []
document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
    const firstname = form.firstname.value
    const lastname = form.lastname.value
    form.firstname.value = ""
    form.lastname.value = ""
    var arrItem = firstname + " " + lastname
    document.getElementById("space").innerHTML = "<p>" + firstname + " " + lastname + "</p>"
    console.log(arrItem)
  arr.push(" " + arrItem)
  console.log(arr)
})
document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
    document.getElementById("space2").innerHTML = "<p>" + arr + "</p>"
})

