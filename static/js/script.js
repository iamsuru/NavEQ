
function colorChange()
{
    var currentPosition = document.getElementById("current").value;
    var destinationPosition = document.getElementById("destination").value;
    if(currentPosition == "")
    {
        alert("Please Select Nearest Room Number.")
        return false;
       
    }
    else if(destinationPosition == "")
    {
        alert("Please Enter Your Destination.")
        return false;
        
    }
    else if(currentPosition==destinationPosition)
    {
        alert("Current and Destination position cannot be same.")
    }
    else
    {
    localStorage.setItem("current", currentPosition);
    localStorage.setItem("destination", destinationPosition);
    

    var gfloor=["Room G01","Room G02","Room G03","Room G04","Room G05","WaterFilter","Room G06","Girls Washroom","Room G07","Room G08","Room G09","Room G10","Room G11","Room G12","Room G13","HOD ME","Room G15","Room G18","Boys Washroom","Room G19","Room G20","Room G21","Room G22","Room G23","Room G24","Second College","Auditorium","Fountain","HOD CE","Room G25","Room G26","Room G27","Room G28","Room G29","Girls Washroom","HOD IT","Room G30","Room G31","Room G32","Room G33","Room G34","Room G35","WaterFilter","Boys Washroom","Room G36","Room G37","Room G38","Room G39","Room G40","Room G41","Room G42"]
    if (gfloor.includes(currentPosition))
        {
            window.location.href = 'groundFloorMap';
        }
        else{
            window.location.href = 'firstFloorMap';
        }
    }
   
}
// for calling toMap to give input by touch
function toMap(){
    window.location.href = 'toMap'; 
}
//to call maps
function toGFM(){
    window.location.href='groundFloorTouchMap';
}
function toFFM(){
    window.location.href='firstFloorTouchMap';
}
function toSFM(){
    window.location.href='secondFloorMap';
}
