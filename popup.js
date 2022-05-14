
document.addEventListener("DOMContentLoaded", function(event) { 
    
    // Every time extension load the last url is stored in global variable
    let url;
    // Saves darkmode preferance
    let dark;
    // List of urls with saved notes
    let list = [];

    // Checks if user had darkmode enabled or disabled
    chrome.storage.sync.get(["dark"], function(test){
        if (test["dark"] == "1")
        {
            darkMode();
        }
        dark = test["dark"];
    });

    // To get current tab use chrome.tabs.query with active and currentWindow parameters
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        // Tabs is an array of an dict, which stores url value at index 0 key url 
        url = tabs[0].url;
        console.log(url.split( '.' ))
        // Cut out any file pathway youtube.com/watch becomes youtube.com/
        curr = url.substring(
            url.indexOf("//") + 2, 
            url.lastIndexOf(".")
        );
        curr = curr.split( '.' );
        if (curr[0] == "www")
        {
            url = curr[1];
        }
        else
        {
            url = curr[0];
        }
        if (url === undefined)
        {
            url = "notWebsite";
        }
        console.log(url)
        // Check if there are notes store every time extension is launched
        // chrome.storage.sync.get takes a KEY and returns VALUE
        // url is KEY notes is VALUE
        chrome.storage.sync.get([url], function(saved){
            // Items is a dict, key is url
            notes = saved[url];
            // If there are no notes saved, display ""
            if(!notes)
            {
                notes = ""
            }
            // Set notes to the value of notes
            document.getElementsByClassName('notes')[0].value = notes;
        });
        // Display the current website
        document.querySelector('.website').innerHTML = url;
    });

    // When save button is clicked load function
    document.getElementById('save').onclick = function(){
        // Save the value of notes field in notes variable
        var notes = document.getElementsByClassName('notes')[0].value;   
            // JSON can be used to store data
            var json = {};
            // The current URL is set to KEY and VALUE is notes
            json[url] = notes;
            console.log("json")
            console.log(json)
            // chrome.storage.sync.set takes dict(json) format to save
            chrome.storage.sync.set(json, function(){
                // Saves notes VALUE at the url KEY   
        });
        saveAnimate();
    }

    // Delete the current notes
    document.getElementById('delete').onclick = function(){
        document.getElementsByClassName('notes')[0].value = "";
        // Animate deletion for 1 second
        var element = document.getElementById("delete");
        element.classList.toggle("btn-warning");
        element.classList.toggle("btn-danger");
        setTimeout(function () {
            element.classList.toggle("btn-warning");
            element.classList.toggle("btn-danger");
        }, 1000);
    }

    // Animate saving
    function saveAnimate(){
        // Animate saving for 1 second
        var element = document.getElementById("save");
        element.classList.toggle("btn-primary");
        element.classList.toggle("btn-info");
        setTimeout(function () {
            element.classList.toggle("btn-primary");
            element.classList.toggle("btn-info");
        }, 1000);
    }

    // When darkmode button is clicked, switch theme and save preference
    document.getElementById('dark').onclick  = function(){
        darkMode();
        console.log(dark);
        if (dark == 0)
        {
            dark = 1;
        }
        else {
            dark = 0;
        }
        console.log(dark);
        var isDark = {};
        isDark["dark"] = dark;
        console.log("isDark")
        console.log(isDark)
        chrome.storage.sync.set(isDark, function(){
            // Saves dark mode, 1 yes 0 no
        });
    }

    // Change theme to darkmode
    function darkMode(){
        console.log("test");
        var element = document.getElementById("dark-mode");
        var element2 = document.getElementById("dark-mode2");
        var element3 = document.getElementById("dark-mode3");
        var element4 = document.getElementById("dark-mode4");
        var element5 = document.getElementById("dark");
        console.log(element5);
        element.classList.toggle("darkNotes");
        element2.classList.toggle("darkDiv");
        element3.classList.toggle("darkDiv");
        element4.classList.toggle("siteDark");
        element5.classList.toggle("btn-dark");
    }
});