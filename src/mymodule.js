// named export. Have as many as needed
//default export - can only have one

const message = 'Some message from myModule.js';

const name = 'Andrew';


const location = "Charlotte";

const getGreeting = (name) => {
    return `Welcome to the course ${name}`
}

export { message , name, getGreeting, location as default}