let startTime, updatedTime, difference, tInterval;
let running = false;

// Start the stopwatch
function start() {
    if (!running) {
        running = true;
        startTime = new Date().getTime(); // Set the start time
        tInterval = setInterval(updateTime, 100); // Update every 100 ms
    }
}

// Stop the stopwatch
function stop() {
    if (running) {
        running = false;
        clearInterval(tInterval);
    }
}

// Reset the stopwatch
function reset() {
    running = false;
    clearInterval(tInterval);
    difference = 0; // Reset difference
    document.getElementById('display').innerHTML = "00:00:00"; // Reset display
}

// Update the displayed time
function updateTime() {
    if (!running) return; // Only update if running

    updatedTime = new Date().getTime();
    difference = updatedTime - startTime; // Calculate difference

    // Calculate hours, minutes, and seconds
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Format the display
    document.getElementById('display').innerHTML =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}
