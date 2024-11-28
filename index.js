function kosarba(termekNev, termekDb, termekAr) {
    var adatok = {
        nev: termekNev,
        db: Number(termekDb),
        ar: Number(termekAr)
    };

    // Ellenőrizzük, hogy van-e már tárolt adat a localStorage-ban
    var regiAdatok = localStorage.getItem("Termék adatai");
    var osszesAdat;

    // Ha vannak már tárolt adatok, olvassuk ki és alakítsuk át objektummá
    if (regiAdatok) {
        osszesAdat = JSON.parse(regiAdatok);

        // Adjuk hozzá az új adatokat a már meglévőkhöz
        osszesAdat.push(adatok);
    } else {
        // Ha nincsenek még tárolt adatok, az új adatok lesznek az összes adatok
        osszesAdat = [adatok];
    }

    // Mentsük el az összes adatot a localStorage-ba
    localStorage.setItem("Termék adatai", JSON.stringify(osszesAdat));
}

function fizetes() {
    alert('Köszönjük a megrendelésed!');
}

function torles() {
    localStorage.clear();
    window.location.reload();
}

function kosar() {
    var list = "<tr><th style=\"margin:auto\">Termék neve: </th><th>darabszáma: </th><th>Ára: </th></tr>\n";
    var ossz = 0;
    var kapottadatok = localStorage.getItem("Termék adatai");

    if (kapottadatok) {
        var kiolvasottadatok = JSON.parse(kapottadatok);

        for (var i = 0; i < kiolvasottadatok.length; i++) {
            var termek = kiolvasottadatok[i];
            list += "<tr><td>" + termek.nev + "</td><td>" + termek.db + "</td><td>" + termek.ar + " Ft/db" + "</td></tr>";
            ossz += termek.ar * termek.db;
        }

        list += "<tr> <th>VÉGÖSSZEG: </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>";
    } else {
        list += "<tr><td colspan='3'>A kosár üres.</td></tr>";
    }

    document.getElementById('tabla').innerHTML = list;
}
