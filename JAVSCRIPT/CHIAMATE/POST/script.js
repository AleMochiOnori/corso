const form = document.querySelector("form")

form.addEventListener("submit",function(a){

  a.preventDefault()
  const text = document.querySelector("#text")
  const search = document.querySelector("#search")
  const checkbox = document.querySelector("#checkbox")

  fetch("https://jsonplaceholder.typicode.com/posts" , {
      method : "POST",
      body : JSON.stringify({
        title : text.value,
        body : search.value,
        userId : checkbox.value
      }),
      Headers:{
        "Content-type" : "application/json; charset = UTF-8"
      }
  })
  .then ( (resp) => resp.json())
  .then ( (dati) => {
      console.log(dati);
  })

})