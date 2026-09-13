console.log("DSM College website loaded successfully!");

// Interactive alert when clicking download buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText === "Download Notes") {
            e.preventDefault();
            alert("Notes will be available for download soon!");
        }
    });
});
