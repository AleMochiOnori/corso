const tableContainer = document.querySelector(".tableContainer")
barra.addEventListener("keyup",filterUser)
let table
let res


async function getUsers(){
const data = await fetch("https://jsonplaceholder.typicode.com/users")
res = await data.json()
table = document.createElement("table")
table.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>PHONE</th>
            </tr>
        </thead>
        <tbody>
        ${res.map(el=>`   
            <tr>
                <td>${el.id}</td>
                <td>${el.name}</td>
                <td>${el.username}</td>
                <td>${el.email}</td>
                <td>${el.address.city}</td>
                <td>${el.phone}</td>
            </tr>    
            `
        ).join("")}
        </tbody>
    </table>
    `
    tableContainer.appendChild(table)
}

getUsers()



async function filterUser(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    res = await data.json()
    let valore = barra.value
    table.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>PHONE</th>
            </tr>
        </thead>
        <tbody>
        ${res.filter(x => 
        
        x.id.toString().includes(valore)||
        x.name.toLowerCase().includes(valore)||
        x.name.toLowerCase().includes(valore)||
        x.email.toLowerCase().includes(valore)||
        x.address.city.toLowerCase().includes(valore)||
        x.phone.toLowerCase().includes(valore)
        
        
        ).map(el=>`  
            <tr>
                <td>${el.id}</td>
                <td>${el.name}</td>
                <td>${el.username}</td>
                <td>${el.email}</td>
                <td>${el.address.city}</td>
                <td>${el.phone}</td>
            </tr>    
            `
        ).join("")}
        </tbody>
    </table>
    `

}
