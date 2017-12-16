$( document ).ready(function() {
    $("#pro_inscri").hide();
    $("#par_inscri").hide();
});

$("#pro_insc").click(function() {
    $("#choiceinscri").hide();
    $("#pro_inscri").show();
});

$("#par_insc").click(function() {
    $("#choiceinscri").hide();
    $("#par_inscri").show();
});