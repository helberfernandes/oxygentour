class OxygenTour{ 

    constructor(div){
     this.ids=div.map(this.getElements);
    }
    init(){ 
        //iniciando o css
        $('head').html('<link rel="stylesheet" href="./css/oxygentour.css" >');

        var self=this;  
        var index=0; 
        self.disableButtons(index);  
         $( document ).ready(function() {
            $('#teste').addClass('spotlight');
            $('#teste').append($('#painel'));
         });

         $('.next, .prev').on('click', function (event) {
            event.preventDefault();
             index=1+index;
            self.trocar($(this).hasClass('next'), index); 
            self.disableButtons(index);
            self.scroll();   
        }); 

        
    }


    trocar(acionar, index) {
        console.log("index "+index);
            var id=this.ids;
       
            var ul = $("#"+id[index]);
            var visivel = 0;
            ul.each(function (i) {
                 if (!$(this).hasClass('teste')) {
                    $(this).append($('#painel'));
                    if(index>0){
                        console.log("elemento "+id);
                        var anterior="#"+id[index-1];
                        $(anterior).removeClass('spotlight');
                    }
                    $(this).addClass('spotlight');
                 

                    visivel = i + (acionar ? 1 : -1);
                }
            })    
            ul.addClass('teste').eq(visivel).removeClass('teste');
        
    }

    getElements(item,index) {
        var fullname = [item.id];        
        return fullname;
    }

    disableButtons(index){

        if(this.ids.length==index){
           $('.next').addClass('disable');
           $('.next').unbind('click');
        }else{
            $('.next').removeClass('disable');
             $('.next').bind('click');
        }

        if(0==index){
           $('.prev').addClass('disable');
            $('.prev').unbind('click');
        }else{
            $('.prev').removeClass('disable');
        }
       
    }

    scroll(){
         $('html, body').animate({
        scrollTop: $(".next").offset().top
        }, 200); 
    }
    

}




