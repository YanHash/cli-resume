document.getElementById('command-line').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleCommand();
    }
});

function handleCommand() {
    const inputField = document.getElementById('command-line');
    const command = inputField.value.trim();
    const responseDiv = document.getElementById('response');
    let response = '';

    switch (command.toLowerCase()) {
        case 'ls':
            response = 'Oh, trying to list files? What do you think this is, a file manager?';
            break;
        case 'cd':
            response = 'Change directory? How about you change your approach to life first.';
            break;
        case 'pwd':
            response = 'Print working directory? Sure, but do you even know where you are in life?';
            break;
        case 'mkdir':
            response = 'Make a directory? How about you make some real decisions for once.';
            break;
        case 'rm':
            response = 'Remove something? If only removing life’s problems was this easy.';
            break;
        case 'echo':
            response = 'Echo? What are you, a parrot?';
            break;
        case 'exit':
            response = 'Exit? You can try, but there’s no escaping this reality.';
            break;
        case 'sudo':
            response = 'Superuser? More like super loser.';
            break;
        default:
            response = `Command not found: ${command}. Maybe try a real command next time.`;
    }

    responseDiv.innerText += `root@virtual-machine:~$ ${command}\n${response}\n`;
    inputField.value = '';
}