function TopBar(Id, Page){
    document.getElementById(Id).style.backgroundColor = "#e2f0ff";
    document.getElementById(Page).style.display = "block";
    const TopBarButtons = ['buttonACCOUNT','buttonWATCHLIST','buttonQUOTE','buttonMORE'];
    const Sections = ['ACCOUNT','WATCHLIST','QUOTE','MORE']
    for (let i = 0; i < TopBarButtons.length; i++){
        if (TopBarButtons[i] != Id){
            document.getElementById(TopBarButtons[i]).style.backgroundColor = "#ffffff";
        }
        if (Sections[i] != Page){
            document.getElementById(Sections[i]).style.display = 'none'
        }
    }    
}

function threebars(){
    document.getElementById('greyscreen').style.display = 'inline-block'
}

function SearchBox(Id) {
    if (Id === 'second-first') {
        document.getElementById("second-first").style.display = 'none';
        document.getElementById("second-second").style.display = 'block';
    }
    else {
        document.getElementById("second-first").style.display = 'block';
        document.getElementById("second-second").style.display = 'none';
    }
}

function STKOPT(Id) {
    document.getElementById(Id).style.backgroundColor = 'rgb(21, 39, 110)';
    document.getElementById(Id).style.color = '#a6b8cb';
    if (Id == 'OPT'){
        document.getElementById('STK').style.backgroundColor = '#a6b8cb';
        document.getElementById('STK').style.color = 'rgb(21, 39, 110)';
    }
    else {
        document.getElementById('OPT').style.backgroundColor = '#a6b8cb';
        document.getElementById('OPT').style.color = 'rgb(21, 39, 110)';
    }
}
function BPO(Id,Page){
    const BPOs = ['Balance','Positions','Orders'];
    const BPOs1 = ['Balance1','Positions1','Orders1']
    document.getElementById(Id).style.borderBottom = "solid";
    document.getElementById(Page).style.display = "block";
    for (let i = 0; i < BPOs.length; i++){
        if (BPOs[i] != Id){
            document.getElementById(BPOs[i]).style.borderBottom = "hidden";
        }
    }    
    for (let i = 0; i < BPOs.length; i++){
        if (BPOs1[i] != Page){
            document.getElementById(BPOs1[i]).style.display = "none";
        }
    } 
}
function Current() {
    document.getElementById("Current").style.color = "#ffffff";
    document.getElementById("Current").style.backgroundColor = "#0352ab";
    document.getElementById("SoD").style.color = "#0352ab";
    document.getElementById("SoD").style.backgroundColor = "#ffffff";
}

function SoD() {
    document.getElementById("Current").style.color = "#0352ab";
    document.getElementById("Current").style.backgroundColor = "#ffffff";
    document.getElementById("SoD").style.color = "#ffffff";
    document.getElementById("SoD").style.backgroundColor = "#0352ab";

}

function Combined(){
    if (document.getElementById("FilledCheckmark").style.display === "none"){
        document.getElementById("EmptyCheckmark").style.display = "none";
        document.getElementById("FilledCheckmark").style.display = "inline";
    }

    else{
        document.getElementById("EmptyCheckmark").style.display = "inline";
        document.getElementById("FilledCheckmark").style.display = "none";
    }
}

function AOE(Id){
    const AOEs = ["All", "Open", "Executed"];
    document.getElementById(Id).style.backgroundColor = "#006ae3";
    document.getElementById(Id).style.color = "white";
    for (let i = 0; i < AOEs.length; i++) {
        if (AOEs[i] != Id) {
            document.getElementById(AOEs[i]).style.backgroundColor = "white";
            document.getElementById(AOEs[i]).style.color = "#006ae3";
        }
    }
    if (Id == "Open") {
        document.getElementById("timewindow").style.display = "none";
    }
    else {
        document.getElementById("timewindow").style.display = "inline-block"
    }
}

function timewindow() {
    document.getElementById("timewindow").disabled = true;
    greyscreen('open');
    document.getElementById("timewindow").style.borderColor = "green"
    document.getElementById("timewindow").style.borderWidth = "2px"
    document.getElementById("popuptable").style.display = "block"
}

function windowselector(Id){
    const brand = ["Today","oneWk","twoWks","oneMth"];
    var name = "";
    for (let i = 0; i < brand.length; i++) {
        document.getElementById(brand[i] + "circle").style.borderColor = "grey";
        document.getElementById(brand[i]+ "innercircle").style.display = "none"
    }
    document.getElementById(Id + 'circle').style.borderColor = 'rgb(54, 191, 249)'
    document.getElementById(Id + 'innercircle').style.display = "inline";
    if (Id == "oneWk"){
        document.getElementById("timewindowcontent").innerHTML = "1 Week"
    }
    if (Id == "twoWks"){
        document.getElementById("timewindowcontent").innerHTML = "2 Weeks" 
    }
    if (Id == "Today"){
        document.getElementById("timewindowcontent").innerHTML = "Today"
    }
    if (Id == "oneMth"){
        document.getElementById("timewindowcontent").innerHTML = "1 Month"
    }
    
    document.getElementById("timewindow").innerHTML.append('<i class="fa-solid fa-caret-down" style="background-color: #f1f1f1; padding-left: 1; font-size: 11px;"> </i>')

}

function greyscreen(command){
    var slideSource = document.getElementById('greyscreen');
    if (command == "close"){
        document.getElementById("greyscreen").disabled = true;
        setTimeout(function(){
            document.getElementById("timewindow").disabled = false;
        },300)
        
        slideSource.classList.toggle('fade');
        document.getElementById('timewindow').style.borderColor = 'grey'
        document.getElementById('timewindow').style.borderWidth = '0.5px'
        document.getElementById("popuptable").style.display = "none"
        setTimeout(function(){
            slideSource.style.zIndex = -1
        },300)
    }
    else{
        document.getElementById("greyscreen").disabled = false;
        slideSource.style.zIndex = 9999999
        slideSource.classList.toggle('fade');
    }
    
}

function secretmenu(action){
    var slideSource = document.getElementById('secretmenu');
    
    if (action == "close"){
        document.getElementById("X-Mark-secretmenu").disabled = true;
        document.getElementById("threebars").disabled = false;
        slideSource.classList.toggle('fade');
        setTimeout(function(){
            slideSource.style.zIndex = -1
        },300)
    }
    else {
        document.getElementById("X-Mark-secretmenu").disabled = false;
        document.getElementById("threebars").disabled = true;
        slideSource.style.zIndex = 4345345499;
        slideSource.classList.toggle('fade')
        
    }
}

function Level1(action){
	if (action == "open"){
		document.getElementById("level1table").style.display = "inline-table"
        document.getElementById("q2side").style.display = "none"
        document.getElementById("q2down").style.display = "inline"
	}
    else{
        document.getElementById("level1table").style.display = "none"
        document.getElementById("q2side").style.display = "inline"
        document.getElementById("q2down").style.display = "none"
    }

}