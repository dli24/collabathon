const URL = `/api/users/`


    $.ajax({
        method: 'GET',
        url: URL,
        success: function(response){
            console.log(response)
            console.log('hi')
            response.forEach(responses =>{
        $('.dashBoard').append(`<ul><li><p>Name: ${responses.first} ${responses.last}, Email: ${responses.email}</p></li></ul>`)
            })    
    },

        error: function(){
            console.log("asd")
        } 
    }); 
