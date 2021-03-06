const Url = "https://transportapi.com/v3/uk/train/station/SLO/live.json?app_id=7c6801c2&app_key=7cc056e995f72408c51d026d654e51b4&calling_at=HAY&darwin=false&train_status=passenger";
var timesObject;
const holder = document.querySelector('#holder');

fetch(Url)
    .then(response => response.json())
    .then(data => timesObject = data.departures.all)
    .then(() => printTimes(timesObject))

function printTimes(object) {
    for (let i = 0; i < object.length; i++) {
        var divs = '<div id="' + 'div' + i + '"></div>';
        holder.insertAdjacentHTML('beforeend', divs);
    }

    for (let i = 0; i < object.length; i++) {
        let divId = "div" + i;
        let divHolder = document.getElementById(divId);

        let trainInfo = object[i].expected_arrival_time + "      " + object[i].destination_name + "      " + object[i].operator_name + "        " + object[i].status;

        divHolder.innerHTML = trainInfo;
    }
}