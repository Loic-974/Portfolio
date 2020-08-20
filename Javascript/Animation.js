
//############################################### Animation Texte ###########################################################

 	setTimeout(function (){
            
            var title = document.querySelector('.greenText');      
            var i=0;

            setInterval(function(){
              
                if(document.hasFocus()){

                    if(i%2==0){
                        clearInterval();
                        var j=0;          
                        var sentence = 'PASSIONNÉ PAR LE DIGITAL';
                        var Nsentence='';
                    
                        setInterval(function(){

                          //  if(document.hasFocus()){

                                if(j==0){

                                    Nsentence=sentence[j];
                                    title.innerHTML=Nsentence;
                                    j++;

                                }else if(j>0 && j<sentence.length){

                                    Nsentence= Nsentence+sentence[j];
                                    title.innerHTML=Nsentence;
                                    j++;
                                }
                           // }

                        }, 150);

                    }else{
                        clearInterval();
                    var j=0;          
                    var sentence = 'DÉVELOPPEUR WEB';
                    var Nsentence='';
                    
                        setInterval(function(){
                    

                                if(j==0){

                                    Nsentence=sentence[j];
                                    title.innerHTML=Nsentence;
                                    j++;

                                }else if(j>0 && j<sentence.length){

                                    Nsentence= Nsentence+sentence[j];
                                    title.innerHTML=Nsentence;
                                    j++;
                                }
                           // }

                        }, 150);
                    }                   
                    i++;
                }
            },6500);
	})


//####################### variables sections ########################

var home= document.querySelector('#home');
var about= document.querySelector('#about');
var skill = document.querySelector('#competence');
var folio = document.querySelector('#portfolio');
var contact = document.querySelector('#contact');
var hamburger = document.querySelector('header svg');
var path = document.querySelectorAll('header svg path');
var menu = document.querySelector('#menu');
var header = document.querySelector('header');
var ancre = document.querySelectorAll('#menu a');

var section = document.querySelectorAll('section');


//###################### ButtonDark with logo ######################//

document.querySelector('.blocRight .buttonDark').onmouseover=function(){document.querySelector('.blocRight .buttonDark img').src='./Icons/Linkedin_Hover.png';};
document.querySelector('.blocRight .buttonDark').onmouseout=function(){document.querySelector('.blocRight .buttonDark img').src='./Icons/Linkedin.png';};

document.querySelector('.blocLeft .buttonDark').onmouseover=function(){document.querySelector('.blocLeft .buttonDark img').src='./Icons/GitHub_Hover.png';};
document.querySelector('.blocLeft .buttonDark').onmouseout=function(){document.querySelector('.blocLeft .buttonDark img').src='./Icons/GitHub.png';};



//####################### Lancement animation ##############################//

function hover(){

    var path = document.querySelectorAll('header svg path');

    for(let i=0; i<path.length;i++){

        path[i].setAttribute('style','fill:#00cfeb');
       }

}

function lightHamburger(){

    for(let i=0; i<path.length;i++){

        path[i].setAttribute('style','fill:white');
       }

}

function DarkHamburger(){

    for(let i=0; i<path.length;i++){

        path[i].setAttribute('style','fill:black');

       }
}


var limitAbout=0;
var limitSkill=0;

//############################################# Animation pendant scroll ######################

window.onscroll=function(){

        // lancement anim A propos

   if(window.pageYOffset >= (about.offsetTop*0.55) && limitAbout==0) {
   
        document.querySelector('.blocLeft').classList.add('animLeft');
        document.querySelector('.blocRight').classList.add('animRight');
        limitAbout++;
   
   }

          // lancement anim Compétence

   if(window.pageYOffset >= (skill.offsetTop*0.63) && limitSkill==0) {
    
        var bloc = document.querySelectorAll('.blocImg');

            for(let i=0;i<bloc.length;i++){

                bloc[i].classList.add('animZoom');
            }

        limitSkill++;
    
    }

    //########################### Menu hamburger couleur ########################

        // changer couleur menu

        var link = document.querySelectorAll('#menu a');


  

   

   

       

        if(window.pageYOffset <= (about.offsetTop*0.95)){

         
            lightHamburger(event);   
            hamburger.onmouseover= function(){ hover(event) }
            hamburger.onmouseleave=function(){lightHamburger(event)}
            ancre[0].classList.add("active");
            ancre[1].classList.remove("active");
            ancre[2].classList.remove("active");
            ancre[3].classList.remove("active");
            ancre[4].classList.remove("active");
            menu.classList.remove('whiteBack');
            menu.classList.add('darkBack');
                
            for(let u=0; u<link.length; u++){

                link[u].style.color='#fff';
              
            }

        }


        if(window.pageYOffset >= (about.offsetTop*0.95)){

            DarkHamburger(event);
           
            menu.classList.add('whiteBack');
            menu.classList.remove('darkBack');              
            hamburger.onhover=function(){ hover(event)}
            hamburger.onmouseleave=function(){ DarkHamburger(event)}
            ancre[0].classList.remove("active");
            ancre[2].classList.remove("active");
            ancre[3].classList.remove("active");
            ancre[4].classList.remove("active");
            ancre[1].classList.add("active");


            for(let u=0; u<link.length; u++){

                link[u].style.color='#000000';
               

            }

        }


        if(window.pageYOffset >= (about.offsetTop*0.95) && window.pageYOffset >= (skill.offsetTop*0.95)){
            

         
            lightHamburger(event);   
            hamburger.onmouseover= function(){ hover(event) }
            hamburger.onmouseleave=function(){lightHamburger(event)}

            menu.classList.remove('whiteBack');
            menu.classList.add('darkBack');
    
            ancre[0].classList.remove("active");
            ancre[1].classList.remove("active");
            ancre[3].classList.remove("active");
            ancre[4].classList.remove("active");
            ancre[2].classList.add("active");


            for(let u=0; u<link.length; u++){

                link[u].style.color='#fff';
         
            }

        }

        
        if(window.pageYOffset >= (skill.offsetTop*0.95) && window.pageYOffset >= (folio.offsetTop*0.99)){

            for(let u=0; u<link.length; u++){

                link[u].style.color='#000';
                menu.classList.add('whiteBack');
                menu.classList.remove('darkBack');
                        
            }

            DarkHamburger(event);
            hamburger.onhover=function(){ hover(event)}
            hamburger.onmouseleave=function(){ DarkHamburger(event)}

            ancre[0].classList.remove("active");
            ancre[1].classList.remove("active");
            ancre[2].classList.remove("active");
            ancre[4].classList.remove("active");
            ancre[3].classList.add("active");
        }

        if(window.pageYOffset >= (contact.offsetTop*0.95) && window.pageYOffset >= (skill.offsetTop*0.99)){

     
            ancre[0].classList.remove("active");
            ancre[1].classList.remove("active");
            ancre[2].classList.remove("active");
            ancre[3].classList.remove("active");
            ancre[4].classList.add("active");

        }


}




//##################### animation menu Hamburger #####################

hamburger.onclick=function(){

    if(menu.style.opacity==0){

        menu.classList.remove('animReverseRight');
        menu.classList.add('animRight');
        menu.style.display='flex';


        setTimeout(function(){

            menu.style.opacity=1;

        },1000)

    }else{

        menu.classList.remove('animRight');
        menu.classList.add('animReverseRight');

        setTimeout(function(){

            menu.style.opacity=0;
            menu.style.display='none';

        },500)
    }
}

header.onmouseleave=function(){

    if(menu.style.opacity==1){

        menu.classList.remove('animRight');
        menu.classList.add('animReverseRight');

        setTimeout(function(){

            menu.style.opacity=0;
            menu.style.display='none';

        },1000)
    }

}

var apercu = document.querySelectorAll('.groupButtonPortfolio .View');
var popupProjet = document.querySelectorAll('.popupProjet');

for(let i=0; i<apercu.length; i++){

    apercu[i].onclick=function openPopup(){

	
        popupProjet[i].style.display='flex';
        
    }


}







