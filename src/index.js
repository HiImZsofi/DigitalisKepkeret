import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js"

$(document).ready(function() {
    $( "#generate" ).click(function() {
        var urlvalue = $( "#url" ).val();  //get url value
        var imgwidth = parseInt($("#width").val()); //get width value and parse it into a number
        $('.picture').attr("src", urlvalue);
        $(".picture").css('width', imgwidth);
      });
});
