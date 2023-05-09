const tableContainer = document.querySelector(".tableContainer")
let table
let res

async function getUsers(){
    const data = await fetch("http://jsonplaceholder.typicode.com/todos")
    res = await data.json()
    table = document.createElement("table")
    table.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>isCompleted</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
        ${res.map(el =>`
        <tr>
            <td>${el.id}</td>
            <td><input type="checkbox" name="isCompleted" ${el.completed ? "checked" : " "}></td>
            <td>${el.title.toUpperCase()}</td>
            <td><button data-user-id="${el.id}" class="btn">Delete</button></td>
        </tr>

        `).join("")}
        </tbody>
    </table>
    `

    // DELETE REQUEST


    tableContainer.appendChild(table)
    btns = document.querySelectorAll(".btn")
    btns.forEach(button=>
        button.addEventListener("click", function deleteRow2(){
            fetch("http://jsonplaceholder.typicode.com/todos/" + this.attributes[0].nodeValue,{
                    method : "DELETE"
            }).then((response) => {
                if(response.status === 200) {
                    this.parentElement.parentElement.remove()
                } else {
                    alert("Non funziona figlio di troia")
                }
            });
            
        })
    )
}

getUsers()








