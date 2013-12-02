function show(){
    clearInterval(num_id)
    $('#myModal').modal({backdrop:'static'})                                                                  
};
var num_id = 0;
$('document').ready(function(){                                                                
        $('.close').on('click', function(){
            num_id = setInterval(show, 2000);
            });
       show() 
        }); 

