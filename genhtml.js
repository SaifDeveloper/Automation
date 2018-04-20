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


let no_textbox      = options.textbox;
let no_radio        = options.radio;
let no_textarea     = options.textarea;





//WRITING TO THE FILE
fs.writeFile('index.html', pretty(textbox.repeat(no_textbox)), function (err) {
    if (err) console.log(err)
});

fs.appendFile('index.html', pretty(radio.repeat(no_radio)), function (err) {
    if (err) console.log(err);
    console.log('Radios Created !')
});

fs.appendFile('index.html', pretty(textarea.repeat(no_textarea)), function (err) {
    if (err) console.log(err);
    console.log('TextArea Created !')
});