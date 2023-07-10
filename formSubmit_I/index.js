//i
    //click event
    const eventI = document.getElementById('elementI');
    eventI.addEventListener('click', clickEventFunction)

    function clickEventFunction(e){
        //console.log('this button is clicked', e);
        //console.log('this button is clicked', e.type);
        console.log('this button is clicked', e.target);
    }
    //
//ii
    //keydown event
    const eventII = document.getElementById('elementII');
    eventII.addEventListener('keydown', function(event){
        console.log('keydown evnt clicked', event);//press enter btn
    })
    //
//iii
    //submit event
    const myInput = document.getElementById('myInput');
    const eventIII = document.getElementById('elementIII');
    eventIII.addEventListener('submit', function(event){
        event.preventDefault();
        // console.log('submit event clicked', event)
        console.log(myInput.value);
    })
    //
//iv
    //mouseover event
    const eventIV = document.getElementById('elementIV');
    eventIV.addEventListener('mouseover', function(e){
        //console.log('mouseover event triggered', e)
    })
    //
//v
    //change event
    const eventV = document.getElementById('showChangedValue');
    eventV.addEventListener('change', function(e){
        //;console.log('change event clicked', e)
        console.log(eventV.value);
    })
    //
//vi 
    //load event
    const eventVI = document.getElementById('eventVI');
    eventVI.addEventListener('load', function(e){
        //console.log('this is load event', e)
    })