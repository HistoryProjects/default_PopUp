let start = document.querySelector('.start-btn')
let bg = document.querySelector('.modal-container')
let close = document.querySelector('.close')
let modal = document.querySelector('.form-wrapp')
const submitButton = document.querySelector('.reg-btn');

start.addEventListener('click', ()=>{
    bg.style.display = 'block';
    modal.style.display = 'block';
})

close.addEventListener('click', ()=>{
    bg.style.display = "none";
    modal.style.display = "none";
})

document.addEventListener('mouseup', (e)=> {
    if (!modal.contains(e.target)) {
        modal.style.display = 'none';
        bg.style.display = "none";
    }
});


const displayData = ()=>{
    const data = localStorage.getItem('userData')
    
    if(data){
        let display = document.getElementById('display_data')
    
        const userData = JSON.parse(data)
        display.innerHTML = 
        `<p>Введенная информация<br><br>
            name: ${userData.Name}<br>
            last name: ${userData.Last_name}<br>
            email: ${userData.Email}<br>
            phone: ${userData.Phone}<br>
        </p>`
    }
}

const clear = () =>{
    let inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.value !== '') {
            input.value = '';
        }
    });
}

submitButton.addEventListener('click', ()=>{
    console.log('click')
    let in_name = document.getElementById('name').value,
        in_lastName = document.getElementById('lastName').value,
        in_email = document.getElementById('email').value,
        in_phone = document.getElementById('phone').value;
   
    if(in_name === '' || in_lastName === '' ||
       in_email === '' || in_phone === ''
       ) {

        alert('Заполните все поля')
    }else{
        console.log(in_name)
        const user = {
            Name: in_name,
            Last_name: in_lastName,
            Email: in_email,
            Phone: in_phone
        }

        localStorage.setItem('userData', JSON.stringify(user));
        displayData();
        clear();
    }
}) 

