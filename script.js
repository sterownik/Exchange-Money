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


function othername() {
    ilosc = document.getElementById("ilosc").value;
    zjakiej = document.getElementById("zjakiej").value;
    najaka = document.getElementById("najaka").value;

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
    }

}

async function download(datebefore, today) {

    // console.log(ilosc + " ilosc\n" + zjakiej + "zjakiej\n" + najaka + "najaka\n" + datebefore + "\n" + today);
    api = "https://api.exchangeratesapi.io/history?start_at=" + datebefore + "&end_at=" + today + "&base=" + zjakiej;
    const response = await fetch(api);

    const data = await response.json();
    // console.log(Object.values(data.rates)[0]);
    //  console.log(Object.keys(data.rates)[0]);
    switch (najaka) {
        case "CAD":
            procent = Object.values(data.rates)[0].CAD;
            procent2 = Object.values(data.rates)[1].CAD;
            break;
        case "HKD":
            procent = Object.values(data.rates)[0].HKD;
            procent2 = Object.values(data.rates)[1].HKD;
            break;
        case "ISK":
            procent = Object.values(data.rates)[0].ISK;
            break;
        case "PHP":
            procent = Object.values(data.rates)[0].PHP;
            break;
        case "DKK":
            procent = Object.values(data.rates)[0].DKK;
            break;
        case "HUF":
            procent = Object.values(data.rates)[0].HUF;
            break;
        case "CZK":
            procent = Object.values(data.rates)[0].CZK;
            break;
        case "GBP":
            procent = Object.values(data.rates)[0].GBP;
            break;
        case "RON":
            procent = Object.values(data.rates)[0].RON;
            break;
        case "SEK":
            procent = Object.values(data.rates)[0].SEK;
            break;
        case "IDR":
            procent = Object.values(data.rates)[0].IDR;
            break;
        case "INR":
            procent = Object.values(data.rates)[0].INR;
            break;
        case "BRL":
            procent = Object.values(data.rates)[0].BRL;
            break;
        case "RUB":
            procent = Object.values(data.rates)[0].RUB;
            break;
        case "HRK":
            procent = Object.values(data.rates)[0].HRK;
            break;
        case "JPY":
            procent = Object.values(data.rates)[0].JPY;
            break;
        case "THB":
            procent = Object.values(data.rates)[0].THB;
            break;
        case "CHF":
            procent = Object.values(data.rates)[0].CHF;
            break;
        case "EUR":
            procent = Object.values(data.rates)[0].EUR;
            break;
        case "MYR":
            procent = Object.values(data.rates)[0].MYR;
            break;
        case "BGN":
            procent = Object.values(data.rates)[0].BGN;
            break;
        case "TRY":
            procent = Object.values(data.rates)[0].TRY;
            break;
        case "CNY":
            procent = Object.values(data.rates)[0].CNY;
            break;
        case "NOK":
            procent = Object.values(data.rates)[0].NOK;
            break;
        case "NZD":
            procent = Object.values(data.rates)[0].NZD;
            break;
        case "ZAR":
            procent = Object.values(data.rates)[0].ZAR;
            break;
        case "USD":
            procent = Object.values(data.rates)[0].USD;
            break;
        case "MXN":
            procent = Object.values(data.rates)[0].MXN;
            break;
        case "SGD":
            procent = Object.values(data.rates)[0].SGD;
            break;
        case "AUD":
            procent = Object.values(data.rates)[0].AUD;
            break;
        case "ILS":
            procent = Object.values(data.rates)[0].ILS;
            break;
        case "KRW":
            procent = Object.values(data.rates)[0].KRW;
            break;
        case "PLN":
            procent = Object.values(data.rates)[0].PLN;
            break;

    }
    document.querySelector("p.zwrot").textContent = (procent * ilosc).toFixed(2) + " " + najaka;
    document.querySelector("p.kurs").textContent = procent;
    console.log(najaka);


}