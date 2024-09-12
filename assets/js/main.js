
function relogio(){
  function getTimerFromSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }
  
  const relogio = document.querySelector('.relogio');
  
  let seconds = 0;
  let timer;
  
  function startTimer() {
    timer = setInterval(function() {
      seconds++;
      relogio.innerHTML = getTimerFromSeconds(seconds);
    }, 1000);
  };
  
  
  document.addEventListener('click', function (e) {
    const elemento = e.target;
  
    if (elemento.classList.contains('iniciar')){
      relogio.classList.remove('pausado');
      clearInterval(timer);
      startTimer();
    }
  
    if (elemento.classList.contains('pausar')){
      relogio.classList.add('pausado');
      clearInterval(timer);
    }
  
    if (elemento.classList.contains('zerar')){
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      seconds = 0;
    }
  
  });
}

relogio();