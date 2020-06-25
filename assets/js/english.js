var isUpper = false;
var isSymbolEnglish = false;
const keyboard_english = `
<div class="card">
<div class="card-body" style="background-color:#dddddd; box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);">
<div class="container-fluid outerWrapper container-keybord-keypad">
<div class="row" id="inputTextRow">
            <div class="col" id="inputTextCol">
                <input type="text" class="form-control" id="inputText" name="inputText" oninput="getSuggestion(this,3)" readonly focusable />
            </div>
        </div>
        <div class="row" id="suggestionBarRow">
                        
                
<button class='btn btn-primary' id="backButton" onclick="goBack()"><i class='fas fa-angle-left'></i></button>
            <div class="col" id="suggestionBarCol">
            
                <div id="suggestionList">
                </div>
            </div>
            <button class='btn btn-primary' id="nextButton" onclick="goNext()"><i class='fas fa-angle-right'></i></button>
        </div>
    <div class="suggestion-panel-margin-bottom">
        <div class="row">
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">1</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">2</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">3</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">4</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">5</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">6</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">7</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">8</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">9</button></div>
            <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord number">0</button></div>
        </div>
    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">q</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">w</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">e</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">r</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">t</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">y</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">u</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">i</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">o</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">p</button></div>
    </div>
    <div class="row row-second-padding">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">a</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">s</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">d</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">f</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">g</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">h</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">j</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">k</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">l</button></div>

    </div>
    <div class="row row-third-padding">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">z</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">x</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">c</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">v</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">b</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">n</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">m</button></div>
    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">@</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">-</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">_</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">+</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">!</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">/</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">.</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">.com</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnglishButtonClick(this)" class="btn btn-primary btn-block btn-keybord">.lk</button></div>
    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="toggleCAPS()" class="btn btn-primary btn-block btn-keybord" id="caps">ABC</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="toggleSymbolEnglish()" class="btn btn-primary btn-block btn-keybord" id="symbol"> &#64; / . - </button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardSpaceButtonClick()" class="btn btn-primary btn-block btn-keybord"> &nbsp; </button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardDeleteButtonClick()" class="btn btn-primary btn-block btn-keybord">Delete</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnterButtonClick()" class="btn btn-primary btn-block btn-keybord btn-enter">Enter</button></div>
    </div>
</div></div></div>
`;

function toggleCAPS() {
    if (document.querySelector('#caps').innerHTML == "ABC") {
        document.querySelectorAll('.character').forEach(element => {

                element.innerHTML = element.innerHTML.toLocaleUpperCase();
            
        });
        document.querySelector('#caps').innerHTML = "abc";
        isUpper = true;
    }
    else {
        document.querySelector('#caps').innerHTML = "ABC";
        document.querySelectorAll('.character').forEach(element => {

                element.innerHTML = element.innerHTML.toLocaleLowerCase();

        });
        isUpper = false;
    }
}
function toggleSymbolEnglish(lang) {

    var i = 0;
    if (isSymbolEnglish) {
        document.querySelectorAll('.character').forEach(element => {
            if (i < 27) {
                if (isUpper) {
                    element.innerHTML = alphabetArray[i].toLocaleUpperCase();
                }
                else {
                    element.innerHTML = alphabetArray[i];
                }
                
            }
            else {
                element.innerHTML = "";
            }
            i++;
        });
        isSymbolEnglish = false;
        document.getElementById("symbol").innerHTML = " &#64; / . - "
    }
    else {
        document.querySelectorAll('.character').forEach(element => {
            if (i < 23) {
                element.innerHTML = symbolArray[i];
            }
            else {
                element.innerHTML = "";
            }
            i++;
        });
        isSymbolEnglish = true;
        document.getElementById("symbol").innerHTML = "abc"
    }

}
function keyboardEnglishButtonClick(key) {
    // Check for place holder
    if (keyboard._place_holder == "") {
        console.log(MSG_PLACEHOLDERNOTFOUNT);
        return false;
    }
    // Check for empty key
    if (key == undefined) {
        console.log(MSG_KEYNOTFOUND);
        return false;
    }
    var text_box = document.getElementById("inputText");
    text_box.value += key.innerHTML;

    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
    text_box.dispatchEvent(event);
        
}  

