var isNumber = false;
const keyboard_sinhala = `
<div class="card" style="margin-bottom:20px;">
    <div class="card-body">
        <div class="container-fluid outerWrapper container-keybord-keypad">
        <div class="row" id="inputTextRow">
            <div class="col" id="inputTextCol">
                <input type="text" class="form-control" id="inputText" name="inputText" oninput="getSuggestion(this,1)" readonly focusable />
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
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">අ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ඊ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ඉ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">උ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">එ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ඔ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ඤ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ඥ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">ං</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character number">්‍ය</button></div>
            </div>
            <div class="row">
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ක</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ඛ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ග</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ඝ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ඞ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ඟ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ච</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ඡ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ජ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord character">ඣ</button></div>
            </div>
            <div class="row">
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ට</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඨ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඩ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඪ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ණ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඬ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ත</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ථ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ද</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ධ</button></div>
            </div>
            <div class="row row-second-padding">
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">න</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඳ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ප</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඵ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">බ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">භ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ම</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ඹ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ය</button></div>
            </div>
            <div class="row row-second-padding">

                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ර</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ල</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ව</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ශ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ෂ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ස</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">හ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ළ</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord">ෆ</button></div>
            </div>
            <div class="row">
                <div class="col container-keybord-key"><button type="button" onclick="loadNumber()" class="btn btn-primary btn-block btn-keybord">1 2 3</button></div>
                <div class="col container-keybord-key"><button type="button" onclick="loadSymbol()" class="btn btn-primary btn-block btn-keybord"> &#64; / . - </button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardSpaceButtonClick()" class="btn btn-primary btn-block btn-keybord"> &nbsp; </button></div>
                <div class="col container-keybord-key"><button type="button" onclick="keyboardDeleteButtonClick()" class="btn btn-primary btn-block btn-keybord" id="deleteKey">මකන්න</button></div>
                <div class="col-md-3 container-keybord-key"><button type="button" onclick="keyboardEnterButtonClick()" class="btn btn-primary btn-block btn-keybord btn-enter">යොමු කිරීම</button></div>
            </div>
        </div>
    </div>
</div></div></div>
`;