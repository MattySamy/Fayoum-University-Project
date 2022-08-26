var color =    document.documentElement.style ;
 
    function light() {
    color.setProperty('--bg1', '#c2c2c4');
    color.setProperty('--bg2', '#e2e2e4');
    color.setProperty('--boxShadow', '#a1a1a3');
    color.setProperty('--Shadow1', '#848486');
    color.setProperty('--Shadow2', '#fcfcfe');
    color.setProperty('--S1forI', '#ececee');
    color.setProperty('--S2forI', '#8a8b8e');
 
    document.getElementById('lt').style.display="none";
    document.getElementById('drk').style.display="block";
}
 
    function dark() {
    color.setProperty('--bg1', '#020204');
    color.setProperty('--bg2', '#323234');
    color.setProperty('--boxShadow', '#010103');
    color.setProperty('--Shadow1', '#040406');
    color.setProperty('--Shadow2', '#444446');
    color.setProperty('--S1forI', '#2a2a2c');
    color.setProperty('--S2forI', '#020305');
 
    document.getElementById('lt').style.display="block";
    document.getElementById('drk').style.display="none";
}