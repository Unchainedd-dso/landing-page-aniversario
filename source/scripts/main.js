document.addEventListener('DOMContentLoaded', function(){
    AOS.init();

    const event = new Date("Dec 04, 2025 08:00:00");
    const eventTimeStamp = event.getTime();

    // segundo * minuto * hora * dia
    const getDays = (1000 * 60 * 60 * 24);
    const getHours = (1000 * 60 * 60);
    const getMinutes = (1000 * 60);

    const countTime = setInterval(function(){
        const today = new Date();
        const todayTimeStamp = today.getTime();
        const missingTime = eventTimeStamp - todayTimeStamp;
        
        const days = Math.floor(missingTime / getDays)
        const hours = Math.floor((missingTime % getDays) / getHours);
        const minutes = Math.floor((missingTime % getHours) / getMinutes);
        const seconds = Math.floor((missingTime % getMinutes) / 1000);
        
        const time = `${days}d ${hours}h ${minutes}min ${seconds}s`
        const text = document.getElementById('time');
        text.innerHTML = time;

        if (missingTime < 0){
            clearInterval(countTime);
            text.innerHTML = 'Evento expirado';
        }

    },1000);
})

