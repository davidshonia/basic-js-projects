let count = 0;


//selet value and button
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(eachButton){
    let color 
    eachButton.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count=0;
        }
        return value.textContent = count;
    })
})