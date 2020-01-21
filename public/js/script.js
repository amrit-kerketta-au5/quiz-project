function enabled() {
    document.getElementById('password').removeAttribute('disabled');
    document.getElementById('userphone').removeAttribute('disabled');
    document.getElementById('useraddress').removeAttribute('disabled');
    document.getElementById('btnupdate').removeAttribute('disabled');
    
}
$('document').ready(function() {
    var i = 0;
    function move() {
        if (i == 0) {
          i = 1;
          var elem = document.getElementById("myBar");
          var width = 1;
          var id = setInterval(frame, 30);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++;
              elem.style.width = width + "%";
            }
          }
        }
      }
    $('#playbtn').click(function()
    {               
      //  $("#myBar").show()  
        move()
      
    })
    $('#reset').click(function() {

        var email = $('#resInp').val();
        $.ajax({
            type: "POST",
            url: "/forgot",
            data: { 'field': email },
            success: function(response) {
                // console.log(response);
                console.log('success');

            },
            error: function(response) {
                // console.log(response);
                console.log('error');

            }
        });
    })
});

function setProfilePic()
{
        $('#profilepicid').click();
        $('#profilepicid').on('change',function()
        {
            $('#updatebtn').click();
        })   
     
}


var count = ["hello", "hye", "here"]
// console.log(count)

$(function () {


    var games = function (req, res) {
        $.ajax({
            url: "/autocomplete",
            dataType: "json",
            type: "GET",
            data: req,
            success: function (data) {
                //console.log(typeof(data))
                res(data)
            },
            error: function (err) {
                console.log(err.status)
            }
        })

    }


    $("input").autocomplete({
        source: games,
        minLenght: 1,
        select: sayhello
    })

    function sayhello() {
        alert('hello');
        window.location.href = '/gamelist';
    }
}) 
var count = ["hello", "hye", "here"]
            // console.log(count)

            $(function () {


                var games = function (req, res) {
                    $.ajax({
                        url: "/autocomplete",
                        dataType: "json",
                        type: "GET",
                        data: req,
                        success: function (data) {
                            //console.log(typeof(data))
                            res(data)
                        },
                        error: function (err) {
                            console.log(err.status)
                        }
                    })

                }


                $("input").autocomplete({
                    source: games,
                    minLenght: 1,
                    select: sayhello
                })

                function sayhello() {
                    alert('hello');
                    window.location.href = '/gamelist';
                }
            })