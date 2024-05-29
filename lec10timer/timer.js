// let min =document.getElementById("entry").value 
// let sec
// let hour= if(min>60){
//     h=1
// }



// let id=setInterval(()=>{
//     console.log(`${min}:${sec}`);
    
//     sec=sec-1
//     if (min==0&& sec==0){
//         clearInterval(id)
//     }
//     if (sec==0){
//         min=min-1
//         sec=3
//     }
// },1000)


// document.getElementById('timerForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const minutes = parseInt(document.getElementById('minutes').value);
//     const countdownDisplay = document.getElementById('countdown');
//     const targetTime = new Date().getTime() + minutes * 60000;

//     function updateCountdown() {
//         const now = new Date().getTime();
//         const distance = targetTime - now;

//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((distance % (1000 * 60)) / 1000);

//         countdownDisplay.innerHTML = `${hours}h ${mins}m ${secs}s`;

//         if (distance < 0) {
//             clearInterval(interval);
//             countdownDisplay.innerHTML = "EXPIRED";
//         }
//     }

//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Initial call to display the countdown immediately
// });
