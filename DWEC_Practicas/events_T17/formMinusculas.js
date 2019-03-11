// Insert in html : 
//  input type = ' text' onkeypress = 'checkName(event)' 
function checkName(evt) {
    var charCode = evt.charCode;
    if (charCode != 0) {
        if (charCode < 97 || charCode > 122) {
            evt.preventDefault();
            alert('Por favor usa sólo letras minúsculas.' + '\n' +
                'charCode: ' + charCode + '\n'
            );
        }
    }
}