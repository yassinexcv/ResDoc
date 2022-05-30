
window.addEventListener('load', checkUser);
function checkUser() {
  if (!localStorage.getItem('ref')) {
    window.location.href = './login.html';
  }
}

let r = JSON.parse(localStorage.getItem('ref'))
// console.log(r);
document.getElementById('refe').innerHTML = r.reference;
document.getElementById("nom").innerHTML = r.nom;



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "reference": r.reference
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost/ResDoc/Cabinet/getOneRendezVous", requestOptions)
  .then(response => response.json())
  .then(result =>
    {
    let html='';
    result.forEach(res => {
        if(res.order_ == 1){
            res.order_ = '9h-10h';
        }else if(res.order_ == 2){
            res.order_ = '10h-11h';
        }else if(res.order_ == 3){
            res.order_ = '11h-12h';
        }else if(res.order_ == 4){
            res.order_ = '14h-15h';
        }else if(res.order_ == 5){
            res.order_ = '15h-16h';
        }else if(res.order_ == 6){
            res.order_ = '16h-17h';
        }
        html+=`
        <tr>
            <th scope="row">${res.id}</th>
            <td>${res.day}</td>
            <td>${res.order_}</td>
            <td class="d-flex flex-row ">
                                    <a href="editreservation.html?id=${res.id}" class="btn btn-primary mx-1 "><i class="fa fa-edit"></i></a>
                                    <!-- <a href="deletereservation.html?id=${res.id}" class="btn btn-danger mx-1">Delete</a> -->
                                    <form class="mx-1" >
                                    <!-- <input type="hidden" name="delete" value="${res.id}" >-->
                                        <button onclick="deleterdv(${res.id})" class="btn  btn-danger"><i class="fa fa-trash"></i></button>
                                    </form>  
                                </td>
        </tr>
    `
    });
    document.getElementById('tbody').innerHTML = html;
})
  .catch(error => console.log('error', error));

  function deleterdv($id){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": $id
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost/ResDoc/Cabinet/deleteRendezVous", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}
function update(){
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "reference": ref,
  "day": day,
  "order_": time,
  "id": id
});

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch("http://localhost/ResDoc/Cabinet/updateRendezVous", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}