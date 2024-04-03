// toggle icon navbar

let menuIcon =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


// scroll sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a'); 

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop -100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top<offset + height){
            // active navbar link 
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }); 
            // active section for animation on scroll 
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this 
        else{
            sec.classList.remove('show-animate');
        }
    });
    // sticky header
    let header= document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >100);

    // remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    const serviceID="service_cv5qes9";
const templateID="template_yu0svah";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message sent Successfully");
    })
    .catch((err)=> console.log(err));
}

