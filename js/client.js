const socket=io('http://localhost:8000')

const form=document.getElementById("send_container");
const messageInp=document.getElementById("msginp");
const msgContainer=document.querySelector(".container");
const append=(message,position)=>{
    const msgEle=document.createElement('div');
    msgEle.innerText=message;
    msgEle.classList.add('message');
    msgEle.classList.add(position);
    msgContainer.append(msgEle);
}
const userName=prompt("Enter your name to join");
socket.emit('new_user_joined',userName);

socket.on('user_joined',data=>{
append(`${data} joined the chat`,'right')
})



