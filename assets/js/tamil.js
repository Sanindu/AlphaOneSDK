var isNumber = false;
const keyboard_tamil = `
<div class="card" style="margin-bottom:20px;">
<div class="card-body" style="background-color:#dddddd; box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);">
<div class="container-fluid outerWrapper container-keybord-keypad">
<div class="row" id="inputTextRow">
            <div class="col" id="inputTextCol">
                <input type="text" class="form-control" id="inputText" name="inputText" oninput="getSuggestion(this,2)" readonly focusable />
            </div>
        </div>
        <div class="row">
            <button class='btn btn-primary' id="backButton" onclick="goBack()"><i class='fas fa-angle-left'></i></button>
            <div class="col" id="suggestionBarCol">
                <div id="suggestionList">
                </div>
            </div>
            <button class='btn btn-primary' id="nextButton" onclick="goNext()"><i class='fas fa-angle-right'></i></button>
        </div>
        <div class="row">
            <div class="col-5">
                <div class="row" id="v1">
                
            </div>
            <div class="row" id="v2">
                
            </div>
            <div class="row" id="v3">
                
            </div>
            <div class="row" id="v4">
                
            </div>
            <div class="row" id="v5">
                
            </div>
            </div>
    <div class="col-7">
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ஃ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">அ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ஆ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">இ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ஈ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">உ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">எ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ஐ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ஒ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ஸ்ரீ</button></div>
    </div>
    <div class="row row-second-padding">

        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">க</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ங</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ச</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ஞ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ட</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ண</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">த</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ந</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ப</button></div>

    </div>
    <div class="row row-second-padding">

        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ம</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ய</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ர</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ல</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">வ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ழ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ள</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ற</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ன</button></div>

    </div>
    <div class="row row-third-padding">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ஶ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ஜ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ஷ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ஸ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ஹ</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">க்ஷ</button></div>

    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="loadNumber()" class="btn btn-primary btn-block btn-keybord">1 2 3</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="loadSymbol()" class="btn btn-primary btn-block btn-keybord"> &#64; / . - </button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardSpaceButtonClick()" class="btn btn-primary btn-block btn-keybord"> &nbsp; </button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardDeleteButtonClick()" class="btn btn-primary btn-block btn-keybord">அழி</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnterButtonClick()" class="btn btn-primary btn-block btn-keybord btn-enter">சமர்ப்பி</button></div>
    </div>
    </div>
</div></div></div>

`;