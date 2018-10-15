
import { NgbDateParserFormatter, NgbDateStruct  } from '@ng-bootstrap/ng-bootstrap';
import {Injectable} from '@angular/core';
import { DatePipe } from '@angular/common';
  @Injectable()
  export class NgbDateISOParserFormatter extends NgbDateParserFormatter {
    datePipe = new DatePipe('en-US');
    constructor(private dateFormatString: string) {
        super();
    }
    format(date: NgbDateStruct): string {
        if (date === null) {
            return '';
        }
        try {  
            const returnVal = this.datePipe.transform(new Date(date.year, date.month - 1, date.day), this.dateFormatString);
        console.log(returnVal,this.dateFormatString);
            return returnVal;
        } catch (e) {
        return '';
        }
    }
    parse(value: string): NgbDateStruct {
        let returnVal: NgbDateStruct;
        if (!value) {
            returnVal = null;
        } else {
            try {
                // let dateParts = this.datePipe.transform(value, 'M-d-y').split('-');
                console.log(value);
                let dateParts = this.datePipe.transform(value, 'M-d-y').split('-');
                returnVal = { year: parseInt(dateParts[2]), month: parseInt(dateParts[0]), day: parseInt(dateParts[1]) };
                console.log(returnVal);
            } catch (e) {
            returnVal = null;
            }
        }
    return returnVal;
    }
}
export function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }

  export function toString(value: any): string {
    return (value !== undefined && value !== null) ? `${value}` : '';
  }

  export function getValueInRange(value: number, max: number, min = 0): number {
    return Math.max(Math.min(value, max), min);
  }

  export function isString(value: any): value is string {
    return typeof value === 'string';
  }

  export function isNumber(value: any): value is number {
    return !isNaN(toInteger(value));
  }

  export function isInteger(value: any): value is number {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }

  export function isDefined(value: any): boolean {
    return value !== undefined && value !== null;
  }

  export function padNumber(value: number) {
    if (isNumber(value)) {
      return `0${value}`.slice(-2);
    } else {
      return '';
    }
  }

  export function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }