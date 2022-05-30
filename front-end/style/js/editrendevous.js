
window.addEventListener('load', checkUser);
function checkUser() {
    if (!localStorage.getItem('ref')) {
        window.location.href = './login.html';
    }
}

function getIdFromUrl() {
    var currentUrl = window.location.href;
    var urlParts = currentUrl.split("?");
    var id = urlParts[1];
    return id.slice(id.indexOf('=') + 1);
}

document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const id = getIdFromUrl();

    editorder(date, time, id);
    alert('ta reservation a ete modifiee');
})

function editorder(date, time, id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "day": date,
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