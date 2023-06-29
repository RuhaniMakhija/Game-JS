// Add animation class to playerName element after a delay
setTimeout(() => {
    playerName=document.getElementById("playerName");
    
    playerName.classList.add("animated-text");
    
}, 2000);

// Add animation class to nickname element after a delay
setTimeout(() => {
    nickname=document.getElementById("nickname");
    nickname.classList.add("animated-text");
}, 2000);




// Redirect to the instructions page and pass player information
function redirectToInstructionsPage() {
    var nameInput = document.getElementById("nameInput").value;
    var nicknameInput = document.getElementById("nicknameInput").value;
    
    // Create a player object with name and nickname
    const player = {
        name: nameInput,
        nickname: nicknameInput
    };
    console.log(player);
    window.location.href = "instruction.html";
}
  
