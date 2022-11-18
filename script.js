let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};

//Email Js
function validate () {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else{
            sendmail (name.value, email.value, msg.value);
            success ();
        }
    })
}
validate(); 


function sendmail(name, email, msg){
    emailjs.send("service_hmgks1h","template_56ag3up",{
        from_name: email,
        to_name: name,
        message: msg,
        });        
}


//Error message from Sweet Alert
function emptyerror() {
    swal({
        title: "Oh No....!",
        text: "Fields  cannot be empty!",
        icon: "error",
      });
}

//Success message from Sweet Alert
function success() {
    swal({
        title:"Email sent successfully!",
        text: "Will reply within 24 hours of receipt.",
        icon: "success",
      });
}

//Header background change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
   header.classList.toggle('header-active', window.scrollY > 0)
})

//Scroll Top 
let scrollTop = document.querySelector('scroll-top');

window.addEventListener('scroll', () => {
   scrollTop.classList.toggle('scroll-active', window.scrollY >= 400)
})