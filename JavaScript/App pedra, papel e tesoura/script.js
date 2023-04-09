var el = document.querySelectorAll('.icon')
    enemyOptions = document.querySelectorAll('.enemy__options div'),
    playerOpt = "",
    enemyOpt = "";
function resetOpacity(){
    for(let i=0; i<el.length; i++){
        el[i].childNodes[0].style.opacity = 0.5;
    }
}
function resetEnemy(){
    for(let i=0; i<el.length; i++){ 
        enemyOptions[i].childNodes[0].style.opacity = 0.5;
    }
}
function playEnemy(){
    let random = Math.floor(Math.random()*3);
    resetEnemy();
    for(var i=0; i<enemyOptions.length; i++){
        if(i == random){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[1].childNodes[0].getAttribute('opt');
        }
    }
    console.log('enemy',enemyOpt);
}
function result(){
    if(playerOpt == "paper"){
        if(enemyOpt == "paper"){
            alert('empate');
        } else if(enemyOpt == "rock"){
            alert('vitoria');
        } else if(enemyOpt == "scisor"){
            alert('derrota');
        }
    }else if(playerOpt == "rock"){
        if(enemyOpt == "paper"){
            alert('derrota');
        } else if(enemyOpt == "rock"){
            alert('empate');
        } else if(enemyOpt == "scisor"){
            alert('vitoria');
        }
    }else if(playerOpt == "scisor"){
        if(enemyOpt == "paper"){
            alert('vitoria');
        } else if(enemyOpt == "rock"){
            alert('derrota');
        } else if(enemyOpt == "scisor"){
            alert('empate');
        }
    }
}
for(let i=0; i<el.length; i++){
    el[i].addEventListener('click',function(t){
        resetOpacity();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        console.log('playerOpt',playerOpt);
        playEnemy();
        result();
    });
};