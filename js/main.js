$(document).ready(function() {

    $("button#submit").on ("click", function(){
        var message = $("textarea").val();
    $("ul").append("<li>" + message + "</li>");
    $("textarea").val("")
    $("button#clear").click(function(){
            $("ul").empty();
    });
    });

});


    function ClearFields() {
         document.getElementById(" text").value = "";
    }
