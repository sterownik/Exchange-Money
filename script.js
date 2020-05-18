var ilosc;
var zjakiej;
var najaka;
var days = 3;
var datebefore;
var today;
var api;
var procent;
var procent2;
var procent3;
var pobranie;
var kiedypobrane;
window.onscroll = function () {
    window.scrollTo(0, 0);
};


function othername() {
    ilosc = document.getElementById("ilosc").value;
    zjakiej = document.getElementById("zjakiej").value;
    najaka = document.getElementById("najaka").value;
    kiedypobrane = document.querySelector("div.wynik p+p+p");

    //  21 dni wstecz
    datebefore = new Date();
    var before = new Date(datebefore.getTime() - (days * 24 * 60 * 60 * 1000));
    var ddbefore = String(before.getDate()).padStart(2, '0');
    var mmbefore = String(before.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyybefore = before.getFullYear();
    datebefore = yyyybefore + '-' + mmbefore + '-' + ddbefore;

    //

    // dzis
    today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    //

    //  console.log(ilosc + " ilosc\n" + zjakiej + "zjakiej\n" + najaka + "najaka\n" + today);
    if (najaka && ilosc && zjakiej) {
        download(datebefore, today);
    } else {
        alert("Wpisz i zaznacz wszystkie potrzebne dane!")
    }

}

async function download(datebefore, today) {

    // console.log(ilosc + " ilosc\n" + zjakiej + "zjakiej\n" + najaka + "najaka\n" + datebefore + "\n" + today);
    api = "https://api.exchangeratesapi.io/latest?base=" + zjakiej;
    const response = await fetch(api);

    const data = await response.json();
    pobranie = data.date;
    console.log(pobranie);
    kiedypobrane.textContent = "Day converter " + pobranie + " about the course:"

    // console.log(Object.values(data.rates)[0]);
    //  console.log(Object.keys(data.rates)[0]);
    switch (najaka) {
        case "CAD":
            procent = data.rates.CAD;

            break;
        case "HKD":
            procent = data.rates.HKD;

            break;
        case "ISK":
            procent = data.rates.ISK;
            break;
        case "PHP":
            procent = data.rates.PHP;
            break;
        case "DKK":
            procent = data.rates.DKK;
            break;
        case "HUF":
            procent = data.rates.HUF;
            break;
        case "CZK":
            procent = data.rates.CZK;
            break;
        case "GBP":
            procent = data.rates.GBP;
            break;
        case "RON":
            procent = data.rates.RON;
            break;
        case "SEK":
            procent = data.rates.SEK;
            break;
        case "IDR":
            procent = data.rates.IDR;
            break;
        case "INR":
            procent = data.rates.INR;
            break;
        case "BRL":
            procent = data.rates.BRL;
            break;
        case "RUB":
            procent = data.rates.RUB;
            break;
        case "HRK":
            procent = data.rates.HRK;
            break;
        case "JPY":
            procent = data.rates.JPY;
            break;
        case "THB":
            procent = data.rates.THB;
            break;
        case "CHF":
            procent = data.rates.CHF;
            break;
        case "EUR":
            procent = data.rates.EUR;
            break;
        case "MYR":
            procent = data.rates.MYR;
            break;
        case "BGN":
            procent = data.rates.BGN;
            break;
        case "TRY":
            procent = data.rates.TRY;
            break;
        case "CNY":
            procent = data.rates.CNY;
            break;
        case "NOK":
            procent = data.rates.NOK;
            break;
        case "NZD":
            procent = data.rates.NZD;
            break;
        case "ZAR":
            procent = data.rates.ZAR;
            break;
        case "USD":
            procent = data.rates.USD;
            break;
        case "MXN":
            procent = data.rates.MXN;
            break;
        case "SGD":
            procent = data.rates.SGD;
            break;
        case "AUD":
            procent = data.rates.AUD;
            break;
        case "ILS":
            procent = data.rates.ILS;
            break;
        case "KRW":
            procent = data.rates.KRW;
            break;
        case "PLN":
            procent = data.rates.PLN;
            break;

    }
    document.querySelector("p.zwrot").textContent = (procent * ilosc).toFixed(2) + " " + najaka;
    document.querySelector("p.kurs").textContent = procent;
    //  console.log(najaka);


}