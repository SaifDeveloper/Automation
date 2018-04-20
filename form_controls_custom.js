const textbox = `<mat-form-field>
                        <input matInput placeholder="Input">
               </mat-form-field>`;

const radio = `<mat-radio-group>
                       <mat-radio-button value="1">Option 1</mat-radio-button>
                       <mat-radio-button value="2">Option 2</mat-radio-button>
               </mat-radio-group>`;

const textarea = `<mat-form-field>
                        <textarea matInput placeholder="Textarea"></textarea>
                  </mat-form-field>`;


const checkbox = `<mat-checkbox>Check me!</mat-checkbox>`;

const datepicker = `<mat-form-field>
                          <input matInput [matDatepicker]="picker" placeholder="Choose a date">
                          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                          <mat-datepicker #picker></mat-datepicker>
                    </mat-form-field>`;


const select = `<mat-form-field>
                      <mat-select>
                        <mat-option>None</mat-option>
                        <mat-option value="option1">Option 1</mat-option>
                        <mat-option value="option2">Option 2</mat-option>
                        <mat-option value="option3">Option 3</mat-option>
                      </mat-select>
                 </mat-form-field>`

const slider = `<mat-slider></mat-slider>`;

const slide_toggle = `<mat-slide-toggle>Slide me!</mat-slide-toggle>`;





module.exports = {
    textbox,radio,textarea,checkbox,datepicker,select,slider,slide_toggle
};