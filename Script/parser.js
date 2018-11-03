/*function myFunction() {

    let tekst = document.getElementById("dieta").value;


    let res = tekst.split(/\r?\n/);

    document.getElementById("pon_sn_n").innerHTML = res[2];

    let i;
    for (i = 3; i < res.length; i++) {
        let x = document.createElement("LI");
        let t = document.createTextNode(res[i]);
        x.appendChild(t);
        document.getElementById("pon_sn_s").appendChild(x);
    }
}



