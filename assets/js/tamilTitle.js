const keyboard_tamil_title = `
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
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">திரு</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">திருமதி</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">செல்வி</button></div>
            </div>
 
            <div class="row">
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">டாக்டர்</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">பேராசிரியர்</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">வணக்கத்துக்குரிய</button></div>
            </div>

            <div class="row">

            </div>

            <div class="row">
                <div class="col container-keybord-key"><button type="button" onclick="keyboardDeleteWordButtonClick()" class="btn btn-primary btn-block btn-keybord" style="background-color: #333333">அழி</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardTitleButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ஐயா</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardEnterButtonClick('enter')" class="btn btn-primary btn-block btn-keybord btn-enter" style="background-color: #002261">சமர்ப்பி</button></div>
            </div>

        </div>
    </div>
</div>
</div></div>
`;