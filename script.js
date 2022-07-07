function generateQR(){
    document.querySelector("#qr-image").style.display="block";
    let QRtext = document.getElementById("QR-text").value;
    if(QRtext.trim().length=0){
        document.querySelector("#qr-image .error").innerHTML="Please enter text";
        document.querySelector("#img").style.display="none";
        document.querySelector("#img").style.display="block";
    }else{
        document.querySelector("#qr-image .error").innerHTML="";
        document.querySelector("#img").src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" + QRtext ;
    }
}       

function scrollToTop() {
    window.scrollTo(0,0);
}


function abrirAlerta(){
    swal({
        title: "Você tem certeza?",
        text: "Você tem certeza que deseja excluir?",
        dangerMode: true,
      })
      .then(willDelete => {
        if (willDelete) {
          swal("Deletado!", "O seu arquivo foi deletado da conta!");
        }
      });
}

function abrirAlerta2(){
    swal("Escreva algo:", {
        content: "input",
      })
      .then((value) => {
        swal(`Você escreveu: ${value}`);
      });

}

const getHours1 = () => {
  const clock = document.getElementsByClassName('clock')[0]
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours
  const minute = minutes < 10 ? `0${minutes}` : minutes
  const second = seconds < 10 ? `0${seconds}` : seconds
  clock.innerHTML = `${hour}`
}

function getHoursHoras(){
  setInterval(() => {
    getHours1()
  }, 1000)
}

const getHours2 = () => {
  const clock = document.getElementsByClassName('clock')[0]
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours
  const minute = minutes < 10 ? `0${minutes}` : minutes
  const second = seconds < 10 ? `0${seconds}` : seconds
  clock.innerHTML = `${minute}`
}

function getHoursMinutos(){
  setInterval(() => {
    getHours2()
  }, 1000)
}

const getHours3 = () => {
  const clock = document.getElementsByClassName('clock')[0]
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours
  const minute = minutes < 10 ? `0${minutes}` : minutes
  const second = seconds < 10 ? `0${seconds}` : seconds
  clock.innerHTML = `${second}`
}

function getHoursSegundos(){
  setInterval(() => {
    getHours3()
  }, 1000)
}

