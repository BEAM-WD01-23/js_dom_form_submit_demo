//
    const myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log('submit clicked');
        const myId = document.getElementById('myId');
        const myName = document.getElementById('myName');
        const myProfession = document.getElementById('myProfession');
        const myComment = document.getElementById('myComment');
        //console.log(myId.value, myName.value, myProfession.value, myComment.value);
        const messageField = document.getElementById('message_field');
        messageField.innerHTML += myId.value;
        messageField.innerHTML += myName.value;
        messageField.innerHTML += myProfession.value;
        messageField.innerHTML += myComment.value;
        //
        //clear the input-fields after data submission
        document.getElementById('myId').value = '';
        document.getElementById('myName').value = '';
        document.getElementById('myProfession').value = '';
        document.getElementById('myComment').value = '';
    })