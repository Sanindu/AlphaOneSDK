let voice = {
    createStatement: (callback) => {
        // Check sessionkey
        if (this.getCookie("alphaOneSessionKey") == "") {
            console.log("Session key was not found.");
        } else {
            const xhr = new XMLHttpRequest();
            const endpoint = BASEURL + "CreateStatement";
            xhr.open("POST", endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            var data = {
                userKey: {
                    sessionKey: this.getCookie("alphaOneSessionKey"),
                },
                request: {}
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
    addAudioToStatement: (id, content, callback){
        // Check sessionkey
        if (this.getCookie("alphaOneSessionKey") == "") {
            console.log("Session key was not found.");
        } else {
            const xhr = new XMLHttpRequest();
            const endpoint = BASEURL + "AddAudioToStatement";
            xhr.open("POST", endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            var data = {
                userKey: {
                    sessionKey: this.getCookie("alphaOneSessionKey"),
                },
                request: {
                    statementId: parseInt(id),
                    audioContent: content
                }
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
    getStatement: (id, callback) => {
        // Check sessionkey
        if (this.getCookie("alphaOneSessionKey") == "") {
            console.log("Session key was not found.");
        } else {
            const xhr = new XMLHttpRequest();
            const endpoint = BASEURL + "GetStatement";
            xhr.open("POST", endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            var data = {
                userKey: {
                    sessionKey: this.getCookie("alphaOneSessionKey"),
                },
                request: {
                    statementId: parseInt(id),
                }
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
    }
}