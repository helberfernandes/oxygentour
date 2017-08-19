class OxygenTour{ 

    constructor(div){
     this.ids=div.map(this.getElements);
    }
    init(){ 
        var self=this;  
        var index=0;  
         $( document ).ready(function() {
            $('#teste').addClass('spotlight');
            $('#teste').append($('#painel'));
         });

         $('.next, .prev').on('click', function (event) {
            event.preventDefault();
            
            self.trocar($(this).hasClass('next'), index); 
            
                index=1+index;   
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
                    $(this).focus();
                    visivel = i + (acionar ? 1 : -1);
                }
            })    
            ul.addClass('teste').eq(visivel).removeClass('teste');
        
    }

    getElements(item,index) {
        var fullname = [item.id];        
        return fullname;
    }

}




