export default function login(usernamePassed: string, passwordPassed: string) {
    // send POST request to a fake endpoint
    // should throw 404 error in the browser console
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernamePassed, password: passwordPassed })
    }).then(() => {
        if (usernamePassed === "isaac" && passwordPassed === "123456") {
            alert("Logged In Successfully!");
        }
        else {
            alert("Invalid username or password. Please try again!");
        }
    });
};