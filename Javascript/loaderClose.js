

window.onbeforeunload = function () {
 window.scrollTo(0, 0);
 document.body.style.height='100vh';
 document.body.style.overflow='hidden';
}




window.onload= closeLoader ;





function closeLoader() {

            document.body.style.height='100vh';
   	    document.body.style.overflow='hidden';

           // setTimeout(function(){
                
                    setInterval(function(){

                        if(!loader.style.opacity){
                        
                            loader.style.opacity=1;
                       
                        }

                            if (loader.style.opacity > 0){
                                loader.style.opacity -= 0.01;
                             
                            
                            } else {

                                loader.style.display='none'; 
                              	document.body.style.height='auto';
   	    			document.body.style.overflow='visible';
                             
                            }  

                }, 20);

           // }, 300 ) ;   

    }


  



   
