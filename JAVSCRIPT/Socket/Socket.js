

const text =  document.querySelector("#commenti")

const barra = document.querySelector(".barra")

const submit = document.querySelector("#ciao")

const form = document.querySelector("form")



function sendMessages(message){
    const socket = new WebSocket("wss://s8906.ams1.piesocket.com/v3/1?api_key=P31YOwoaCFYo8u3YtNimZRaQKjwrnuki90CALgg7&notify_self=1")
    socket.addEventListener("open",()=>{
    socket.send(message)
    })

    socket.addEventListener("message",(event)=>{
    text.innerHTML += `
    <ul>
       <li>${event.data}</li>
    </ul>
   ` 
    })
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const valore = barra.value;
        sendMessages(valore);
    });
    
}


