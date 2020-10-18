howToButton = document.getElementById('military');

function toggle() {
    let newDiv = $('<div>');
    let p =$('<p>').text("To read military time fast, just add by 12 once you hit 1PM. e.i 1PM + 12 = 13:00")
    newDiv.append(p)
    var appendIt = $('#text').html(newDiv);
    if(document.getElementById('text').style.display=='none') 
    {document.getElementById('text').style.display=''}
    else{document.getElementById('text').style.display='none'}
}


//Get the time and date from Momentjs //

function getCurrentTimeColors() {
    let currentTime = moment().format("HH");
    console.log(currentTime);
    const hours = $('.hourDisplay');
    //Make a for loops and iterate over the current hour //
    for (var i = 8; i < 21; i++) {
        if (i < currentTime) {
            hours.addClass("pastTime");
        } else if (i === currentTime) {
            hours.addClass("presentTime");
            } else {
            hours.addClass("futureTime");
            }
        }
    }
getCurrentTimeColors();


//Writing a function to log the user input in the text-area to the local storage. //
var saveBtn = $('.saveButton');
saveBtn.on('click', function () {
   //grabbing most text content from the textarea and setting it to local storage //
   
    var idForTime = $(this).attr('id');
    var actualEvent = $(this).parent().children('textarea').val(); 
    console.log(idForTime);
    console.log(actualEvent);
    var saveForm = JSON.parse(localStorage.getItem("userData")) || [];
    var userData = {
        time: idForTime,
        note: actualEvent
    }
    saveForm.push(userData);
    localStorage.setItem("userData",JSON.stringify(saveForm));
    
});
var saveForm = JSON.parse(localStorage.getItem("userData"));
for (var i = 0; i < saveForm.length; i++){
    var time = "description-"+saveForm[i].time;
    console.log("Current text area id: "+time);
    $("#"+time).val(saveForm[i].note);
    }
