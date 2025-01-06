const greeting = document.getElementById("greeting");
const today = new Date(); // Perbaikan: huruf kapital pada "Date"
const hour = today.getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning!";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
} else {
    greeting.textContent = "Good Evening!";
}
