import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//CLASS 
export class AppComponent {

  // variables
  length = 0; 
  includesLetters = false;
  includesNumbers = false;
  includesSymbols = false;
  password = '';

  //

  //process inputed data
  onChangeLength(value: string){

    //
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){

      //Parse value of number to string if value is inputed and is not a number
      this.length = parsedValue;
    }
  }
  
  
  //Checks Use letters checkbox condition 
  onChangeUseLetters(){
    this.includesLetters = !this.includesLetters;
    //
  }

  //
  onChangeUseNumbers(){
    this.includesNumbers = !this.includesNumbers;
  }

  //
  onChangeUseSymbols(){
    this.includesSymbols = !this.includesSymbols;
  }


  //METHOD constructor for password
  onButtonClick(){

    // generate password

    // variables
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+-=[]{};:,./<>?';

    let  validChars = '';
    
    if(this.includesLetters){

      //
      validChars += letters;
    }

    //
    if(this.includesNumbers){
      validChars += numbers;
    }

    //
    if (this.includesSymbols){
      validChars += symbols;
    } 

    let  generatedPassword = '';

    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    } 

    this.password = generatedPassword;
    // sets password to "MY PASSWORD"

 

    console.log('Button was clicked');
  };

}
