const keyboard_sinhala_profession = `
<div class="card">
<div class="card-body" style="background-color:#dddddd; box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.75);">
<div id="keybordWindow">
    <div>
        <div class="container-fluid outerWrapper container-keybord-keypad">     
            <div class="row" id="inputTextRow">
                <div class="col" id="inputTextCol">
                    <input type="text" class="form-control" id="inputText" name="inputText" oninput="getSuggestion(this)" readonly focusable />
                </div>
            </div>            
            <div class="row">
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඉංජිනේරු</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඩොක්ටර්</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">වෙළෙන්දා</button></div>
            </div>
 
            <div class="row">
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">කොන්ත්‍රාත්කරු</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ගුරු</button></div>
            </div>

            <div class="row">

            </div>

            <div class="row">
                <div class="col container-keybord-key"><button type="button" onclick="keyboardDeleteWordButtonClick()" class="btn btn-primary btn-block btn-keybord" style="background-color: #333333">මකන්න</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardEnterButtonClick('enter')" class="btn btn-primary btn-block btn-keybord btn-enter" style="background-color: #002261">යොමු කිරීම</button></div>
            </div>

        </div>
    </div>
</div>
</div></div>
`;