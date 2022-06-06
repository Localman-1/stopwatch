var [milliseconds,seconds,minutes,hour] = [00,00,00,00];
let timerRefHour = document.querySelector('#time_hour');
let timerRefMinutes = document.querySelector('#time_minutes');
let timerRefSeconds = document.querySelector('#time_seconds');
let timerRefMilliseconds = document.querySelector('#time_milliseconds');
var minuteSelect = document.querySelector('#minute_select')
let hourSelect = document.querySelector('#hour_select')
let secondsSelect = document.querySelector('#seconds_select')
let welcome = document.querySelector('#welcome')
let int;
let count;
// let secondValue;
// const promptName = prompt ("what your name");
// const callBack ="Welcome " + promptName
// welcome.innerHTML = `${callBack}  `;

document.getElementById('pause_button').setAttribute('style', 'display:none')
document.getElementById('pause_button').addEventListener('click',()=>{
    document.getElementById('start_button').innerHTML = ('Resume')
    document.getElementById('start_button').setAttribute('style', 'display: inline')
    clearInterval(int)
 });
document.getElementById('start_button').addEventListener('click',()=>{
    clearInterval(int);
    int = setInterval(displayTimer, 10)
    document.getElementById('start_button').setAttribute('style', 'display:none')
    document.getElementById('pause_button').setAttribute('style', 'display:inline')
    
});
document.getElementById('reset_button').addEventListener('click',()=>{
    document.getElementById('start_button').innerHTML = ('Start')
    document.getElementById('start_button').setAttribute('Style', 'display : inline');
    document.getElementById('pause_button').setAttribute('style', 'display:none')
    clearInterval(int);
    clearInterval(count);
    [milliseconds,seconds,minutes,hour] = [00,00,00,00];
    timerRefHour.innerHTML = `${hour + " Hr"}`;
    timerRefMinutes.innerHTML = `${minutes + " Mins"}  `;
    timerRefSeconds.innerHTML = `${seconds + " Sec"} ` ;
    timerRefMilliseconds.innerHTML = `${milliseconds + "Ms"}`;
    
});
function displayTimer(){
    milliseconds = milliseconds +1;
    if (milliseconds==100){
        milliseconds = 0;
        if (milliseconds % 1000 == 0){
            seconds++
        }
        if (seconds == 60){
            seconds= 0;
            minutes++;
            if (minutes == 60){
                minutes= 0;
                hour ++;
            
                
            }
            
        }
    }
    console.log (milliseconds[0] + milliseconds[1])
    // console.log (hour)
    
    

    function AssignMs(){
        if (milliseconds < 10){
            return "00"
        }
        else if (milliseconds > 100){
            return "0" + milliseconds
        }
        else return milliseconds
    }
    

    // var h = 0
    // var m = 0
    // var s = 0
    var h = hour < 10 ? "00" + hour : hour;
    var m =minutes <10 ? "00" +minutes:minutes
    var s = seconds < 10 ? "00" + seconds : seconds;
    var ms = AssignMs();

    timerRefHour.innerHTML = `${hour + " Hr"}`;
    timerRefMinutes.innerHTML = `${minutes + " Mins"}  `;
    timerRefSeconds.innerHTML = `${seconds + " Sec"} ` ;
    timerRefMilliseconds.innerHTML = `${milliseconds + "Ms"}`;

}
minuteSelect.innerHTML = "<option value='0'>Select Minute</option>";

for(let i=01; i<=60;i++ ){

    minuteSelect.innerHTML += `<option value = "${i}">${i}</option>`
    
}

        secondsSelect.innerHTML = "<option value= '0'>Select_seconds</option>";
for(let k=01; k<=60;k++ ){
        secondsSelect.innerHTML +=`<option value="${k}">${k}</option>`
    }
hourSelect.innerHTML = "<option value= '0'>Select Hour</option>";
for (let j = 01; j<=24; j++){
    hourSelect.innerHTML += `<option value = "${j}">${j}</option>`
}
let selectSec= document.getElementById('seconds_select')
let selectMin = document.getElementById('minute_select')
let selectHr = document.getElementById('hour_select')
 

 


document.getElementById('close_countdown').addEventListener('click',()=>{
    document.getElementById('countdown_div').setAttribute('style', 'display:none')
})
document.getElementById('countdown_div').setAttribute('style', 'display:none')
document.getElementById('countdown_button').addEventListener('click', ()=>{
    document.getElementById('countdown_div').setAttribute('style', 'display:block')
    clearInterval(int);
    clearInterval(count);
    [milliseconds,seconds,minutes,hour] = [00,00,00,00];
    timerRefHour.innerHTML = `${hour + " Hr"}`;
    timerRefMinutes.innerHTML = `${minutes + " Mins"}  `;
    timerRefSeconds.innerHTML = `${seconds + " Sec"} ` ;
    timerRefMilliseconds.innerHTML = `${milliseconds + "Ms"}`;
})
document.getElementById('countdown_start_button').addEventListener('click', ()=>{
    document.getElementById('countdown_div').setAttribute('style', 'display:none')
    document.getElementById('start_button').setAttribute('style', 'display:none')
    document.getElementById('pause_button').setAttribute('style', 'display:none')
    document.getElementById('countdown_button').setAttribute('style', 'display:none')
    document.getElementById('reset_button').innerHTML = 'Stop'
    clearInterval(count)
    count = setInterval(displayCountdown, 10);
} )
document.getElementById('reset_button').addEventListener('click',()=>{
    document.getElementById('countdown_button').setAttribute('style', 'display:inline')
})
function displayCountdown(){
    milliseconds = milliseconds +1;
    if (milliseconds==100){
        milliseconds = 0;
        if (milliseconds % 100 == 0){
            selectSec.value--

        }
        if(selectMin.value > 0 && selectSec.value ==0){
            selectSec.value= 60
            selectMin.value--
            timerRefSeconds.innerHTML = `${0}`
        }
    if (selectHr.value > 0 && selectMin.value == 0 && selectSec.value == 0 ){
            selectMin.value= 59
            selectSec.value = 59
            selectHr.value --

            
            timerRefMinutes.innerHTML= `${0}`
            timerRefHour.innerHTML = `${0}`

    }
        if (selectHr.value >0 && selectSec.value== 59 && selectMin.value == 60){
            selectHr.value --
        }

       
        
        
    }
   
    
    console.log (milliseconds[0] + milliseconds[1])
    // console.log (hour)
    
    

    function AssignMs(){
        if (milliseconds < 10){
            return "00"
        }
        else if (milliseconds > 100){
            return "0" + milliseconds
        }
        else return milliseconds
    }
    if (selectHr.value ==0 && selectMin.value ==0 && selectSec.value == 0){
        clearInterval(count)
    timerRefHour.innerHTML='00';
    timerRefMinutes.innerHTML='00';
    timerRefSeconds.innerHTML='00';
    document.getElementById('pause_button').setAttribute('style', 'display:inline')
    document.getElementById('countdown_start_button').setAttribute('style', 'visibility:hidden')
    
    
        
    }
    
    

    // var h = 0
    // var m = 0
    // var s = 0
    var h = hour < 10 ? "00" + selectHr.value : selectHr.value;
    var m =minutes <10 ? "00" +selectMin.value:selectMin.value
    var s = seconds < 10 ? "00" + selectSec.value : selectSec.value;
    var ms = AssignMs();

    timerRefHour.innerHTML = `${selectHr.value + " Hr"}`;
    timerRefMinutes.innerHTML = `${selectMin.value + " Mins"}  `;
    timerRefSeconds.innerHTML = `${selectSec.value + " Sec"} ` ;
    timerRefMilliseconds.innerHTML = `${milliseconds }`;

}

if (selectHr.value > 0 || selectMin.value > 0 || selectSec.value > 0){
    document.getElementById('countdown_start_button').setAttribute('style','border :none')
}
