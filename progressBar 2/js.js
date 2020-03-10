


function progress1_move(x,y){
  var progress_1 = document.getElementById('progress');
  var progress_2 = document.getElementById('progress-2');
  var progress_count1 = document.getElementById( "count-1");
  var progress_count2 = document.getElementById( "count-2");
  var id = setInterval(frame, 10);
  function frame() {
    if ( progress_1.style.width == (100 + '%') ){
                   clearInterval(id);
    } 
    else {
      progress_1.style.width = (x * 10) + '%';
      progress_2.style.width = (y * 10) + '%';
      progress_count1.innerHTML = "13" ;
      progress_count2.innerHTML = y ;
         }
       }
}
progress1_move(10,2);



