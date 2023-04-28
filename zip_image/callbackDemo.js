function greeting(name) {
    console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = "Please enter your name.";
    callback(name);
}

processUserInput(greeting);

