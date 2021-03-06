const Url = "https://transportapi.com/v3/uk/train/station/SLO/live.json?app_id=7c6801c2&app_key=7cc056e995f72408c51d026d654e51b4&calling_at=HAY&darwin=false&to_offset=PT12:00:00&train_status=passenger";
var timesObject;
const timeDiv = document.querySelector('#trainTime');
const destDiv = document.querySelector('#trainDest');
const opDiv = document.querySelector('#trainOp');
const staDiv = document.querySelector('#trainSta');

fetch(Url)
    .then(response => response.json())
    .then(data => timesObject = data.departures.all)
    .then(() => sortData(timesObject))

function sortData(object) {
    let trainTime = [];
    let trainDest = [];
    let trainOp = [];
    let trainSta = [];
    for (let i = 0; i < object.length; i++) {
        //let trainInfo = object[i].expected_arrival_time + "      " + object[i].destination_name + "      " + object[i].operator_name + "        " + object[i].status;

        trainTime.push(object[i].expected_arrival_time);
        trainDest.push(object[i].destination_name);
        trainOp.push(object[i].operator_name);
        trainSta.push(object[i].status);
    }

    printTime(trainTime);
    printDest(trainDest);
    printOp(trainOp);
    printSta(trainSta);
}

function printTime(timeArr) {
    for (let i = 0; i < timeArr.length; i++) {
        var timeP = document.createElement('p');
        timeDiv.appendChild(timeP);

        timeP.innerHTML = timeArr[i];
    }
}

function printDest(destArr) {
    for (let i = 0; i < destArr.length; i++) {
        var destP = document.createElement('p');
        destDiv.appendChild(destP);

        destP.innerHTML = destArr[i];
    }
}

function printOp(opArr) {
    for (let i = 0; i < opArr.length; i++) {
        var opP = document.createElement('p');
        opDiv.appendChild(opP);

        opP.innerHTML = opArr[i];
    }
}

function printSta(staArr) {
    for (let i = 0; i < staArr.length; i++) {
        var staP = document.createElement('p');
        staDiv.appendChild(staP);

        staP.innerHTML = staArr[i].toLowerCase();
    }
}