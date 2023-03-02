let count = 0;

const result = document.getElementById("result");

const btns = document.querySelectorAll(".btn");
//console.log(btns); list of all buttons
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const cls = e.currentTarget.classList;
        // console.log(cls);
        if(cls.contains('decrease')){
            count--;
        }
        else if(cls.contains('reset')){
            count = 0;
        }
        else{
            count +=1;
        }
        result.innerHTML = count;
    })
})