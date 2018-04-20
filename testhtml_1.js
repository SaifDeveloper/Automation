const fs                = require('fs');
const pretty            = require('pretty');
const commandLineArgs   = require('command-line-args');
const form_controls     = require('./form_controls');

//INITIALIZING ELEMENTS

let textbox     = form_controls.textbox;
let radio       = form_controls.radio;
let textarea    = form_controls.textarea;



//COMMAND LINE ARGUMENTS
const optionDefinitions = [
    { name: 'textbox', type: String, multiple: false, defaultOption: true },
    { name: 'radio', type: String, multiple: false},
    { name: 'textarea', type: String,multiple:false}
];

const options = commandLineArgs(optionDefinitions);

console.log("OPTIONS:",options);


let genhtml = "";


for (var key in options) {
    if (options.hasOwnProperty(key)) {
        var val = options[key];
        switch(key) {
            case "textbox":
                genhtml += textbox.repeat(val);
                break;
            case "textarea":
                genhtml += textarea.repeat(val);
                break;
            case "radio":
                genhtml += radio.repeat(val);
                break;
            default:
                console.log("DEFAULT")
        }

    }
}



//console.log(pretty(genhtml));

//WRITING TO THE FILE
fs.writeFile('index.html',pretty(genhtml) , function (err) {
    if (err) console.log(err)
    console.log("UPDATED index.html")
});
