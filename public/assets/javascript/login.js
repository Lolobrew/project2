var userArr = ["Drew", "Jeff", "Jalil", "Ricky"];
var passArr = ["Drew", "Jeff", "Jalil", "Ricky"];
console.log(window.location.href);

$('#logInBtn').on('click', function(event){
    event.preventDefault();

        //change to var userName = $('#userName').val().trim();
    var name = $('#userName').val().trim();
    var password = $('#passWord').val().trim();
    var id = ""; //delete

    switch(name){
        case "Drew":
            id = 1
            break;
        case "Jalil":
            id = 2
            break;
        case "Jeff":
            id = 3
            break;
        case "Ricky":
            id = 4
            break;
    }

    var logInPage = function(){
        window.location.assign("/users/" + id);//change to /users/ + userName
    }

    console.log(name);
    //delete
    for (i = 0; i < userArr.length; i++){
        if(name === userArr[i] && password === passArr[i]){
            logInPage();
        }
    }

    
});
