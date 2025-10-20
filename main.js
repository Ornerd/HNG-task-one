const theCurrentTime = document.querySelector(`[data-testid="test-user-time"]`);


theCurrentTime.textContent =`${Date.now()}`;

setInterval(() => {
    theCurrentTime.textContent =`${Date.now()}`
}, 1000);
