$(document).ready(function(){

    $('[data-toggle=tooltip]').tooltip();

    $('[data-add-to-cart]').click(function(e){
        alert('Zu Warenkorb Hinzufügen');
        e.stopPropagation();
    });

});