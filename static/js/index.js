var socket = io()

socket.on('connect', function(){
    var name = prompt('반값습니다.',''); 
    if(!name){
        name = '익명'
    }
    // console.log(name);
    socket.emit('newUser',name)
    // let input = document.getElementById('test');
    // input.value = '접속 됨'
})

socket.on('update',function(data){
    console.log(`${data.name} : ${data.msg}`)
})

function send(){
    let message = document.getElementById('test').value
    document.getElementById('test').value = ''
    socket.emit('message',{msg : message})
}