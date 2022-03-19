let tip_current = 0, tip_total = 0, tip_old = 0;
let total_some = "0.00";

setInterval(function(){ 
    const input = document.querySelector('#bill').value;
    const people = document.querySelector('#people-input').value;
    const custom = document.querySelector('#tip-input').value;
    const total = document.querySelector('#total');
    const tip = document.querySelector('#title');
    
    if (custom >= 1) {
        tip_current = custom;
    }

    if (tip_total == 0) {
        tip_total = "0.00";
    }

    document.querySelector(".tip-box-5").addEventListener('click',function test() {
        tip_current = 5;
    });
    document.querySelector(".tip-box-10").addEventListener('click',function() {
        tip_current = 10;
    });
    document.querySelector(".tip-box-15").addEventListener('click',function() {
        tip_current = 15;
    });
    document.querySelector(".tip-box-25").addEventListener('click',function() {
        tip_current = 25;
    });
    document.querySelector(".tip-box-50").addEventListener('click',function() {
        tip_current = 50;
    });

    if (tip_current != tip_old) {
        calculate();
    }

    function calculate() {
            if (people >= 1) {
                if (input >= 1) {
                    tip_old = tip_current;
                    tip_total = ((tip_current / 100) * input) / people;
                } 
            }
    }

    function reset() {
        tip_current = 0;
        input = 0;
        tip_old = 0;
        tip_total = 0;
    }

    var btn = document.querySelector('#reset');

    if (input > 1) {
        if (input > 1) {
            total_some = input;
            btn.style.opacity = 1;
        } 
        if (tip_total >= 1) {
            if (people >= 1) {
                total_some = tip_total + input / people;
                btn.style.opacity = 1;
            } 
        } if (input < 0) {
            total_some = "0.00";
        }
    }

    total.innerHTML = "$" + total_some;  
    tip.innerHTML = "$" + tip_total;

}, 1000);


