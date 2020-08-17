function handleClick() {
    randomNamePicker()
}

function randomNamePicker() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        details(data);
    })
   }
   randomNamePicker()
  


function details(data) {
    const profilePic = data.results[0].picture.large;
        document.getElementById('fImage').setAttribute('src', profilePic);


        const name = data.results[0].name;
        const fullName = `${name.title} ${name.first} khan`;
        document.getElementById('fakeName').innerText = fullName;
 
        const age = data.results[0].dob.age;
        document.getElementById('fakeAge').innerText = age;

        const gender = data.results[0].gender;
        document.getElementById('gender').innerText = gender;
       
        const birthDate = data.results[0].dob.date;
        document.getElementById('birth').innerText = birthDate.slice(0, 10);

        const state = data.results[0].location.state;
        document.getElementById('state').innerText = state;

        const postCode = data.results[0].location.postcode;
        document.getElementById('postCode').innerText = postCode;

        
        const city = data.results[0].location.city;
        document.getElementById('city').innerText = city;

        
        const country = data.results[0].location.country;
        document.getElementById('country').innerText = country;

        const phone = data.results[0].phone;
        document.getElementById('phone').innerText = phone;

        
        const email = data.results[0].email;
        document.getElementById('email').innerText = email;
}


        