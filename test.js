$(document).ready(function() {
    //$('#main').html("<h2>fdsafdgagd<h2>")
    
    
    $('form').on('submit', (function() {
        var input1 = document.getElementById("input1").value;
        var input2 = document.getElementById("input2").value;
        var input3 = document.getElementById("input3").value;
        $('#main').html('');
        $('#main').append("<p>after a long <span style='color: blue'>" + input1 + "</span> at the beach, John decided to get a " + input2 + " and then went to get a " + input3 + " haircut</p>")
    }));
    
    var verb = "worlddldldld"
    
    // 'Modern' browsers (IE8+, use CSS-style selectors)
document.querySelector('.madlib-test .verb').innerHTML = 'World!';

// Using the jQuery library
$(".madlib-test .verb").html(verb);
});