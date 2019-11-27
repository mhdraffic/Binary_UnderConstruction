$(document).ready(function(){

    setTimeout(function(){
        $('#loading').show().fadeOut();
    },1500);

    setTimeout(function(){
        $('#popUpMain').css('display','block');
    },5000);
    
    $('#popUpMain').click(function(){
        $('#popUpMain').css('display','none');
    });
    
});
