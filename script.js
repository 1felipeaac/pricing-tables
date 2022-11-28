const tabela = document.querySelectorAll(".tabela-precos")
const thead = document.querySelectorAll("thead")
const button = document.querySelectorAll("button")
const span = document.getElementById("span")

console.log(tabela)


for (let index_tabela = 0; index_tabela < tabela.length; index_tabela++) {
    const element = tabela[index_tabela];
    const plano = thead[index_tabela];
    const select_button = button[index_tabela];
    
    element.addEventListener("mouseover", function(){
        element.style.transform = "scale(1.1)";
        plano.setAttribute("style", "background-color: #ffcc29;");
        select_button.style.backgroundColor = "#1d539e";
        select_button.style.color = "white";
        if (index_tabela == 1){
            span.style.visibility = "visible"
        }
    });

    element.addEventListener("mouseout", function(){
        element.style.transform = "scale(1.0)";
        plano.setAttribute("style", "background-color: white;");
        select_button.style.backgroundColor = "white";
        select_button.style.color = "#1d539e";
        span.style.visibility = "hidden"
    });
}
