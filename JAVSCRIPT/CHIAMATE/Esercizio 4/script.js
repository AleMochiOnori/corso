const h4 = document.querySelector(".my-0")
const h1 = document.querySelector(".card-title")
const li1 = document.querySelector(".li1")
const li2 = document.querySelector(".li2")
const img = document.querySelector(".immagine")

async function getProducts(){

    const data = await fetch("https://fakestoreapi.com/products/1")
    const res = await data.json()
    h4.innerHTML = `
    
    ${res.title}
    `
    h1.innerHTML = `
    ${res.price}
    `

    li1.innerHTML = `
    ${res.description}
    
    `
   li2.innerHTML = `
    
    CATEGORY :

   ${res.category.toUpperCase()}

   `
    

    img.innerHTML = `
    
   <img src= "${res.image}" height= 200px>

    `



}
getProducts()



