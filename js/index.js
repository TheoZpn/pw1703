document.addEventListener("DOMContentLoaded", (event)=>{
    buscarInscritos();
});

function alterarTema() {
    // DOM  -> document object model
    const tema = document.body.getAttribute("data-theme");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-theme", novoTema);

    const btAlterarTema = document.getElementById("btAlterarTema");
    btAlterarTema.textContent = tema == 'dark' ? 'light' : 'dark';
}

function buscarInscritos(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => {
        const divInscritos = document.getElementById('inscritos');
        res.forEach(user  => {
            const novoParagrafo = document.createElement("p");
            novoParagrafo.textContent = `Nome: ${user.name}`;
            divInscritos.appendChild(novoParagrafo);
        });
    }).catch(e=>console.log(e));
}

