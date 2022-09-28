import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js"

var clicknumber = 0;
var urlvalue;
var imgwidth;
var colorvalue = 0;
var bordervalue = 0;

$(document).ready(function() {
    // $( "#generate" ).click(function() {
    //     var urlvalue = $( "#url" ).val();  //get url value
    //     var imgwidth = parseInt($("#width").val()); //get width value and parse it into a number
    //     var bordervalue = parseInt($("#borderthickness").val());  //get border thickness value and parse it into a number
    //     var colorvalue = $( "#bordercolor" ).val();
    //     $('.picture').attr("src", urlvalue); //img append to specific class
    //     $(".picture").css('width', imgwidth); //set the css to given number
    //     $('.picture').css('border', "solid " + bordervalue + "px " + colorvalue);  
    //     $('.picture').css('margin', "auto");  
    //     $('.picture').css('display', "block");  //basic image styling after attr
    //     $('.picture').css('margin-top', "20px");  
    //   });

      $( "#url" ).change(function() {
        urlvalue = $( "#url" ).val();  //get url value
        $('.picture').attr("src", urlvalue); //img append to specific class
        $('.picture').css('margin', "auto");  
        $('.picture').css('display', "block");  //basic image styling after attr
        $('.picture').css('margin-top', "20px");  
      });

      $( "#width" ).change(function() {
         imgwidth = parseInt($("#width").val()); //get width value and parse it into a number
        $(".picture").css('width', imgwidth); //set the css to given number
      });

      $( "#bordercolor" ).change(function() {
        colorvalue = $( "#bordercolor" ).val();
        $('.picture').css('border', "solid " + bordervalue + "px " + colorvalue);
      });

      $( "#borderthickness" ).change(function() {
        bordervalue = parseInt($("#borderthickness").val());  //get border thickness value and parse it into a number
        //console.log(bordervalue);
        $('.picture').css('border', "solid " + bordervalue + "px " + colorvalue);
      });


      $("#darkmode").click(function(){
        //console.log(clicknumber)
        if(clicknumber % 2 != 0){
            clicknumber++
            $('body').css('background-color', "white");  
            $('body').css('color', "black");  
        }
        else{
            clicknumber++
            $('body').css('background-color', "black");  
            $('body').css('color', "white"); 
        }
      });
});
