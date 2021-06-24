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

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInp.value;
    append(`You: ${message}`,'right');
    socket.emit('send',message);
    messageInp.value='';
})

socket.on('user_joined',data=>{
append(`${data} joined the chat`,'right')
})

socket.on('recieve',data=>{
append(`${data.name}:${data.message}`,'left')
})

socket.on('left',data=>{
    append(`${data.name} left the chat`,'left')
    })
