
/////////////////////////////////////////////// deposit functions///////////////////////////////////////////
$('#checking-deposit').on('click', function () {
    if (Number($('#checking-amount').val()) > 0 && !isNaN(Number($('#checking-balance').text().slice(1)))) {
        const newbalance = Number($('#checking-balance').text().slice(1)) + Number($('#checking-amount').val());
                
        $('#checking-balance').text('$' + newbalance.toFixed(2));
        colorControl('checking', newbalance);  
    }
    else {
        alert("Please enter the correct value!")
    }
    $('#checking-amount').val('');    
});

$('#savings-deposit').on('click', function () {
    if (Number($('#savings-amount').val()) > 0 && !isNaN(Number($('#savings-balance').text().slice(1)))) {
        const newbalance = Number($('#savings-balance').text().slice(1)) + Number($('#savings-amount').val());        
        $('#savings-balance').text('$' + newbalance.toFixed(2));
        colorControl('savings', newbalance); 
    }
    else {
        alert("Please enter the correct value!")
    }
    $('#savings-amount').val('');
});

////////////////////////////////////////////////////// withdraw functions////////////////////////////////
$('#savings-withdraw').on('click', function () {
    if (Number($('#savings-amount').val()) > 0 && !isNaN(Number($('#savings-balance').text().slice(1)))) {
        const newbalance = Number($('#savings-balance').text().slice(1)) - Number($('#savings-amount').val());         
        if (newbalance >= 0) { 
        $('#savings-balance').text('$' + newbalance.toFixed(2));
        colorControl('savings', newbalance);        
        }    
        else {
            const newbalance2 = Number($('#checking-balance').text().slice(1)) + newbalance;
            if(newbalance2 >= 0) {            
            $('#checking-balance').text('$' + newbalance2.toFixed(2));
            $('#savings-balance').text('$0');
            colorControl('savings', 0);
            colorControl('checking', newbalance2);            
            }
        }     
    }
    else {
        alert("Please enter the correct value!")
    }
    $('#savings-amount').val('');      
});

$('#checking-withdraw').on('click', function () {
    if (Number($('#checking-amount').val()) > 0 && !isNaN(Number($('#checking-balance').text().slice(1)))) {
        const newbalance = Number($('#checking-balance').text().slice(1)) - Number($('#checking-amount').val());         
        if (newbalance >= 0) { 
        $('#checking-balance').text('$' + newbalance.toFixed(2));
        colorControl('checking', newbalance);        
        }    
        else {
            const newbalance2 = Number($('#savings-balance').text().slice(1)) + newbalance;
            if(newbalance2 >= 0) {            
            $('#savings-balance').text('$' + newbalance2.toFixed(2));
            $('#checking-balance').text('$0');
            colorControl('checking', 0);
            colorControl('savings', newbalance2);            
            }
        }     
    }
    else {
        alert("Please enter the correct value!")
    }
    $('#checking-amount').val('');      
});


/////////////////////////////////////checking the background color/////////////////////
const colorControl = function (acount, amount) {
    if (acount === 'savings') {
       amount = Number($('#savings-balance').text().slice(1));
       if (amount === 0) {
        $('div#savings-balance').removeClass('balance');
        $('div#savings-balance').addClass('zeroBalance');    
       }
       else {
        $('div#savings-balance').removeClass('zeroBalance');
        $('div#savings-balance').addClass('balance');  
       } 
    }
    if (acount === 'checking') {
       amount = Number($('#checking-balance').text().slice(1));
       if (amount === 0) {
        $('div#checking-balance').removeClass('balance');
        $('div#checking-balance').addClass('zeroBalance');    
       }
       else {
        $('div#checking-balance').removeClass('zeroBalance');
        $('div#checking-balance').addClass('balance');  
       } 
    }
}