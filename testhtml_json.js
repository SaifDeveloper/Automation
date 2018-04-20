const fs                = require('fs');
const pretty            = require('pretty');
const form_controls     = require('./form_controls');
const options           = require('./formRequirements');

//INITIALIZING ELEMENTS

let textbox         = form_controls.textbox;
let radio           = form_controls.radio;
let textarea        = form_controls.textarea;
let checkbox        = form_controls.checkbox;
let datepicker      = form_controls.datepicker;
let select          = form_controls.select;
let slider          = form_controls.slider;
let slide_toggle    = form_controls.slide_toggle;
let button          = form_controls.button;

let prehtml = `<div class="container">
  <mat-card class="example-card mat-elevation-z10">
    <mat-card-header>

      <mat-card-title>Form 1</mat-card-title>
      <mat-card-subtitle></mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <div class="form-container">`;

let posthtml = ` </div>

    </mat-card-content>
    <mat-card-actions>
      <!--<button class="btn" mat-raised-button color="primary">Primary</button>-->
      <!--<button mat-button>SHARE</button>-->
    </mat-card-actions>
  </mat-card>

</div>`;

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
            case "checkbox":
                genhtml += checkbox.repeat(val);
                break;
            case "datepicker":
                genhtml += datepicker.repeat(val);
                break;
            case "select":
                genhtml += select.repeat(val);
                break;
            case "slider":
                genhtml += slider.repeat(val);
                break;
            case "slide_toggle":
                genhtml += slide_toggle.repeat(val);
                break;
            case "button":
                genhtml += button.repeat(val);
                break;
            default:
                console.log("DEFAULT")
        }

    }
}

let html = prehtml+genhtml+posthtml;


//WRITING TO THE FILE
fs.writeFile('../angularMaterial/src/app/test/test.component.html',pretty(html) , function (err) {
    if (err) console.log(err)
    console.log("UPDATED index.html")
});
