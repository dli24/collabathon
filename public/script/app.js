const URL = `/api/users/`
const datas = 'firstName='+ $('#firstName').val() +'&lastName='+$('#lastName')+

function getUser(){
    const apiCall ={
        method: 'GET',
        url: URL,
        data:data,
        success: function(success){},
        error: function(err){}
    };
    $.ajax(apiCall)
}



$('#newUser').on('submit', function(e) {
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
        method: 'POST',
        url: URL,
        data: $(this).serialize(),
        success: function(response){
            console.log(response)
        },
        error: function(){
            console.log("asd")
        }
        
    });

 
});

$('.signUpStuff').on('click', e => {
    $('.signUpStuff').css('display', 'none');
    $('.formSection').toggle('slow');
});

$('.nextButton').on('click', e =>{
    $('#newRadio').css('display', 'none');
    $('#newUser').toggle('slow');
})

$('input#submit.submit').on('click', e =>{

})