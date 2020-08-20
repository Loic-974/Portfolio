<?php


if(isset($_POST['Nom']) and isset($_POST['Email']) and isset($_POST['Message'])){

    $to = 'loic.rabat@live.fr';
    $subject ='Contact depuis Portfolio';
    $message ='From:'.htmlspecialchars($_POST['Email']).' '.'Interlocuteur:'.htmlspecialchars($_POST['Nom']). wordwrap($_POST['Message'],70,'\r\n');
    $header = 'Portfolio Contact';
    
    $delivery=mail($to,$subject,$message,$header);

    if(!$delivery){

        echo('Le message n\'a pas pu être envoyé. Veuillez réessayer dans quelques instants');

    }else{


        echo('Le message a bien été envoyé');
    }

  

    
 
}else{

    echo('Une erreur est survenu');
}



?>