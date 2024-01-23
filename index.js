let inp = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let btn = document.querySelector(".cali");
let div = document.querySelector(".heading");

btn.addEventListener('click', () => {
    div.innerHTML = parseInt(inp.value) + parseInt(inp2.value);
});
