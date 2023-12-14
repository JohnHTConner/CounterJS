// set intial count number
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        // changes colour of count if above or below 0
        if(count < 0 ){
         value.style.color = 'red';
        }
        if (count > 0){
            value.style.color = 'green';
    }
        if (count === 0){
            value.style.color = 'white';
        }


        //displays the count being decreased/increased/reset
        value.textContent = count;

    })
});
