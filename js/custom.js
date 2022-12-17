// let countervalue = document.querySelectorAll(".num");

// let interval =500;

// countervalue.forEach((countervalue)=>{
//       let startvalue= 0;
//       let endvalue = parseInt(countervalue.getAttribute("data-val"));
//        let duration = Math.floor(interval / endvalue);
//        let counter = setInterval(function(){
//             startvalue += 1;
//             countervalue.textContent = startvalue;
//             if(startvalue==endvalue){
//                   clearInterval(counter);
//             }
//        },duration);
// });







let countervalue = document.querySelectorAll(".num")

let interval = 500;

countervalue.forEach((countervalue)=>{
      let startvalue = 0;
      let endvalue = parseFloat(countervalue.getAttribute("data-val"));
      let duration = Math.floor(interval/endvalue);
      let counter = setInterval(function(){
            startvalue +=1;
            countervalue.textContent = startvalue;
            if(startvalue==endvalue){
                  clearInterval(counter);
            }
      },duration);

});



