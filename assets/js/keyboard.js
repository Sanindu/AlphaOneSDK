let keyboard = {
    TextBox: "",
    KeyboardLayoutPlaceHolder: "",
    AddressField: 0,
    getKeyboard: function (keyboard_type) {
        switch (keyboard_type) {
            case 1:
                return keyboard_sinhala;
                break;
            case 2:
                return keyboard_tamil;
                break;
            case 3:
                return keyboard_english;
                break;
            case 4:
                return keyboard_english_nic;
                break;
            case 5:
                return keyboard_numberpad;
                break;
            case 6:
                return keyboard_english_title;
                break;
            case 7:
                return keyboard_english_question;
                break;
            case 8:
                return keyboard_sinhala_title;
                break;
            case 9:
                return keyboard_sinhala_profession;
                break;
            case 10:
                return keyboard_english_profession;
                break;
            case 11:
                return keyboard_tamil_title;
                break;
            case 12:
                return keyboard_tamil_profession;
                break;
            case 13:
                return keyboard_sinhala_nic;
                break;
            case 14:
                return keyboard_tamil_nic;
                break;
            case 15:
                return keyboard_sinhala_numberpad;
                break;
            case 16:
                return keyboard_tamil_numberpad;
                break;
            case 17:
                return keyboard_sinhala_housenumber;
                break;
            case 18:
                return keyboard_tamil_housenumber;
                break;
            case 19:
                return keyboard_english_housenumber;
                break;
            case 20:
                return keyboard_sinhala_email;
                break;
            case 21:
                return keyboard_tamil_email;
                break;
            case 22:
                return keyboard_english_email;
                break;
            default:
                return keyboard_english;
                break;
        }
    },
};
var lastPressedSinhalaKey = "";
var lastPressedTamilKey = "";
/**
 * Handle NIC keyboard numeric keys
 */
function keyboardNICButtonClick(key) {
    if (key == undefined) {
        console.log(MSG_KEYNOTFOUND);
        return false;
    }
    var text_box = document.getElementById("inputText");
    text_box.value += key.innerHTML;
}

/**
 * Handle Title keyboard keys
 */
function keyboardTitleButtonClick(key) {
    if (key == undefined) {
        console.log(MSG_KEYNOTFOUND);
        return false;
    }
    var text_box = document.getElementById("inputText");
    text_box.value = key.innerHTML;
}

/**
 * Handle Numberpad keyboard keys
 */
function keyboardNumberButtonClick(key) {
    if (key == undefined) {
        console.log(MSG_KEYNOTFOUND);
        return false;
    }
    var text_box = document.getElementById("inputText");
    text_box.value += key.innerHTML;
}

function keyboardButtonClick(key) {
    // Check for place holder
    if (keyboard._place_holder == "") {
        console.log(MSG_PLACEHOLDERNOTFOUNT);
        return false;
    }
    // Check for empty key
    if (key==undefined) {
        console.log(MSG_KEYNOTFOUND);
        return false;
    }
    var text_box = document.getElementById("inputText");
    var text_box_value = text_box.value;
    var variationArray;
    switch (key.innerHTML) {
        case "අ":
            lastPressedSinhalaKey = "අ";
            variationArray = ["අ", "ආ", "ඇ", "ඈ", "අං", "අඃ"];
            text_box.value += key.innerHTML;
            break;
        case "උ":
            lastPressedSinhalaKey = "උ";
            variationArray = ["උ", "ඌ"];
            text_box.value += key.innerHTML;
            break;
        case "එ":
            lastPressedSinhalaKey = "එ";
            variationArray = ["එ", "ඒ"];
            text_box.value += key.innerHTML;
            break;
        case "ඔ":
            lastPressedSinhalaKey = "ඔ";
            variationArray = ["ඔ", "ඕ", ];
            text_box.value += key.innerHTML;
            break;
        case "ඊ":
            text_box.value += key.innerHTML;
            break;
        case "ඉ":
            text_box.value += key.innerHTML;
            break;
        case "්‍ය":
            text_box.value += key.innerHTML;
            break;
        case "ං":
            text_box.value += key.innerHTML;
            break;
        case "ஒ":
            lastPressedTamilKey = "ஒ";
            variationArray = ["ஒ", "ஓ", "ஔ"];
            text_box.value += key.innerHTML;
            break;
        case "உ":
            lastPressedTamilKey = "உ";
            variationArray = ["உ", "ஊ"];
            text_box.value += key.innerHTML;
            break;
        case "எ":
            lastPressedTamilKey = "எ";
            variationArray = ["எ", "ஏ"];
            text_box.value += key.innerHTML;
            break;
        case "அ":
            text_box.value += key.innerHTML;
            break;
        case "ஆ":
            text_box.value += key.innerHTML;
            break;
        case "இ":
            text_box.value += key.innerHTML;
            break;
        case "ஈ":
            text_box.value += key.innerHTML;
            break;
        case "ஸ்ரீ":
            text_box.value += key.innerHTML;
            break;
        default:
            if (key.innerHTML.charCodeAt(0) <= 200) {
                text_box.value += key.innerHTML;
            }
            // Tamil
            else if (key.innerHTML.charCodeAt(0) >= 2946 && key.innerHTML.charCodeAt(0) <= 3066) {
                // This is from variation print text on text box
                if (key.classList.contains("btn-variation")) {
                    if (lastPressedTamilKey == "") {
                        text_box.value = text_box.value.substring(0, text_box.value.length - 1) + key.innerHTML;
                    }
                    else {
                        text_box.value = text_box.value.replace(lastPressedTamilKey, '') + key.innerHTML;
                    }
                    lastPressedTamilKey = key.innerHTML;
                }
                else {
                    lastPressedTamilKey = "";
                    document.getElementById('v1').innerHTML = "";
                    document.getElementById('v2').innerHTML = "";
                    document.getElementById('v3').innerHTML = "";
                    document.getElementById('v4').innerHTML = "";
                    document.getElementById('v5').innerHTML = "";
                    var i = 0;
                    compoundLetterArrayListTamil.forEach(function (element) {
                        var compound = key.innerHTML + element.substring(1, element.length);
                        //alert(compound);
                        if (i <= 7) {
                            document.getElementById('v1').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${compound}</button></div>`;
                        }
                        else if (i <= 14) {
                            document.getElementById('v2').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${compound}</button></div>`;
                        }
                        else {
                            document.getElementById('v3').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${compound}</button></div>`;
                        }
                        i++;
                    });
                    text_box.value += key.innerHTML;
                }
            }
            else {
                // This is from variation print text on text box
                if (key.classList.contains("btn-variation")) {
                    if (lastPressedSinhalaKey == "") {
                        text_box.value = text_box.value.substring(0, text_box.value.length -1) + key.innerHTML;
                    }
                    else {
                        text_box.value = text_box.value.replace(lastPressedSinhalaKey, '') + key.innerHTML;
                    }
                    lastPressedSinhalaKey = key.innerHTML;
                }
                else {
                    lastPressedSinhalaKey = "";
                    document.getElementById('v1').innerHTML = "";
                    document.getElementById('v2').innerHTML = "";
                    document.getElementById('v3').innerHTML = "";
                    document.getElementById('v4').innerHTML = "";
                    document.getElementById('v5').innerHTML = "";
                    var i = 0;
                    compoundLetterArrayListSinhala.forEach(function (element) {
                        var compound = key.innerHTML + element.substring(1, element.length);
                        //alert(compound);
                        if (i <= 7) {
                            document.getElementById('v1').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${compound}</button></div>`;
                        }
                        else if (i <= 12) {
                            document.getElementById('v2').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${compound}</button></div>`;
                        }
                        else if(i <= 18) {
                            document.getElementById('v3').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${compound}</button></div>`;
                        }
                        else if (i <= 25) {
                            document.getElementById('v4').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${compound}</button></div>`;
                        }
                        else {
                            document.getElementById('v5').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${compound}</button></div>`;
                        }
                        i++;
                    });
                    text_box.value += key.innerHTML;
                }
                

            }
            break;
    }  

    if (variationArray != undefined && variationArray.length > 0) {
        document.getElementById('v1').innerHTML = "";
        document.getElementById('v2').innerHTML = "";
        document.getElementById('v3').innerHTML = "";
        document.getElementById('v4').innerHTML = "";
        document.getElementById('v5').innerHTML = "";
        variationArray.forEach(function (element) {
           document.getElementById('v1').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${element}</button></div>`;
        });
    }
    else {
        //document.getElementById('v1').innerHTML = "";
        //document.getElementById('v2').innerHTML = "";
    }
    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
    text_box.dispatchEvent(event);
}
// Handle all keyboards Enter button
function keyboardDeleteButtonClick() {
    var text_box = document.getElementById("inputText");
    var text_box_value = text_box.value;
    text_box.value = text_box_value.substring(0, text_box_value.length - 1);
    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
    text_box.dispatchEvent(event);
    document.getElementById('v1').innerHTML = "";
    document.getElementById('v2').innerHTML = "";
    document.getElementById('v3').innerHTML = "";
    document.getElementById('v4').innerHTML = "";
    document.getElementById('v5').innerHTML = "";
    lastPressedSinhalaKey = '';
    lastPressedTamilKey = '';

}

function keyboardDeleteWordButtonClick() {
    // Delete entire word
    document.getElementById("inputText").value = "";
}

function keyboardEnterButtonClick() {
    document.getElementById(keyboard.TextBox).value = document.getElementById("inputText").value.trim();
    document.getElementById(keyboard.TextBox).oninput();
    document.getElementById(keyboard.KeyboardLayoutPlaceHolder).innerHTML = "";
    document.getElementById('kb-modal').click();
}

function keyboardSpaceButtonClick() {
    var text_box = document.getElementById("inputText");
    var text_box_value = text_box.value;
    text_box.value += " ";
}

function toggleSymbol(lang) {
    
    var i = 0;
    if (isSymbol) {
        document.querySelectorAll('.character').forEach(element => {
            if (i < 27) {
                if (lang == "Sinhala") {
                    element.innerHTML = sinhalaArray[i];
                }
                else if (lang == "Tamil") {
                    element.innerHTML = tamilArray[i];
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
        isSymbol = false;
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
        isSymbol = true;
        document.getElementById("symbol").innerHTML = "abc"
    }
    
}

function loadNumber(lang) {

    document.getElementById('v1').innerHTML = "";
    document.getElementById('v2').innerHTML = "";
    document.getElementById('v3').innerHTML = "";
    document.getElementById('v4').innerHTML = "";
    document.getElementById('v5').innerHTML = "";
    var i = 0;
    numberArray.forEach(function (element) {
        //var compound = key.innerHTML + element.substring(1, element.length);
        //alert(compound);
        if (i < 10) {
            document.getElementById('v1').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${element}</button></div>`;
        }
        else if (i <= 20) {
            document.getElementById('v2').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${element}</button></div>`;
        }
        i++;
    });
}

function loadSymbol(lang) {

    document.getElementById('v1').innerHTML = "";
    document.getElementById('v2').innerHTML = "";
    document.getElementById('v3').innerHTML = "";
    document.getElementById('v4').innerHTML = "";
    document.getElementById('v5').innerHTML = "";
    var i = 0;
    symbolArray.forEach(function (element) {
        //var compound = key.innerHTML + element.substring(1, element.length);
        //alert(compound);
        if (i <= 10) {
            document.getElementById('v1').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${element}</button></div>`;
        }
        else if (i <= 20) {
            document.getElementById('v2').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${element}</button></div>`;
        }
        else {
            document.getElementById('v3').innerHTML += `<div class="col container-keybord-key"><button type="button" onclick="keyboardButtonClick(this)" class="btn btn-primary btn-block btn-keybord btn-variation">${element}</button></div>`;
        }
        i++;
    });


}

function getSuggestion(control,lang) {
    document.getElementById("suggestionList").innerHTML = "";
    var word = document.getElementById("inputText").value;
    switch (keyboard.AddressField) {
        case 0:
            alphaone.suggestion(lang, lang, word, getSuggestionResponse);
            break;
        case 5:
            alphaone.suggestionAddress(lang, CITY, word, getSuggestionAddressResponse);
            break;
        case 8:
            alphaone.suggestionAddress(lang, STREET, word, getSuggestionAddressResponse);
            break;
        case 9:
            alphaone.suggestionAddress(lang, HOUSE, word, getSuggestionAddressResponse);
            break;
        default:
            break;
    }
    
}

function getSuggestionResponse() {
    var wordArray = this.response.wordList;
    document.getElementById("suggestionList").innerHTML = "";
    wordArray.forEach((element) => {
        document.getElementById("suggestionList").innerHTML +=
            " <span class='word' onclick='addWord(this)' style='margin-left:8px; margin-right:8px;'>" + element + "</span><span style='color: #FFF;'>|</span>";
    });
}

function getSuggestionAddressResponse() {
    var wordArray = this.response;
    document.getElementById("suggestionList").innerHTML = "";
    wordArray.forEach((element) => {
        document.getElementById("suggestionList").innerHTML +=
            " <span class='word' onclick='addWord(this)' style='margin-left:8px; margin-right:8px;'> " + element.suggestion + " </span><span>|</span>";
    });
}

function addWord(control) {
    document.getElementById("inputText").value = control.innerHTML;
    control.classList.add("active");
}

function goNext() {
    document.getElementById("suggestionBarCol").scrollLeft += 100;
}
function goBack() {
    document.getElementById("suggestionBarCol").scrollLeft -= 100;
}


