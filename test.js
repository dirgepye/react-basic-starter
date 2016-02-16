$(document).ready(function() {
    $('form').on('submit', (function() {
        var input1 = document.getElementById("input1").value;
        var input2 = document.getElementById("input2").value;
        var input3 = document.getElementById("input3").value;
        console.log("after a long " + input1 + " at the beach, John decided to get a " + input2 + " and then went to get a " + input3 + " haircut")
    }));
});