let loggedIn = true;
let isAdmin = true;

if (loggedIn) {
    console.log("Welcome to the application");
    if (isAdmin) {
        console.log("You have access to admin panel");
    }
    else {
        console.log("You have access to user panel");
    }
}
else {
    console.log("Please login to access the application");
}
