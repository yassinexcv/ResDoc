
window.addEventListener('load', checkUser);

function checkUser() {
  if (!localStorage.getItem('ref')) {
    window.location.href = './login.html';
  }
}


document.getElementById('submit').addEventListener('click',function(e){
  e.preventDefault();
    const date = document.getElementById('date').value;
    if(date !== ""){
      const time = document.getElementById('time').value;
      const ref = JSON.parse(localStorage.getItem('ref')).reference;
      makeOrder(ref,date,time);
    }else{
      alert("la date est obligatoire");
    }
})

function makeOrder(ref,day,time) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var body = JSON.stringify({
    "reference": ref,
    "day": day,
    "order_": time
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: body,
    redirect: 'follow'
  };

  fetch("http://localhost/ResDoc/Cabinet/addRendezVous", requestOptions)
    .then(response => response.text())
    .then(result => {
     
      alert(result);
              
    })
    .catch(error => console.log('error', error));
}
