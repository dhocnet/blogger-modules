/*
  supernav.js - adalah navigasi paling atas untuk menampilkan navigasi antar subdomain dari domain yang sama.
*/

// subdomain disimpan dalam string dengan format seperti ini
// "NAMA:sub1.domain.com,NAMA:sub2.domain.com,NAMA:sub3.domain.com"... dan seterusnya
var DaftarSubDomain = "";

function SuperNavBar(daftarSub){
  let sisipBody = document.getElementsByTagName("body")[0];
  let divKontainer = document.createElement("div");
  let subList = document.createElement("li");
  divKontainer.className = "SuperNavbar";
  subList.className = "SuperList";
  let jumlahSubdomain = daftarSub.split(",");
  for (x = 0; 0 < jumlahSubdomain.length; x++) {
    let subBaru = document.createElement("li");
    let subLink = document.createElement("a");
    let ambilNama = jumlahSubdomain[x].split(":");
    let namaLink = document.createTextNode(ambilNama[0]);
    subLink.href = ambilNama[1];
    subLink.append(namaLink);
    subBaru.append(subLink);
    subList.append(subBaru);
  }
  divKontainer.append(subList);
  sisipBody.prepend(divKontainer);
}

