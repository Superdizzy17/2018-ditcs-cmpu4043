function insert(num){
    document.form.textview.value = document.form.textview.value+num
}

function equal(){
    var exp = document.form.textview.value;
    if(exp)
    {
        document.form.textview.value = eval(exp)
    }
}

function c(){
    document.form.textview.value = "";
}

document.addEventListener('keypress', function(event) {
    if(event.keyCode == 49) {
       insert(1);
    }
    else if(event.keyCode == 50) {
        insert(2);
    }
    else if(event.keyCode == 51) {
        insert(3);
    }
    else if(event.keyCode == 52) {
        insert(4);
    }
    else if(event.keyCode == 53) {
        insert(5);
    }
    else if(event.keyCode == 54) {
        insert(6);
    }
    else if(event.keyCode == 55) {
        insert(7);
    }
    else if(event.keyCode == 56) {
        insert(8);
    }
    else if(event.keyCode == 57) {
        insert(9);
    }
    else if(event.keyCode == 48) {
        insert(0);
    }
    else if(event.keyCode == 45) {
        insert("-");
    }
    else if(event.keyCode == 43) {
        insert("+");
    }
    else if(event.keyCode == 42) {
        insert("*");
    }
    else if(event.keyCode == 47) {
        insert("/");
    }
    else if(event.keyCode == 46) {
        insert(".");
    }
    else if(event.keyCode == 61) {
        equal();
    }
    else if(event.keyCode == 8) {
        c();
    }
});