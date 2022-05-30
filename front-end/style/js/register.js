const form = document.querySelector('.myform');

form.addEventListener('submit',function(e){
  e.preventDefault();

  const nom = document.querySelector('.nom').value;
  const prenom = document.querySelector('.Prenom').value;
  const naissance = document.querySelector('.Naissance').value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "nom": nom,
    "datenaisance": naissance,
    "prenom": prenom
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost/ResDoc/User/register", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.log('error', error));
})
