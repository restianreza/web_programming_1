function salam (){
    alert ('Selamat Pagi');
}

let npm ="2125250038";
let umur ="19";
let status = true;
let hobi = ['baca', 'ngoding', 'desain'];
let mahasiswa ={
    nama:'Reza',
    umur: '19',
    hobi: ['rebahan', 'maain game']
};

document.getElementById('npm').innerHTML = npm;
document.getElementById('umur').innerHTML = umur;
document.getElementById('status').innerHTML = status;
document.getElementById('hobi').innerHTML = hobi[0]+", "+[1];

document.getElementById('mahasiswa').innerHTML= mahasiswa.nama+
', '+mahasiswa.umur+', '+mahasiswa.hobi[0]+', '+[1];

hobi.forEach(tampilHobi);

function tampilHobi(item){
    console.log(item);
 
}

//function tampilHobi2(item){
    for(let x in hobi){
        console.log(hobi[x]);
    }
//}

for(let y in mahasiswa){
    console.log(mahasiswa.y);
    console.log(mahasiswa.hobi[0]);
}
if(umu == 19){
    console.log("Remaja")
}
else{[
    console.log("anak-anak, dewasa, orang tua")
]}