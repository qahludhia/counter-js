var makanan = document.getElementById('input-kop');
var tombol = document.getElementById('button-kop');
var list = document.getElementById('list-kop');
var save = localStorage.getItem('makan')
    list.innerHTML = save
    
tombol.addEventListener('click', function(){
    var makan = makanan.value
    list.innerHTML = list.innerHTML + '<li class="list-group-item list-group-item-danger">' + makanan;
    makanan.value = "";
    localStorage.setItem('makan',list.innerHTML);
   

});window.onlo