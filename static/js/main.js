

function visitorsCounter() {
   
    document.getElementById("demo").innerHTML = document.getElementsByClassName('card').length;
}

function searchFunction() {
    let input, filter, myCards, card, name, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    myCards = document.getElementById("myCards");
    card = myCards.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
        name = card[i].getElementsByClassName("name")[0];
        txtValue = name.textContent || name.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}

function sortFunction(parent, childSelector, keySelector) {
    var items = parent.children(childSelector).sort(function(a, b) {
        var vA = $(keySelector, a).text();
        var vB = $(keySelector, b).text();
        vA = parseFloat(vA)
        vB = parseFloat(vB)
        return (vA > vB) ? -1 : (vA < vB) ? 1 : 0;
    });
    parent.append(items);
}

$('#sScale').data("sortKey", "span.rooms");

$(document).ready(function() {
    $('input[type="checkbox"]').click(function() {
        if ($(this).prop("checked") === true) {
            sortFunction($('.row'), "div", $(this).data("sortKey"));

        }
    });
});