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

let genhtml = textbox.repeat(no_textbox) + radio.repeat(no_radio) + textarea.repeat(no_textarea) ;

console.log(pretty(genhtml));
