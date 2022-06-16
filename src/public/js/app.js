// alert("hi!");
// const socket = new WebSocket("http://localhost:3000");
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
const socket = new WebSocket(`ws://${window.location.host}`);
// `` <-- 1왼쪽에 있는 키

socket.addEventListener("open", () => {
    console.log("Connect to Server")
}); // "open" 이벤트 -> 서버에 연결

socket.addEventListener("message", (message) => {
    console.log("Just got this:", message.data, "from the server")
    // message 객체의 data속성 -> 전달딘 메시지 반환
}); // "message" 이벤트 -> 메시지 전달 : 메시지 전달 받아서 콘솔에 출력

socket.addEventListener("close", () => {
    console.log("Disconnected from Server")
}); // "close" 이벤트 -> 서버 오프라인 상태

/*
setTimeout(() => {
    socket.send("hello from Browser!");
}, 5000); //setTimeout 메소드 -> 5000밀리초(5초) 후에 사용자에서 서버에게 메시지 전송
*/

function handleSumbit(event){
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
    input.value = "";
};

messageForm.addEventListener("submit", handleSumbit);