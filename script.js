var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// media queries for nav bar clicks

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

const sr = ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal('#header',{delay:100, origin:'top'});
sr.reveal('#services , #portfolio ',{delay:100, origin:'top'});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "madhuweb03@gmail.com",
        Password : "VeManCha#24102022",
        To : 'madhu071436@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Service From web",
        Body : "Name: "+ document.getElementById("name").value
        +"<br> Email: " + document.getElementById("email").value
        +"<br> Phone: " + document.getElementById("phone").value
        +"<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}