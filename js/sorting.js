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
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should switch place with the current item,
            based on the sorting direction (asc or desc): */
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically lower than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically higher than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch= true;
                    break;
                }
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
    botao.innerHTML = categoria;
    var list = document.getElementById("planos");
    var els = list.getElementsByTagName("A");
    if (categoria == 'todos')
        for (i = 0; i < els.length; i++) els[i].style.display = "block";
    else
        for (i = 0; i < els.length; i++)
            if (els[i].id == categoria) els[i].style.display = "block";
            else els[i].style.display = "none";
}
