let document = {
    createDocument: (callback) => {
        // Check sessionkey
        if (this.getCookie("alphaOneSessionKey") == "") {
            console.log("Session key was not found.");
        } else {
            const xhr = new XMLHttpRequest();
            const endpoint = BASEURL + "CreateDocument";
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
    addPageToDocument: (id, content, callback){
        // Check sessionkey
        if (this.getCookie("alphaOneSessionKey") == "") {
            console.log("Session key was not found.");
        } else {
            const xhr = new XMLHttpRequest();
            const endpoint = BASEURL + "AddPageToDocument";
            xhr.open("POST", endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            var data = {
                userKey: {
                    sessionKey: this.getCookie("alphaOneSessionKey"),
                },
                request: {
                    documentId: parseInt(id),
                    imageContent: content
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
    getDocument: (id, callback) => {
        // Check sessionkey
        if (this.getCookie("alphaOneSessionKey") == "") {
            console.log("Session key was not found.");
        } else {
            const xhr = new XMLHttpRequest();
            const endpoint = BASEURL + "GetDocument";
            xhr.open("POST", endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            var data = {
                userKey: {
                    sessionKey: this.getCookie("alphaOneSessionKey"),
                },
                request: {
                    documentId: parseInt(id),
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