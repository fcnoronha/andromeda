function sortListDir(button_id) {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("planos");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("A");
        // console.log(b);
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should switch place with the current item,
            based on the sorting direction (asc or desc): */
            if (dir == "asc") {
                console.log(b[i].getElementsByTagName("H5")[0]);
                console.log(b[i + 1].getElementsByTagName("H5")[0]);
                if (b[i].getElementsByTagName("H5")[0].innerHTML.toLowerCase() > b[i + 1].getElementsByTagName("H5")[0].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically lower than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].getElementsByTagName("H5")[0].innerHTML.toLowerCase() < b[i + 1].getElementsByTagName("H5")[0].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically higher than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch= true;
                    break;
                }
                console.log(shouldSwitch);
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */

            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            // Each time a switch is done, increase switchcount by 1:
            switchcount ++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
    toggleText(button_id);
}

function toggleText(button_id)
{
   var el = document.getElementById(button_id);
   if (el.innerHTML == "A-Z")
   {
       el.innerHTML = 'Z-A';
   }
   else
   {
     el.innerHTML = "A-Z";
   }
}

function sortListCat(categoria){
    var botao = document.getElementById("categorias");
    var nomes = ["Todos", "Infraestrutura", "Zeladoria", "Eventos", "Contratação", "Outros"];
    var cats = ["todos", "infra", "zelado", "eventos", "contrat", "outros"];
    botao.innerHTML = nomes[cats.indexOf(categoria)];
    var list = document.getElementById("planos");
    var els = list.getElementsByTagName("A");
    if (categoria == "todos")
        for (i = 0; i < els.length; i++) els[i].style.display = "block";
    else
        for (i = 0; i < els.length; i++)
            if (els[i].id == categoria) els[i].style.display = "block";
            else els[i].style.display = "none";
}

document.querySelector("#procurador").onclick=function(){
    var termo = document.querySelector("#busca").value;
    termo = termo.toLowerCase();
    console.log(termo);
    var list = document.getElementById("planos");
    var els = list.getElementsByTagName("A");
    for (i = 0; i < els.length; i++)
        if (els[i].getElementsByTagName("H5")[0].innerHTML.toLowerCase().includes(termo))
            els[i].style.display = "block";
        else els[i].style.display = "none";

}

function togglePreview(){
    var x = document.getElementById("preview");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
