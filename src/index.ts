import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8080});

 //event handler 
 wss.on("connection" , function(socket) {
    console.log("User Connection")
    setInterval(() => {
        socket.send("Current price of solana is : " + Math.random())
    }, 5000)

    socket.on("message" , (e) => {
        console.log(e.toString());
    })
 })