const keyboard_english_nic = `
<div class="card" style="margin-bottom:20px; border:0;">
<div class="card-body">
<div class="container-fluid outerWrapper container-keybord-keypad">
    <div class="row" id="inputTextRow">
        <div class="col" id="inputTextCol">
            <input type="text" class="form-control" id="inputText" name="inputText" oninput="getSuggestion(this)" readonly focusable />
        </div>
    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">1</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">2</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">3</button></div>
    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">4</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">5</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">6</button></div>
    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">7</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">8</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">9</button></div>
    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">X</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">0</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardNICButtonClick(this)" class="btn btn-primary btn-block btn-keybord">V</button></div>
    </div>
    <div class="row">
        <div class="col container-keybord-key"><button type="button" onclick="keyboardDeleteButtonClick()" class="btn btn-primary btn-block btn-keybord">Delete</button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardSpaceButtonClick()" class="btn btn-primary btn-block btn-keybord"> &nbsp; </button></div>
        <div class="col container-keybord-key"><button type="button" onclick="keyboardEnterButtonClick()" class="btn btn-primary btn-block btn-keybord btn-enter">Enter</button></div>
    </div>
</div></div></div>
`;