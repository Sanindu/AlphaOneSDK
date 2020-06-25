"use strict";
var apikey;
var responseObj = "";
var recognition = "";
var context = new AudioContext();
var addressJson = {
  country: "string",
  province: "string",
  distict: "string",
  divisionalSecretariat: "string",
  city: "string",
  postalCode: "string",
  gramaNiladariDivision: "string",
  street: "string",
  house: "string",
};
var alphaone = {
  /**
   * Get the session key for authorizing API calls
   * Request parameter is the customer licence key
   * On success the API return session key
   * The session key stores in cookie under name called "alphaOneSessionKey"
   */
  validateLicence: function (licence, callback) {
    const xhr = new XMLHttpRequest();
    const endpoint = BASEURL + "ValidateLicense";
    xhr.open("POST", endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    var data = {
      userKey: {
        sdkId: 1,
        licenseKey: licence,
        location: {
          ip: "127.0.0.1",
          gps: {
            lat: 7.8731,
            log: 80.7718
          }
        }
      },
      request: {},
    };
    data = JSON.stringify(data);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          var response = JSON.parse(xhr.responseText);
          if (response.response.sessionKey == undefined) {
            console.log("Error");
          } else {
            console.log("SessionKey: " + response.response.sessionKey);
            document.cookie = SESSIONKEY + "=" + response.response.sessionKey;
            callback.apply(response);
          }
        } else {
          console.log(xhr.status);
        }
      }
    };
  },
  /**
   * Get translated word list
   */
  translate: function (
    fromLanguage,
    toLanguage,
    message,
    option,
    type,
    vendor,
    callback
  ) {
    // Check sessionkey
    if (this.getCookie("alphaOneSessionKey") == "") {
      console.log("Session key was not found.");
    } else {
      const xhr = new XMLHttpRequest();
      const endpoint = BASEURL + "Translate";
      xhr.open("POST", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      var data = {
        userKey: {
          sdkId: 1,
          sessionKey: this.getCookie("alphaOneSessionKey"),
          location: {
            ip: "127.0.0.1",
            gps: {
              lat: 7.8731,
              log: 80.7718
            }
          }
        },
        request: {
          fromLanguage: parseInt(fromLanguage),
          toLanguage: parseInt(toLanguage),
          message: message,
          option: option,
          type: type,
          vendor: vendor,
        },
      };
      data = JSON.stringify(data);
      xhr.send(data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            var objectJSON = JSON.parse(xhr.responseText);
            callback.apply(objectJSON);
          } else {
            console.log("Error: " + xhr.status);
          }
        }
      };
    }
  },
  /**
   * Get translated word list for address
   */
  translateAddress: function (
    fromLanguage,
    toLanguage,
    field,
    message,
    vendor,
    callback
  ) {
    // Check sessionkey
    if (this.getCookie("alphaOneSessionKey") == "") {
      console.log("Session key was not found.");
    } else {
      const xhr = new XMLHttpRequest();
      const endpoint = BASEURL + "AddressTranslation";
      xhr.open("POST", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      var data = {
        userKey: {
          sdkId: 1,
          sessionKey: this.getCookie("alphaOneSessionKey"),
          location: {
            ip: "127.0.0.1",
            gps: {
              lat: 7.8731,
              log: 80.7718
            }
          }
        },
        request: {
          fromLang: parseInt(fromLanguage),
          toLang: parseInt(toLanguage),
          feildId: parseInt(field),
          country: message.country,
          province: message.province,
          distict: message.distict,
          divisionalSecretariat: message.divisionalSecretariat,
          city: message.city,
          postalCode: message.postalCode,
          gramaNiladariDivision: message.gramaNiladariDivision,
          street: message.street,
          house: message.house,
          vendor: vendor,
          option: 1,
        },
      };
      data = JSON.stringify(data);
      xhr.send(data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            var objectJSON = JSON.parse(xhr.responseText);
            callback.apply(objectJSON);
          } else {
            console.log("Error: " + xhr.status);
          }
        }
      };
    }
  },
  /**
   * Get suggested word list
   */
  suggestion: function (fromLanguage, toLanguage, message, callback) {
    // Check sessionkey
    if (this.getCookie("alphaOneSessionKey") == "") {
      console.log("Session key was not found.");
    } else {
      const xhr = new XMLHttpRequest();
      const endpoint = BASEURL + "Suggestion";
      xhr.open("POST", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      var data = {
        userKey: {
          sdkId: 1,
          sessionKey: this.getCookie("alphaOneSessionKey"),
          location: {
            ip: "127.0.0.1",
            gps: {
              lat: 7.8731,
              log: 80.7718
            }
          }
        },
        request: {
          languageId: parseInt(fromLanguage),
          message: message,
          sortId: 1,
        },
      };
      data = JSON.stringify(data);
      xhr.send(data);
      xhr.onload = function () {
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            var objectJSON = JSON.parse(xhr.responseText);
            callback.apply(objectJSON);
          } else {
            console.log("Error: " + xhr.status);
          }
        }
      };
    }
  },
  /**
   * Get suggested word list for address
   */
  suggestionAddress: function (lang, field, message, callback) {
    // Check sessionkey
    if (this.getCookie("alphaOneSessionKey") == "") {
      console.log("Session key was not found.");
    } else {
      const xhr = new XMLHttpRequest();
      const endpoint = BASEURL + "AddressSuggestion";
      xhr.open("POST", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      var data = {
        userKey: {
          sdkId: 1,
          sessionKey: this.getCookie("alphaOneSessionKey"),
          location: {
            ip: "127.0.0.1",
            gps: {
              lat: 7.8731,
              log: 80.7718
            }
          }
        },
        request: {
          langId: lang,
          feildId: field,
          sortId: 1,
          value: message
        },
      };
      data = JSON.stringify(data);
      xhr.send(data);
      xhr.onload = function () {
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            var objectJSON = JSON.parse(xhr.responseText);
            callback.apply(objectJSON);
          } else {
            console.log("Error: " + xhr.status);
          }
        }
      };
    }
  },
  /**
   * Play audio prompt with BASE64 string from database
   */
  audio: function (id, language, callback) {
    // Check sessionkey
    if (this.getCookie("alphaOneSessionKey") == "") {
      console.log("Session key was not found.");
    } else {
      const xhr = new XMLHttpRequest();
      const endpoint = BASEURL + "GetAudio";
      xhr.open("POST", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      var data = {
        userKey: {
          sdkId:1,
          sessionKey: this.getCookie("alphaOneSessionKey"),
          location: {
            ip: "127.0.0.1",
            gps: {
              lat: 7.8731,
              log: 80.7718
            }
          }
        },
        request: {
          audioId: parseInt(id),
          languageId: parseInt(language),
        },
      };
      data = JSON.stringify(data);
      xhr.send(data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            var objectJSON = JSON.parse(xhr.responseText);
            callback.apply(objectJSON);
          } else {
            console.log("Error: " + xhr.status);
          }
        }
      };
    }
  },
  /**
   * Play audio prompt with file inside SDK
   */
  audioFile: function (filePath) {
    var au = new Audio(filePath);
    au.type = "audio/mpeg";
    try {
      au.play();
    } catch (error) {
      console.log("Failed to play, " + error);
    }
  },
  /**
   * Play audio prompt with URL
   */
  audioURL: (url) => {
    //alert(fileName);
    var au = new Audio(url);
    au.type = "audio/mpeg";
    au.play();
  },
  speech: (control, lang, callback) => {
    window.SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;
    let finalTranscript = "";
    recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    recognition.continuous = true;
    var textElement = document.getElementById(control);
    textElement.value = "";
    recognition.lang = lang;
    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (
        let i = event.resultIndex, len = event.results.length;
        i < len;
        i++
      ) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      recognition.stop();
    };
    recognition.onend = () => {
      var english = /^[A-Za-z0-9]*$/;
      if (lang == "si-LK" && english.test(finalTranscript) ) {
        alert("ශබ්ද හඳුනාගැනීම වැරදියි, යතුරුපුවරුව භාවිතා කරන්න");
      }
      else if (lang == "ta-IN" && english.test(finalTranscript)) {
        alert("குரல் மறுசீரமைப்பு தவறு, விசைப்பலகை பயன்படுத்தவும்");
      }
      else{
        textElement.value = finalTranscript;
        textElement.oninput();
      }
      callback.apply();
    };
    recognition.start();
  },
  longSpeech: (control, lang) => {
    window.SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;
    let finalTranscript = "";
    recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    recognition.continuous = true;
    var textElement = document.getElementById(control);
    textElement.value = "";
    recognition.lang = lang;
    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (
        let i = event.resultIndex, len = event.results.length;
        i < len;
        i++
      ) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
          textElement.value = interimTranscript;
        }
      }
    };
    recognition.onend = () => {
      var english = /^[A-Za-z0-9]*$/;
      if (lang == "si-LK" && english.test(finalTranscript)) {
        alert("ශබ්ද හඳුනාගැනීම වැරදියි, යතුරුපුවරුව භාවිතා කරන්න");
      }
      else if (lang == "ta-IN" && english.test(finalTranscript)) {
        alert("குரல் மறுசீரமைப்பு தவறு, விசைப்பலகை பயன்படுத்தவும்");
      }
      else {
        textElement.value = finalTranscript;
        textElement.oninput();
      }
      callback.apply();
    };
    recognition.start();
  },
  stopMic: () => {
    if (recognition == "") {
      //
    } else {
      recognition.stop();
    }
  },
  updateNameSuggestion: (lang, word, callback) => {
    // Check sessionkey
    if (this.getCookie("alphaOneSessionKey") == "") {
      console.log("Session key was not found.");
    } else {
      const xhr = new XMLHttpRequest();
      const endpoint = BASEURL + "UpdateNameSuggestion";
      xhr.open("POST", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      var data = {
        userKey: {
          sessionKey: this.getCookie("alphaOneSessionKey"),
        },
        request: {
          languageId: parseInt(lang),
          suggestedWord: word,
        },
      };
      data = JSON.stringify(data);
      xhr.send(data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            var objectJSON = JSON.parse(xhr.responseText);
            callback.apply(objectJSON);
          } else {
            console.log("Error: " + xhr.status);
          }
        }
      };
    }
  },
  updateNameTranslation: (
    fromLangId,
    fromLangWord,
    toLangId,
    toLangWord,
    callback
  ) => {
    // Check sessionkey
    if (alphaone.getCookie("alphaOneSessionKey") == "") {
      console.log("Session key was not found.");
    } else {
      const xhr = new XMLHttpRequest();
      const endpoint = BASEURL + "UpdateNameTranslation";
      xhr.open("POST", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      var data = {
        userKey: {
          sessionKey: alphaone.getCookie("alphaOneSessionKey"),
        },
        request: {
          fromLanguageId: parseInt(fromLangId),
          fromLanguageValue: fromLangWord,
          toLanguageId: parseInt(toLangId),
          toLanguageValue: toLangWord,
        },
      };
      data = JSON.stringify(data);
      xhr.send(data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            var objectJSON = JSON.parse(xhr.responseText);
            callback.apply(objectJSON);
          } else {
            console.log("Error: " + xhr.status);
          }
        }
      };
    }
  },
  /**
   * Decode session key in the cookie and return back to calling method
   * Take cookie name as parameter
   * Retuen value of the cookie
   */
  getCookie: function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
};
