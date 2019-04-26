const URL = `/api/users/`

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


$('.signUpStuff').on('click', e => {
    $('.signUpStuff').css('display', 'none');
    $('.formSection').toggle('slow');
});

$('.nextButton').on('click', e =>{
    $('#newRadio').css('display', 'none');
    $('#newUser').toggle('slow');
});


$('.exitButton').on('click', e =>{
    $('.formSection').toggle('slow');
    $('.signUpStuff').css('display', 'inline')
})


$('#newUser').on('submit', function(e) {
    e.preventDefault();
    console.log('something')
    $.ajax({
        method: 'POST',
        url: URL,
        data: $(this).serialize(),
        success: function(response){
        $('#newUser').html(`<div class="pleaseWork"><h2>Yas, Score!</h2><p>You'll be the first one out of your friends to know the lastest news!</p><h4>You will get a confirmation email soon!</h4></div>`)
    },

        error: function(){
            console.log("asd")
        } 
    }); 

});