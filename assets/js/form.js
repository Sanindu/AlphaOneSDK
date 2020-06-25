var form = {
    token: '',
    getToken: (formId, callback) => {
        /**
         * Get token and initiate form filling
         */
        if (formId == "") {
            alert("The provided form id is invalid, please provide correct one.");
        }
        else {
            const xhr = new XMLHttpRequest();
            const endpoint = BASEURL + "CreateFilledForm";
            xhr.open("POST", endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            var data = {
                userKey: {
                    sdkId: 1,
                    sessionKey: alphaone.getCookie("alphaOneSessionKey"),
                    location: {
                        ip: "127.0.0.1",
                        gps: {
                          lat: 7.8731,
                          log: 80.7718
                        }
                      }
                },
                request: {
                    formId: parseInt(formId)
                },
            };
            data = JSON.stringify(data);
            xhr.send(data);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === DONE) {
                    if (xhr.status === OK) {
                        var response = JSON.parse(xhr.responseText);
                        document.cookie = TOKEN + "=" + response.response.token;
                        callback.apply();
                    } else {
                        console.log(xhr.status);
                    }
                }
            };
        }
    },
    fillFormField: (fieldId, fromLanguageId, fromLanguageValue, toLanguageId, toLanguageValue, callback) => {
        /**
         * Fill form field
         */
        const xhr = new XMLHttpRequest();
        const endpoint = BASEURL + "CreateFilledFormField";
        xhr.open("POST", endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        var data = {
            userKey: {
                sdkId: 1,
                sessionKey: alphaone.getCookie("alphaOneSessionKey"),
                location: {
                    ip: "127.0.0.1",
                    gps: {
                      lat: 7.8731,
                      log: 80.7718
                    }
                  }
            },
            request: {
                token: parseInt(alphaone.getCookie(TOKEN)),
                fieldId: parseInt(fieldId),
                fromLanguageId: parseInt(fromLanguageId),
                fromLanguageValue: fromLanguageValue,
                toLanguageId: parseInt(toLanguageId),
                toLanguageValue: toLanguageValue
            },
        };
        data = JSON.stringify(data);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    var response = JSON.parse(xhr.responseText);
                    callback.apply(response.status);
                } else {
                    console.log(xhr.status);
                }
            }
        };
    },
    loadFieldValue: (fieldId, callback) => {
        /**
         * Get form field value
         */
        const xhr = new XMLHttpRequest();
        const endpoint = BASEURL + "GetFilledFormField";
        xhr.open("POST", endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        var data = {
            userKey: {
                sdkId: 1,
                sessionKey: alphaone.getCookie("alphaOneSessionKey"),
                location: {
                    ip: "127.0.0.1",
                    gps: {
                      lat: 7.8731,
                      log: 80.7718
                    }
                  }
            },
            request: {
                token: parseInt(alphaone.getCookie(TOKEN)),
                fieldId: parseInt(fieldId),
            },
        };
        data = JSON.stringify(data);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    var response = JSON.parse(xhr.responseText);
                    callback.apply(response);
                } else {
                    console.log(xhr.status);
                }
            }
        };
    },
    loadForm: (callback) => {
        /**
         * Get form field value
         */
        const xhr = new XMLHttpRequest();
        const endpoint = BASEURL + "GetFilledForm";
        xhr.open("POST", endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        var data = {
            userKey: {
                sdkId: 1,
                sessionKey: alphaone.getCookie("alphaOneSessionKey"),
                location: {
                    ip: "127.0.0.1",
                    gps: {
                      lat: 7.8731,
                      log: 80.7718
                    }
                  }
            },
            request: {
                token: parseInt(alphaone.getCookie(TOKEN)),
            },
        };
        data = JSON.stringify(data);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    var response = JSON.parse(xhr.responseText);
                    callback.apply(response);
                } else {
                    console.log(xhr.status);
                }
            }
        };
    },
    /**
   * Get user suggestion
   */
    createUserSuggestion: function (field, fromLang, toLang, fromLangValue, toLangValue, callback) {
        const xhr = new XMLHttpRequest();
        const endpoint = BASEURL + "CreateUserSuggestion";
        xhr.open("POST", endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        var data = {
            userKey: {
                sdkId: 1,
                sessionKey: alphaone.getCookie("alphaOneSessionKey"),
                location: {
                    ip: "127.0.0.1",
                    gps: {
                      lat: 7.8731,
                      log: 80.7718
                    }
                  }
            },
            request: {
                token: parseInt(alphaone.getCookie(TOKEN)),
                fieldId: parseInt(field),
                fromLanguageId: parseInt(fromLang),
                fromLanguageValue: fromLangValue,
                toLanguageId: parseInt(toLang),
                toLanguageValue: toLangValue
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
    },
    /**
     * Get out has csv file
     */
    getCompleteFormCSV: () => {
        /**
         * Get form field value
         */
        const xhr = new XMLHttpRequest();
        const endpoint = BASEURL + "GetFilledForm";
        xhr.open("POST", endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        var data = {
            userKey: {
                sdkId: 1,
                sessionKey: alphaone.getCookie("alphaOneSessionKey"),
                location: {
                    ip: "127.0.0.1",
                    gps: {
                      lat: 7.8731,
                      log: 80.7718
                    }
                  }
            },
            request: {
                token: parseInt(alphaone.getCookie(TOKEN)),
            },
        };
        data = JSON.stringify(data);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    var response = JSON.parse(xhr.responseText);
                    exportData = 'data:text/html;charset=utf-8,';
                    const items = response.response;
                    let csv = form.convertToCSV(items);
                    exportData += csv
                    var downloadANode = document.createElement('a');
                    downloadANode.setAttribute('href', exportData);
                    downloadANode.setAttribute('download', 'data-' + parseInt(alphaone.getCookie(TOKEN)) + '.csv');
                    document.body.appendChild(downloadANode);
                    downloadANode.click();
                    downloadANode.remove();

                } else {
                    console.log(xhr.status);
                }
            }
        };
    },
    convertToCSV: (json) => {
        json = json.sort((a, b) => a.fieldId - b.fieldId);
        var array = typeof json != 'object' ? JSON.parse(json) : json;
        var str = "\uFEFF";
        str += "Field Name; Input; English" + '\r\n';
        for (var i = 0; i < array.length; i++){
            var line = '';
            for (var index in array[i]) {
                if (index == 'fieldId') {
                    if (line != '') {
                        line += ';'
                    }
                    line += field_english[array[i][index] - 1];  
                }
                if (index == 'toLanguageValue') {
                    if (line != '') {
                        line += ';'
                    }
                    line += array[i][index];
                }
                if (index == 'fromLanguageValue') {
                    if (line != '') {
                        line += ';'
                    }
                    line += array[i][index];
                }
            }
            str += line + '\r\n';
        }
        return str;
    }
};