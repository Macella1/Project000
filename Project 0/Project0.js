// Stetting Countdown Date by adding seconds to the current date
// let Countdowndate = new Date("May 17 2024").setSeconds(new Date().getSeconds()+100000)
// console.log(Countdowndate)
// let timerInterval
// const daysElem = document.querySelector('#Days')
// const hoursElem = document.querySelector('#Hours')
// const minutesElem = document.querySelector('#Minutes')
// const secondsElem = document.querySelector('#Seconds')
// TimerRunningContent = document.querySelector('#Timer-running')
// const startCountdown = () => {
// 	const now = new Date().getTime()
// 	const countdown = new Date(Countdowndate).getTime()

// 	const difference = (countdown - now) / 1000
//     let days = Math.floor( difference / (60*60*24))
//     console.log(days)
//     let hours = Math.floor(difference % (60*60*24) / (60*60))
//     console.log(hours)
//     let minutes = Math.floor(difference % (60*60) / (60))
//     console.log(minutes)
//     let seconds = Math.floor(difference % 60)
//     console.log(seconds)

  
    
// }
    
// window.addEventListener('load', () => {
//     startCountdown()
//     timerInterval = setInterval (startCountdown, 1000)
// } )


// const timercontainer = () => {
//      const countDate = new Date("May 28, 2024 00:00:00");
//     console.log(countDate) 
// }
// let Countdowndate = new Date("May 17 2024").getTime() + 100000 * 1000;
// console.log(Countdowndate);

// let timerInterval;
// const daysElem = document.querySelector('#Days');
// const hoursElem = document.querySelector('#Hours');
// const minutesElem = document.querySelector('#Minutes');
// const secondsElem = document.querySelector('#Seconds');
// const TimerRunningContent = document.querySelector('#Timer-running');

// const updateCountdown = () => {
//     const now = new Date().getTime();
//     const difference = (Countdowndate - now) / 1000;

//     if (difference < 0) {
//         clearInterval(timerInterval);
//         TimerRunningContent.textContent = 'Countdown expired';
//         return;
//     }

//     const days = Math.floor(difference / (60 * 60 * 24));
//     const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
//     const minutes = Math.floor((difference % (60 * 60)) / 60);
//     const seconds = Math.floor(difference % 60);

//     daysElem.textContent = days;
//     hoursElem.textContent = hours;
//     minutesElem.textContent = minutes;
//     secondsElem.textContent = seconds;
// };

// window.addEventListener('load', () => {
//     updateCountdown();
//     timerInterval = setInterval(updateCountdown, 1000);
// });

let Countdowndate = new Date("February 27 2024").getTime() + 100000 * 1000;
        let timerInterval;
        const daysElem = document.querySelector('#Days');
        const hoursElem = document.querySelector('#Hours');
        const minutesElem = document.querySelector('#Minutes');
        const secondsElem = document.querySelector('#Seconds');
        const TimerRunningContent = document.querySelector('#Timer-running');

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = (Countdowndate - now) / 1000;

            if (difference < 0) {
                clearInterval(timerInterval);
                countdowndate = new Date().getTime() + originalCountdownDuration;
                updateCountdown(originalCountdownDuration);
                startCountdown();
                return;
            }

            const days = Math.floor(difference / (60 * 60 * 24));
            const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((difference % (60 * 60)) / 60);
            const seconds = Math.floor(difference % 60);

            daysElem.textContent = days;
            hoursElem.textContent = hours;
            minutesElem.textContent = minutes;
            secondsElem.textContent = seconds;
        };

        window.addEventListener('load', () => {
            updateCountdown();
            timerInterval = setInterval(updateCountdown, 1000);
        });