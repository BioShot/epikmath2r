//Made By BioShot\\

var mode = "dark";

$(document).ready(function(){
    $(".tm").click(function(){
        if(mode == "light"){
            mode = "dark";
            $("body").attr("style", "background-color: rgb(42, 42, 42); color: white;");
            //$("button").attr("style", "background-color: black; color: white;");
        }else if(mode == "dark"){
            mode = "light";
            $("body").attr("style", "background-color: white;")
            $("button").attr("style","");
        }
    })
})
