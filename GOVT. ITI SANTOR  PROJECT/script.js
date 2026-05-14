function updateDateTime() {
    const now = new Date();

    // Greeting logic
    const hours = now.getHours();
    let greet = "";
    if (hours < 12) greet = "Good Morning ☀️";
    else if (hours < 17) greet = "Good Afternoon ☀️";
    else greet = "Good Evening 🌙";
    
    document.getElementById('greeting').innerHTML = greet;

    // Date/Time Arrays
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Update Elements
    document.getElementById('day').innerHTML = days[now.getDay()];
    document.getElementById('date').innerHTML = now.getDate();
    document.getElementById('month').innerHTML = months[now.getMonth()];
    document.getElementById('year').innerHTML = now.getFullYear();
}

// Function call on load
updateDateTime();