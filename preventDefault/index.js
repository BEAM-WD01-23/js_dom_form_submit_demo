//i
    //form submit
        const myForm = document.getElementById('formSubmit');
        myForm.addEventListener('submit', function(event){
            event.preventDefault();
            const getPetsName = document.getElementById('petsName').value;
            const showPetsName = document.getElementById('showPets');
            //console.log(showPetsName);
            showPetsName.innerHTML += getPetsName + ' is my favorite pet!';
            // 
            document.getElementById('petsName').value = '';
        })
        //
//ii
    //event on radio button ...
        const radioButton = document.getElementById('radioBtn');
        radioButton.addEventListener('click', function(){
            document.body.style.backgroundColor = radioButton.value;
        })