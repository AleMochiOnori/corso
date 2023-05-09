const utente1 = document.querySelector(".utente1")
const tbody = document.querySelector(".tbody")


function getUsers(){
    class Utenti {
        constructor(){
            this.id = id;
            this.name = name;
            this.email = this.email;
        }
    }
    
    const array = [
        new Utenti(1,"Giacomo","Giacomino@gmail.com"),
        new Utenti(2,"Alessandro","Priccio@gmail.com"),
        new Utenti(3,"Andrea","AndreaIlGay@gmail.com")
    ]

const body = document.createElement(tbody)

    array.map(el=>
        body.innerHTML = `
        <tr>
           <td>${el.id}</td>
           <td>${el.name}</td>
           <td>${el.email}</td>
        </tr>  
           `
        ).join("")
    
    
    document.appendChild(tbody)
}

getUsers()

