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

        let infoDestination = 'Destination: ' + object[i].destination_name;
        let infoOperator = 'Operator: ' + object[i].operator_name;
        let infoArrival = 'Arrival time: ' + object[i].expected_arrival_time;
        let infoStatus = 'Status: ' + object[i].status;

        for (let i = 0; i < 4; i++) {

            let pID = divId + "-p" + i;
            var newpElem = '<p id="' + pID + '"></p>';
            divHolder.insertAdjacentHTML('beforeend', newpElem);
        }

        let pID0 = divId + "-p" + 0;
        let pID1 = divId + "-p" + 1;
        let pID2 = divId + "-p" + 2;
        let pID3 = divId + "-p" + 3;

        document.getElementById(pID0).innerHTML = infoDestination;
        document.getElementById(pID1).innerHTML = infoOperator;
        document.getElementById(pID2).innerHTML = infoArrival;
        document.getElementById(pID3).innerHTML = infoStatus;


    }
}