// Get elements
let output = document.getElementById("output");

// 1. Arrow
document.getElementById("arrowButton").
addEventListener("click", () => {
    const greet = name => 'Hello '+name+'!';
    output.textContent = greet("Andrew");
});

// Promise

document.getElementById("promiseButton").addEventListener("click", () => {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve("Datat fetched useing promise")
            });
        }, 2000);
    }
    fetchData().then(response => {
        output.textContent = response;
    });
});

// async/await

document.getElementById("asyncButton").addEventListener("click", async () => {
    function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data Fetched useing async/await");
            }, 2000);
        });
    }
    let response = await fetchData();
    output.textContent = response;

});