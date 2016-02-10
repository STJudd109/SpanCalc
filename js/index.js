var psf = 0;
document.getElementById("button").onclick = function() {
  calc(psf);
  return false;
};

document.getElementById("t1").onclick = function() {
  psf = 10;
  calc(psf);
  return psf;
};

document.getElementById("t2").onclick = function() {
  psf = 25;
  calc(psf);
  return false;
};

document.getElementById("t3").onclick = function() {
  psf = 30;
  calc(psf);
  return false;
};

document.getElementById("t4").onclick = function() {
  psf = 35;
  calc(psf);
  return false;
};

document.getElementById("t5").onclick = function() {
  psf = 40;
  calc(psf);
  return false;
};

document.getElementById("t6").onclick = function() {
  psf = 50;
  calc(psf);
  return false;
};

document.getElementById("t7").onclick = function() {
  psf = 60;
  calc(psf);
  return false;
};

function allr() {
  var green = "#28bc6e";
  var red = "#f94a32";
  var black = "#000";
  $("#light4").css("background-color", (black));
  $("#light6").css("background-color", (black));
  $("#light8").css("background-color", (black));
  $("#light10").css("background-color", (black));
  $("#light42").css("background-color", (black));
  $("#light62").css("background-color", (black));
  $("#light82").css("background-color", (black));
  $("#light102").css("background-color", (black));
  $("#light43").css("background-color", (black));
  $("#light63").css("background-color", (black));
  $("#light83").css("background-color", (black));
  $("#light103").css("background-color", (black));
  $("#light44").css("background-color", (black));
  $("#light64").css("background-color", (black));
  $("#light84").css("background-color", (black));
  $("#light104").css("background-color", (black));
}

function calc(psf) {
  //var a = $("input[name=spacing]:checked").val();
  var calc = document.getElementById('scalc');
  var feet = calc.feet.value;
  var inches = (calc.inches.value);
  var footinch = (feet * 12);
  var tinches = -(-footinch - inches);
  //var tinchesv = (feet)-(-Math.ceil(((inches/12)*100));
  var an = calc.angle.value;
  var eave = (calc.eave.value) / 12;
  var normf = calc.feet.value;
  var normi = (calc.inches.value) / 12;
  var normtinches = -(-feet - inches);
  var supportf = calc.supportf.value;
  var supporti = (calc.supporti.value) /12;
  var suptinches = -(-supportf - supporti);
    
  calc.totalspan.value = (Math.round((((tinches / 12) * Math.cos((an) * ((Math.PI / 180))) - (eave))) * 100) / 100);
  var sup = calc.totalspan.value - suptinches;
  if (sup > suptinches) {
    calc.totalspan.value = sup;   
  } else if (suptinches >= sup) {
    calc.totalspan.value  = suptinches;  
  }
  calc.pitch.value = Math.round((Math.tan((an * (Math.PI / 180))) * 12) * 100) / 100;
  var span = calc.totalspan.value;
  var pitch = calc.pitch.value;
  
  /*----Color Variables-----*/
  var green = "#28bc6e";
  var red = "#f94a32";
  var black = "#000";

  var V2x4a16 = 0;
  var V2x6a16 = 0;
  var V2x8a16 = 0;
  var V2x10a16 = 0;
  var V2x4a24 = 0;
  var V2x6a24 = 0;
  var V2x8a24 = 0;
  var V2x10a24 = 0;

  if (psf == 10) {
    if (pitch >= 10.8) {
      V2x4a16 = 16.4; V2x6a16 = 23.8; V2x8a16 = 30.1; V2x10a16 = 36.8;
      V2x4a24 = 13.4; V2x6a24 = 19.5; V2x8a24 = 24.6; V2x10a24 = 30;
    } else if (pitch < 10.8 && pitch >= 9.38) {
      V2x4a16 = 16.62; V2x6a16 = 24.13; V2x8a16 = 30.52; V2x10a16 = 37.3;
      V2x4a24 = 13.58; V2x6a24 = 19.77; V2x8a24 = 24.95; V2x10a24 = 30.4;
    } else if (pitch < 9.38 && pitch >= 7.79) {
      V2x4a16 = 16.83; V2x6a16 = 24.47; V2x8a16 = 30.93; V2x10a16 = 37.8;
      V2x4a24 = 13.77; V2x6a24 = 20.03; V2x8a24 = 25.3; V2x10a24 = 30.8;
    } else if (pitch < 7.79 && pitch >= 6.38) {
      V2x4a16 = 17.05; V2x6a16 = 24.8; V2x8a16 = 31.35; V2x10a16 = 38.4;
      V2x4a24 = 13.95; V2x6a24 = 20.3; V2x8a24 = 25.65; V2x10a24 = 31.3;
    } else if (pitch < 6.38 && pitch >= 4.37) {
      V2x4a16 = 17.27; V2x6a16 = 25.13; V2x8a16 = 31.77; V2x10a16 = 38.9;
      V2x4a24 = 14.13; V2x6a24 = 20.57; V2x8a24 = 26; V2x10a24 = 31.7;
    } else if (pitch < 4.37 && pitch >= 0) {
      V2x4a16 = 17.7; V2x6a16 = 25.8; V2x8a16 = 32.6; V2x10a16 = 39.9;
      V2x4a24 = 14.5; V2x6a24 = 21.1; V2x8a24 = 26.7; V2x10a24 = 32.5;
    }
  }

  if (psf == 25) {
    if (pitch >= 10.8) {
      V2x4a16 = 12.3; V2x6a16 = 17.9; V2x8a16 = 22.7; V2x10a16 = 27.6;
      V2x4a24 = 10.1; V2x6a24 = 14.6; V2x8a24 = 18.5; V2x10a24 = 22.5;
    } else if (pitch < 10.8 && pitch >= 9.38) {
      V2x4a16 = 12.42; V2x6a16 = 18.08; V2x8a16 = 22.92; V2x10a16 = 27.88;
      V2x4a24 = 10.2; V2x6a24 = 14.75; V2x8a24 = 18.67; V2x10a24 = 22.73;
    } else if (pitch < 9.38 && pitch >= 7.79) {
      V2x4a16 = 12.53; V2x6a16 = 18.27; V2x8a16 = 23.13; V2x10a16 = 28.17;
      V2x4a24 = 10.3; V2x6a24 = 14.9; V2x8a24 = 18.83; V2x10a24 = 22.97;
    } else if (pitch < 7.79 && pitch >= 6.38) {
      V2x4a16 = 12.65; V2x6a16 = 18.45; V2x8a16 = 23.35; V2x10a16 = 28.45;
      V2x4a24 = 10.4; V2x6a24 = 15.05; V2x8a24 = 19; V2x10a24 = 23.2;
    } else if (pitch < 6.38 && pitch >= 4.37) {
      V2x4a16 = 12.77; V2x6a16 = 18.63; V2x8a16 = 23.57; V2x10a16 = 28.73;
      V2x4a24 = 10.5; V2x6a24 = 15.2; V2x8a24 = 19.17; V2x10a24 = 23.43;
    } else if (pitch < 4.37 && pitch >= 0) {
      V2x4a16 = 13; V2x6a16 = 19; V2x8a16 = 24; V2x10a16 = 29.3;
      V2x4a24 = 10.7; V2x6a24 = 15.5; V2x8a24 = 19.5; V2x10a24 = 23.9;
    }
  }

  if (psf == 30) {
    if (pitch >= 10.8) {
      V2x4a16 = 11.7; V2x6a16 = 17; V2x8a16 = 21.5; V2x10a16 = 26.2;
      V2x4a24 = 9.6; V2x6a24 = 13.9; V2x8a24 = 17.5; V2x10a24 = 21.4;
    } else if (pitch < 10.8 && pitch >= 9.38) {
      V2x4a16 = 11.8; V2x6a16 = 17.15; V2x8a16 = 21.67; V2x10a16 = 26.43;
      V2x4a24 = 9.68; V2x6a24 = 14; V2x8a24 = 17.67; V2x10a24 = 21.58;
    } else if (pitch < 9.38 && pitch >= 7.79) {
      V2x4a16 = 11.9; V2x6a16 = 17.3; V2x8a16 = 21.83; V2x10a16 = 26.67;
      V2x4a24 = 9.77; V2x6a24 = 14.1; V2x8a24 = 17.83; V2x10a24 = 21.77;
    } else if (pitch < 7.79 && pitch >= 6.38) {
      V2x4a16 = 12; V2x6a16 = 17.45; V2x8a16 = 22; V2x10a16 = 26.9;
      V2x4a24 = 9.85; V2x6a24 = 14.2; V2x8a24 = 18; V2x10a24 = 21.95;
    } else if (pitch < 6.38 && pitch >= 4.37) {
      V2x4a16 = 12.1; V2x6a16 = 17.6; V2x8a16 = 22.17; V2x10a16 = 27.13;
      V2x4a24 = 9.93; V2x6a24 = 14.3; V2x8a24 = 18.17; V2x10a24 = 22.13;
    } else if (pitch < 4.37 && pitch >= 0) {
      V2x4a16 = 12.3; V2x6a16 = 17.9; V2x8a16 = 22.5; V2x10a16 = 27.6;
      V2x4a24 = 10.1; V2x6a24 = 14.5; V2x8a24 = 18.5; V2x10a24 = 22.5;
    }
  }

  if (psf == 35) {
    if (pitch >= 10.8) {
      V2x4a16 = 11.1; V2x6a16 = 16.2; V2x8a16 = 20.4; V2x10a16 = 25;
      V2x4a24 = 9.1; V2x6a24 = 13.9; V2x8a24 = 16.7; V2x10a24 = 20.4;
    } else if (pitch < 10.8 && pitch >= 9.38) {
      V2x4a16 = 11.18; V2x6a16 = 16.33; V2x8a16 = 20.58; V2x10a16 = 25.2;
      V2x4a24 = 9.18; V2x6a24 = 13.4; V2x8a24 = 16.83; V2x10a24 = 20.57;
    } else if (pitch < 9.38 && pitch >= 7.79) {
      V2x4a16 = 11.27; V2x6a16 = 16.47; V2x8a16 = 20.77; V2x10a16 = 25.4;
      V2x4a24 = 9.27; V2x6a24 = 13.5; V2x8a24 = 16.97; V2x10a24 = 20.73;
    } else if (pitch < 7.79 && pitch >= 6.38) {
      V2x4a16 = 11.35; V2x6a16 = 16.6; V2x8a16 = 20.95; V2x10a16 = 25.6;
      V2x4a24 = 9.35; V2x6a24 = 13.6; V2x8a24 = 17.1; V2x10a24 = 20.9;
    } else if (pitch < 6.38 && pitch >= 4.37) {
      V2x4a16 = 11.43; V2x6a16 = 16.73; V2x8a16 = 21.13; V2x10a16 = 25.8;
      V2x4a24 = 9.43; V2x6a24 = 13.7; V2x8a24 = 17.23; V2x10a24 = 21.07;
    } else if (pitch < 4.37 && pitch >= 0) {
      V2x4a16 = 11.6; V2x6a16 = 17; V2x8a16 = 21.5; V2x10a16 = 26.2;
      V2x4a24 = 9.6; V2x6a24 = 13.9; V2x8a24 = 17.5; V2x10a24 = 21.4;
    }
  }

  if (psf == 40) {
    if (pitch >= 10.8) {
      V2x4a16 = 9.9; V2x6a16 = 14.6; V2x8a16 = 18.4; V2x10a16 = 22.4;
      V2x4a24 = 8.1; V2x6a24 = 11.9; V2x8a24 = 15; V2x10a24 = 18.3;
    } else if (pitch < 10.8 && pitch >= 9.38) {
      V2x4a16 = 9.97; V2x6a16 = 14.7; V2x8a16 = 18.53; V2x10a16 = 22.58;
      V2x4a24 = 8.15; V2x6a24 = 12; V2x8a24 = 15.12; V2x10a24 = 18.43;
    } else if (pitch < 9.38 && pitch >= 7.79) {
      V2x4a16 = 10.03; V2x6a16 = 14.8; V2x8a16 = 18.67; V2x10a16 = 22.77;
      V2x4a24 = 8.2; V2x6a24 = 12.1; V2x8a24 = 15.23; V2x10a24 = 18.57;
    } else if (pitch < 7.79 && pitch >= 6.38) {
      V2x4a16 = 10.1; V2x6a16 = 14.9; V2x8a16 = 18.8; V2x10a16 = 22.95;
      V2x4a24 = 8.25; V2x6a24 = 12.2; V2x8a24 = 15.35; V2x10a24 = 18.7;
    } else if (pitch < 6.38 && pitch >= 4.37) {
      V2x4a16 = 10.17; V2x6a16 = 15; V2x8a16 = 18.93; V2x10a16 = 23.13;
      V2x4a24 = 8.3; V2x6a24 = 12.3; V2x8a24 = 15.47; V2x10a24 = 18.83;
    } else if (pitch < 4.37 && pitch >= 0) {
      V2x4a16 = 10.3; V2x6a16 = 15.2; V2x8a16 = 19.2; V2x10a16 = 23.5;
      V2x4a24 = 8.4; V2x6a24 = 12.5; V2x8a24 = 15.7; V2x10a24 = 19.10;
    }
  }

  if (psf == 50) {
    if (pitch >= 10.8) {
      V2x4a16 = 9.2; V2x6a16 = 13.5; V2x8a16 = 17; V2x10a16 = 20.8;
      V2x4a24 = 7.5; V2x6a24 = 11; V2x8a24 = 13.9; V2x10a24 = 17;
    } else if (pitch < 10.8 && pitch >= 9.38) {
      V2x4a16 = 9.25; V2x6a16 = 13.58; V2x8a16 = 17.1; V2x10a16 = 20.92;
      V2x4a24 = 7.55; V2x6a24 = 11.08; V2x8a24 = 14; V2x10a24 = 17.1;
    } else if (pitch < 9.38 && pitch >= 7.79) {
      V2x4a16 = 9.3; V2x6a16 = 13.67; V2x8a16 = 17.2; V2x10a16 = 21.03;
      V2x4a24 = 7.6; V2x6a24 = 11.17; V2x8a24 = 14.1; V2x10a24 = 17.2;
    } else if (pitch < 7.79 && pitch >= 6.38) {
      V2x4a16 = 9.35; V2x6a16 = 13.75; V2x8a16 = 17.3; V2x10a16 = 21.15;
      V2x4a24 = 7.65; V2x6a24 = 11.25; V2x8a24 = 14.2; V2x10a24 = 17.3;
    } else if (pitch < 6.38 && pitch >= 4.37) {
      V2x4a16 = 9.4; V2x6a16 = 13.83; V2x8a16 = 17.4; V2x10a16 = 21.27;
      V2x4a24 = 7.7; V2x6a24 = 11.33; V2x8a24 = 14.3; V2x10a24 = 17.4;
    } else if (pitch < 4.37 && pitch >= 0) {
      V2x4a16 = 9.5; V2x6a16 = 14; V2x8a16 = 17.6; V2x10a16 = 21.5;
      V2x4a24 = 7.8; V2x6a24 = 11.5; V2x8a24 = 14.5; V2x10a24 = 17.6;
    }
  }

  if (psf == 60) {
    if (pitch >= 10.8) {
      V2x4a16 = 9.2; V2x6a16 = 13.4; V2x8a16 = 17; V2x10a16 = 20.7;
      V2x4a24 = 7.6; V2x6a24 = 11; V2x8a24 = 13.9; V2x10a24 = 16.9;
    } else if (pitch < 10.8 && pitch >= 9.38) {
      V2x4a16 = 9.25; V2x6a16 = 13.47; V2x8a16 = 17.08; V2x10a16 = 20.93;
      V2x4a24 = 7.63; V2x6a24 = 11.07; V2x8a24 = 13.97; V2x10a24 = 17.1;
    } else if (pitch < 9.38 && pitch >= 7.79) {
      V2x4a16 = 9.30; V2x6a16 = 13.53; V2x8a16 = 17.17; V2x10a16 = 21.17;
      V2x4a24 = 7.67; V2x6a24 = 11.13; V2x8a24 = 14.03; V2x10a24 = 17.3;
    } else if (pitch < 7.79 && pitch >= 6.38) {
      V2x4a16 = 9.35; V2x6a16 = 13.6; V2x8a16 = 17.25; V2x10a16 = 21.4;
      V2x4a24 = 7.7; V2x6a24 = 11.2; V2x8a24 = 14.1; V2x10a24 = 17.5;
    } else if (pitch < 6.38 && pitch >= 4.37) {
      V2x4a16 = 9.4; V2x6a16 = 13.67; V2x8a16 = 17.33; V2x10a16 = 21.63;
      V2x4a24 = 7.73; V2x6a24 = 11.27; V2x8a24 = 14.17; V2x10a24 = 17.7;
    } else if (pitch < 4.37 && pitch >= 0) {
      V2x4a16 = 9.5; V2x6a16 = 13.8; V2x8a16 = 17.5; V2x10a16 = 22.1;
      V2x4a24 = 7.8; V2x6a24 = 11.4; V2x8a24 = 14.3; V2x10a24 = 18.1;
    }
  }

  /*Normal*/
  /*16" spacing*/
  if (span == 0) {
    allr();
  } else if (span <= V2x10a16 && span > V2x8a16) {
    $("#light4").css("background-color", (red));
    $("#light6").css("background-color", (red));
    $("#light8").css("background-color", (red));
    $("#light10").css("background-color", (green));
  } else if (span <= V2x8a16 && span > V2x6a16) {
    $("#light4").css("background-color", (red));
    $("#light6").css("background-color", (red));
    $("#light8").css("background-color", (green));
    $("#light10").css("background-color", (green));
  } else if (span <= V2x6a16 && span > V2x4a16) {
    $("#light4").css("background-color", (red));
    $("#light6").css("background-color", (green));
    $("#light8").css("background-color", (green));
    $("#light10").css("background-color", (green));
  } else if (span <= V2x4a16 && span > 0) {
    $("#light4").css("background-color", (green));
    $("#light6").css("background-color", (green));
    $("#light8").css("background-color", (green));
    $("#light10").css("background-color", (green));
  } else {
    $("#light4").css("background-color", (red));
    $("#light6").css("background-color", (red));
    $("#light8").css("background-color", (red));
    $("#light10").css("background-color", (red));
  }
  /*24" spacing*/
  if (span == 0) {
    allr();
  } else if (span <= V2x10a24 && span > V2x8a24) {
    $("#light42").css("background-color", (red));
    $("#light62").css("background-color", (red));
    $("#light82").css("background-color", (red));
    $("#light102").css("background-color", (green));
  } else if (span <= V2x8a24 && span > V2x6a24) {
    $("#light42").css("background-color", (red));
    $("#light62").css("background-color", (red));
    $("#light82").css("background-color", (green));
    $("#light102").css("background-color", (green));
  } else if (span <= V2x6a24 && span > V2x4a24) {
    $("#light42").css("background-color", (red));
    $("#light62").css("background-color", (green));
    $("#light82").css("background-color", (green));
    $("#light102").css("background-color", (green));
  } else if (span <= V2x4a24 && span > 0) {
    $("#light42").css("background-color", (green));
    $("#light62").css("background-color", (green));
    $("#light82").css("background-color", (green));
    $("#light102").css("background-color", (green));
  } else {
    $("#light42").css("background-color", (red));
    $("#light62").css("background-color", (red));
    $("#light82").css("background-color", (red));
    $("#light102").css("background-color", (red));
  }

  /* Brookhaven */
  /* 16" spacing */
  if (span <= 21.92 && span > 17.92) {
    $("#light43").css("background-color", (red));
    $("#light63").css("background-color", (red));
    $("#light83").css("background-color", (red));
    $("#light103").css("background-color", (green));
  } else if (span <= 17.92 && span > 14.17) {
    $("#light43").css("background-color", (red));
    $("#light63").css("background-color", (red));
    $("#light83").css("background-color", (green));
    $("#light103").css("background-color", (green));
  } else if (span <= 14.17 && span > 9.17) {
    $("#light43").css("background-color", (red));
    $("#light63").css("background-color", (green));
    $("#light83").css("background-color", (green));
    $("#light103").css("background-color", (green));
  } else if (span <= 9.17 && span > 0) {
    $("#light43").css("background-color", (green));
    $("#light63").css("background-color", (green));
    $("#light83").css("background-color", (green));
    $("#light103").css("background-color", (green));
  } else if (span > 21.92) {
    $("#light43").css("background-color", (red));
    $("#light63").css("background-color", (red));
    $("#light83").css("background-color", (red));
    $("#light103").css("background-color", (red));
  }

  /* 24" spacing */
  if (span <= 17.83 && span > 14.67) {
    $("#light44").css("background-color", (red));
    $("#light64").css("background-color", (red));
    $("#light84").css("background-color", (red));
    $("#light104").css("background-color", (green));
  } else if (span <= 14.67 && span > 11.41) {
    $("#light44").css("background-color", (red));
    $("#light64").css("background-color", (red));
    $("#light84").css("background-color", (green));
    $("#light104").css("background-color", (green));
  } else if (span <= 11.41 && span > 7.25) {
    $("#light44").css("background-color", (red));
    $("#light64").css("background-color", (green));
    $("#light84").css("background-color", (green));
    $("#light104").css("background-color", (green));
  } else if (span <= 7.25 && span > 0) {
    $("#light44").css("background-color", (green));
    $("#light64").css("background-color", (green));
    $("#light84").css("background-color", (green));
    $("#light104").css("background-color", (green));
  } else if (span > 17.83) {
    $("#light44").css("background-color", (red));
    $("#light64").css("background-color", (red));
    $("#light84").css("background-color", (red));
    $("#light104").css("background-color", (red));
  }
}