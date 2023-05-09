const h4 = document.querySelector(".my-0")
const h1 = document.querySelector(".card-title")
const li1 = document.querySelector(".li1")
const li2 = document.querySelector(".li2")
const padre = document.querySelector("#padre")
const barra = document.querySelector(".form-control")
barra.addEventListener("keyup",filterProducts)
let div
let res
let data
let valore

async function getProducts() {
    
    data = await fetch("https://fakestoreapi.com/products")
    res = await data.json()
    res.forEach(el => {
        div = document.createElement("div");
        div.innerHTML =`
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${el.title}</h4>
                </div>
                <div class="card-body">
                <h1 class="card-title pricing-card-title"><small class="text-body-secondary fw-light">/mo</small>${el.price}</h1>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="li1">${el.category}</li>
                    <li class="divisorio"></li>
                    <li class="li2">${el.description}</li>
                </ul>
                <div>
                    <img src="${el.image}" alt="" height = 200px>        
                </div>
                </div>
            </div>
        </div>
       `
       padre.appendChild(div)
    })
    

   
}
getProducts()



async function filterProducts(){
    valore = barra.value
    padre.innerHTML = " "
    res.filter(x=>
        x.category.toLowerCase().includes(valore.toLowerCase())||
        x.title.toLowerCase().includes(valore.toLowerCase())||
        x.description.toLowerCase().includes(valore.toLowerCase())
    ).forEach(el => {
        div.innerHTML =`
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${el.title}</h4>
                </div>
                <div class="card-body">
                <h1 class="card-title pricing-card-title"><small class="text-body-secondary fw-light">/mo</small>${el.price}</h1>
                <ul class="list-unstyled mt-3 mb-4">
                    <li class="li1">${el.category}</li>
                    <li class="divisorio"></li>
                    <li class="li2">${el.description}</li>
                </ul>
                <div>
                    <img src="${el.image}" alt="" height = 200px>        
                </div>
                </div>
            </div>
        </div>
       `
       padre.appendChild(div)
    })
}


