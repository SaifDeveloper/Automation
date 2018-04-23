const fs                = require('fs');
const pretty            = require('pretty');
const requirements      = require('./formRequirements_x')


let genhtml = "";

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


for (let key in requirements) {
    if (requirements.hasOwnProperty(key)) {
        let val = requirements[key];
        //console.log(key,":",val);
        let placeholders = val.placeholders;
        let options = val.options;
        let values = val.values;
        let color = val.color;

        if (placeholders !== undefined) {
            //console.log("PLACEHOLDERS:", placeholders[1]);
        }

        switch(key) {
            case "textbox":
                //console.log("Number of",key,":",val.number);

                for (let i=0;i<val.number;i++){
                    if (placeholders !== undefined) {
                        //console.log("PLACEHOLDERS:", placeholders[i]);
                        genhtml+= `<mat-form-field>
                                        <input matInput placeholder=`+'"' + placeholders[i] +'"'+ `>
                                    </mat-form-field>`
                    }

                }

                break;
            case "textarea":
                //console.log("Number of",key,":",val.number);
                for (let i=0;i<val.number;i++){
                    if (placeholders !== undefined) {
                        //console.log("PLACEHOLDERS:", placeholders[i]);
                        genhtml+= `<mat-form-field>
                                        <textarea matInput placeholder=`+'"' + placeholders[i] +'"'+ `>
                                        </textarea>
                                    </mat-form-field>`
                    }

                }



                break;
            case "radio":
                //console.log("Number of",key,":",val.number);
                let looplength = [];
                for (let k=0;k<val.number;k++){
                    // console.log("Options length:",options[k].length);
                    looplength.push(options[k].length);
                }
                let maxLoopLength = Math.max(...looplength)
                //console.log("Max Length:",Math.max(...looplength));

                //options_len = options[0].length;
                //console.log("Options lengths:",options_len);
                for (let i=0;i<val.number;i++){
                    let preradio =`<mat-radio-group class="example-radio-group">`;
                    genhtml += preradio;
                    // console.log("Options:",options[0][1]);
                    for(let j=0;j<maxLoopLength;j++){
                        if (options[i][j] !== undefined && values[i][j] !== undefined) {
                            //console.log("Options:", options[j]);
                            genhtml += `<mat-radio-button class="example-radio-button" value="`+values[i][j]+'"'+`>`+options[i][j]+`</mat-radio-button>`

                        }
                    }
                    let postradio = `</mat-radio-group>`;
                    genhtml +=postradio;
                }


                break;
            case "checkbox":
                for (let i=0;i<val.number;i++){
                    if (placeholders !== undefined) {
                        //console.log("PLACEHOLDERS:", placeholders[i]);
                        genhtml+= `<mat-checkbox>`+placeholders[i]+`</mat-checkbox>`
                    }

                }

                break;
            case "datepicker":
                for (let i=0;i<val.number;i++){
                        genhtml+= `<mat-form-field class="example-full-width">
                                        <input matInput [matDatepicker]="picker" placeholder="Choose a date">
                                        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                                        <mat-datepicker touchUi="true" #picker></mat-datepicker>
                                   </mat-form-field>`

                }

                break;
            case "select":
                let selectlooplength = [];
                for (let k=0;k<val.number;k++){
                    // console.log("Options length:",options[k].length);
                    selectlooplength.push(options[k].length);
                }
                let maxSelectLoopLength = Math.max(...selectlooplength);
                for (let i=0;i<val.number;i++){
                    let preselect =`<mat-form-field><mat-select placeholder=`+'"'+placeholders[0]+'"'+`>`;
                    genhtml += preselect;
                    for(let j=0;j<maxSelectLoopLength;j++){
                        if (options[i][j] !== undefined && values[i][j] !== undefined) {

                            genhtml += `<mat-option value=`+'"'+values[i][j]+'"'+`>`+options[i][j]+`</mat-option>`
                        }
                    }
                    let postselect = `</mat-select>
                 </mat-form-field>`;
                    genhtml +=postselect;
                }

                break;
            case "slider":
                for (let i=0;i<val.number;i++) {
                    genhtml += `<mat-slider></mat-slider>`;
                }
                break;
            case "slide_toggle":
                for (let i=0;i<val.number;i++) {
                    genhtml += `<mat-slide-toggle>` + placeholders[i] + `</mat-slide-toggle>`;
                }
                break;
            case "buttons":
                for (let i=0;i<val.number;i++) {
                    genhtml += `<button class="btn" mat-raised-button color=`+'"'+color[i]+'"'+`>`+placeholders[i]+`</button>`;
                }
                break;

                default:
                console.log("DEFAULT")
        }




    }
}
 //console.log( pretty(genhtml));
let html = prehtml+genhtml+posthtml;


//WRITING TO THE FILE
fs.writeFile('../angularMaterial/src/app/test/test.component.html',pretty(html) , function (err) {
    if (err) console.log(err)
    console.log("UPDATED index.html")
});