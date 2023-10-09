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

