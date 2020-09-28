function time () {
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    var today = new Date();
    var hours = zeroFill(today.getHours());
    var minutes = zeroFill(today.getMinutes());
    var seconds = zeroFill(today.getSeconds());

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    setTimeout('time()', 500);
}