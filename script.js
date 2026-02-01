const getalle = {
    0: "uur",   1: "een",   2: "twee",
    3: "drie",  4: "vier",  5: "vyf",
    6: "ses",   7: "sewe",  8: "agt",
    9: "nege",  10: "tien", 11: "elf",
    12: "twaalf", 15: "kwart", 20: "twintig", 
    25: "vyf en twinting", 30: "half",
}

function kryTyd() {
    const nou = new Date();
    const ure = nou.getHours();
    const minute = Math.floor( nou.getMinutes() / 5 ) * 5;

    let volgendeUur = (ure%12) + 1;
    volgendeUur = (volgendeUur > 12) ? 1 : volgendeUur;

    if (ure === 0 && minute % 5 < 5) return 'middernag';

    if (minute === 0) {
        return getalle[ure%12 || 12] + " uur";
    } else if (minute === 30) {
        return 'half ' + getalle[ure%12 || 12];
    }

    let minuteIndeks = minute;
    if (minuteIndeks > 30) {
        minuteIndeks = 30 - (minuteIndeks % 30);
    }

    return getalle[ minuteIndeks ] + ` ${ (minute > 30) ? 'v' : '' }oor ` + getalle[ure%12 || 12];
}

function tydEvalueeringsFunksie() {
    document.getElementById('tyd').innerText = kryTyd();
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(tydEvalueeringsFunksie()i, 1000);
    tydEvalueeringsFunksie();
});
