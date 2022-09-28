import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js"

$(document).ready(function() {
    $( "#generate" ).click(function() {
        var urlvalue = $( "#url" ).val();  //get url value
        var imgwidth = parseInt($("#width").val()); //get width value and parse it into a number
        var bordervalue = parseInt($("#borderthickness").val());  //get border thickness value and parse it into a number
        $('.picture').attr("src", urlvalue); //img append to specific class
        $(".picture").css('width', imgwidth); //set the css to given number
        $('.picture').css('border', "solid " + bordervalue + "px red");  
      });
});
