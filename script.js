//your JS code here. If required.
let infield=document.getElementById('fname');
infield.addEventListener('blur',function(){
     infield.value = infield.value.toUpperCase();
});