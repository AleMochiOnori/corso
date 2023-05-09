const tbody = document.querySelector(".tbody")
tbody.addEventListener("click",toggleColor)

    class Utenti {
        constructor(id,name,email){
            this.id = id;
            this.name = name;
            this.email = email;
        }
    }
    
    const array = [
        new Utenti(1,"Giacomo","Giacomino@gmail.com"),
        new Utenti(2,"Alessandro","Priccio@gmail.com"),
        new Utenti(3,"Andrea","AndreaIlGay@gmail.com")
    ]


    
tbody.innerHTML = `
${array.map(el=>`
<tr>
  <td>${el.id}</td>
  <td>${el.name}</td>
  <td>${el.email}</td>
  <td><button class ="bottone">Button</button></td>

</tr>  
`
).join("")}
`


function rimuoviRiga(){
    const button = document.querySelectorAll(".bottone");
    
    button.forEach(el => {
        el.addEventListener("click",ev=>{
            ev.target.parentElement.parentElement.remove()
        })
        
    });
  
}

rimuoviRiga()



function toggleColor(){
    tbody.style.backgroundColor = tbody.style.backgroundColor === 'white' ? "red" : "white"
}