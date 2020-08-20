
var sendButton= document.querySelector('#form #send');
var mail = document.querySelector('#Email');
var nom = document.querySelector('#Nom');
var msg =  document.querySelector('#message');
var reg =  /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}\.+[a-z0-9.-]{2,}$/i;

mail.onblur=function(){

    if(reg.test(mail.value)){

    mail.style.border='1.5px solid';
    mail.style.borderColor='#01e432';
    

    }else{

        mail.style.border='1.5px solid';
        mail.style.borderColor='red';

    }
}

nom.onblur=checkInput;
msg.onblur=checkInput;

function checkInput(){

    if(this.value== ''){

        this.style.border='1.5px solid';
        this.style.borderColor='red';

    }else{

        this.style.border='1.5px solid';
        this.style.borderColor='#01e432';

    }

}

sendButton.onclick=function(){ 

    var nom=document.querySelector('#form #Nom');
    var mail=document.querySelector('#form #Email');
    var message=document.querySelector('#form #message');

    if((nom.value!= '') && (reg.test(mail.value)) && (message.value!='')){


            var info=[nom, mail, message];


            var data=new FormData();

            /* ajout automatique des clés et valeurs */

            for(let i=0; i<info.length;i++){

                data.append(info[i].name, info[i].value);

            }

            var option ={

                method:'POST',
                body:data
            }
                
                fetch('./PHP/Mail.php',option)

                    .then(response => response.text())
                    .then(document.querySelector('#popupContact').style.display='flex')
                    .then(res => document.querySelector('.msg').innerHTML=res)
                    .catch(error => error.text())
                    .catch(msgerror => alert(msgerror))
                

    }else{

    

            document.querySelector('#popupContact').style.display='flex'
            document.querySelector('#popupContact p ').innerHTML='Le message n\'a pas été envoyé . Veuillez vérifier vos données saisies.';

        


    }
}


//###################### Fonction fermeture popup ###################


    var closeButton = document.querySelectorAll('[name="closeBtn"]');


    for(let i=0; i<closeButton.length;i++){

        closeButton[i].onclick= function(){ 

            var popup= document.querySelectorAll('.popup');

            popup[i].style.display='none';


        }

    }

