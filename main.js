function kurangKan() {
    var der1 = parseFloat(document.getElementById("deg1").value) || 0;
    var min1 = parseFloat(document.getElementById("min1").value) || 0;
    var sec1 = parseFloat(document.getElementById("sec1").value) || 0;

    var der2 = parseFloat(document.getElementById("deg2").value) || 0;
    var min2 = parseFloat(document.getElementById("min2").value) || 0;
    var sec2 = parseFloat(document.getElementById("sec2").value) || 0;

    var totalDeg= der1 - der2;
    var totalMin = min1 - min2;
    var totalSec = sec1 - sec2;

    // Koreksi jika menit atau detik negatif
    if (totalSec < 0) {
        totalSec += 60;
        totalMin--;
    }

    if (totalMin < 0) {
        totalMin += 60;
        totalDeg--;
    }

    document.getElementById("hasil").value = `${totalDeg}° ${totalMin}' ${totalSec}"`;

}

function subtractAngles() {
    var degrees1 = parseFloat(document.getElementById("degrees1").value) || 0;
    var minutes1 = parseFloat(document.getElementById("minutes1").value) || 0;
    var seconds1 = parseFloat(document.getElementById("seconds1").value) || 0;

    var degrees2 = parseFloat(document.getElementById("degrees2").value) || 0;
    var minutes2 = parseFloat(document.getElementById("minutes2").value) || 0;
    var seconds2 = parseFloat(document.getElementById("seconds2").value) || 0;

    var totalDegrees = degrees1 - degrees2;
    var totalMinutes = minutes1 - minutes2;
    var totalSeconds = seconds1 - seconds2;

    // Koreksi jika menit atau detik negatif
    if (totalSeconds < 0) {
        totalSeconds += 60;
        totalMinutes--;
    }

    if (totalMinutes < 0) {
        totalMinutes += 60;
        totalDegrees--;
    }

    document.getElementById("result").value = `${totalDegrees}° ${totalMinutes}' ${totalSeconds}"`;

}

let j = function () {
    var d1 = parseFloat(document.getElementById("d1").value) || 0;
    var m1 = parseFloat(document.getElementById("m1").value) || 0;
    var s1 = parseFloat(document.getElementById("s1").value) || 0;

    var d2 = parseFloat(document.getElementById("d2").value) || 0;
    var m2 = parseFloat(document.getElementById("m2").value) || 0;
    var s2 = parseFloat(document.getElementById("s2").value) || 0;

    var totDeg = d1 - d2;
    var totMin = m1 - m2;
    var totSec = s1 - s2;

    // Koreksi jika menit atau detik negatif
    if (totSec < 0) {
        totSec += 60;
        totMin--;
    }

    if (totMin < 0) {
        totMin += 60;
        totDeg--;
    }

    document.getElementById("done").value = `${totDeg}° ${totMin}' ${totSec}"`;

}

let j2 = function () {
    var x1 = parseFloat(document.getElementById("x1").value) || 0;
    var y1 = parseFloat(document.getElementById("y1").value) || 0;
    var z1 = parseFloat(document.getElementById("z1").value) || 0;

    var x2 = parseFloat(document.getElementById("x2").value) || 0;
    var y2 = parseFloat(document.getElementById("y2").value) || 0;
    var z2 = parseFloat(document.getElementById("z2").value) || 0;

    var td = x1 - x2;
    var tm = y1 - y2;
    var ts = z1 - z2;

    // Koreksi jika menit atau detik negatif
    if (ts < 0) {
        ts += 60;
        tm--;
    }

    if (tm < 0) {
        tm += 60;
        td--;
    }

    document.getElementById("selesai").value = `${td}° ${tm}' ${ts}"`;

}