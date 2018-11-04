import { Observable } from 'rxjs/Rx';

const btns = document.getElementsByClassName("btns");

let result = 0;
let operator = '';
let refreshDisplay = false;

const Stream$ = Observable.from(btns)
  .map(btn => Observable.fromEvent(btn, 'click')
  .mapTo(btn.textContent))
  .mergeAll()
  .merge(Observable.fromEvent(document, 'keypress')
  .pluck('key'));

Stream$.subscribe(input => 
{
  //\d/ is tested against the input to see if a number digit is pressed
  if (/\d/.test(input) || input === '.') 
  {
    //If the input is a number value
    if (refreshDisplay) 
    {
      document.getElementsByTagName('input')[0].value = input;
      refreshDisplay = false;
    } 
    else 
    {
      document.getElementsByTagName('input')[0].value += input;
    }
  } 
  else if (input === 'C') 
  {
    result = 0;
    operator = '';
    document.getElementsByTagName('input')[0].value = '0';
  } 
  else 
  {
    const num = parseFloat(document.getElementsByTagName('input')[0].value);

    if (operator === '-') 
    {
      result -= num;
    } 
    else if (operator === '+') 
    {
      result += num;
    } 
    else if (operator === '÷' || operator === '/')
    {
      result /= num; 
    } 
    else if (operator === 'x' || operator === '*') 
    {
      result *= num;
    }
    else if (operator === '=' || operator === 'Enter')
    {
      result = num;
    }

    document.getElementsByTagName('input')[0].value = result;
    operator = input;
    refreshDisplay = true;
  }

});