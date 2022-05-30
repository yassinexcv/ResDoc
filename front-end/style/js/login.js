var ref = document.getElementById("form3Example2cg").value;
                

const form = document.querySelector(".maform");
form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    const reference = document.querySelector(".reference").value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "reference": reference
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost/ResDoc/User/login", requestOptions)
    .then(response => response.json())
    .then(res => {
      if(!res.error){
        localStorage.setItem('ref', JSON.stringify(res[0]));
        window.location.href = "./Rendevous.html";
      }
      else {
        window.location.href = "./login.html";
        alert("votre reference est incorrecte");
      }
    })
    .catch(error => console.log('error', error));
});

let name


