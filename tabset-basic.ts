import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCalendar, NgbTabset, NgbDate, NgbDateParserFormatter, NgbDateStruct  } from '@ng-bootstrap/ng-bootstrap';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ngbd-tabset-basic',
  templateUrl: './tabset-basic.html'
})
export class NgbdTabsetBasicComponent implements OnInit {
public selectedTab = 'first-tab';
private tabs: NgbTabset;
public model: NgbDateStruct;
dateString: string;
constructor(private ngbDateParserFormatter: NgbDateParserFormatter, private route: ActivatedRoute) {
  this.model = this.setDefaultDate();
  this.onSelectDate(this.model);
  }
  onDateSelection($event) {

  }

  ngOnInit() {
    setTimeout(() => {
      const param: any = this.route.snapshot.queryParams.tab;
      if (param) {
        this.selectedTab = param;
      } else {
          this.selectedTab = 'second-tab';
    }
    });
  }

  onSelectDate(date: NgbDateStruct) {
    if (date != null) {
            this.model = date;   //needed for first time around due to ngModel not
                                // binding during ngOnInit call. Seems like a bug in ng2.
            this.dateString = this.ngbDateParserFormatter.format(date);
        }
  }

  setDefaultDate(): NgbDateStruct {
        var startDate = new Date();
        let startYear = startDate.getFullYear().toString();
        let startMonth = startDate.getMonth() + 1; 
        let startDay = "1";

        return this.ngbDateParserFormatter.parse(startYear + "-" + startMonth.toString() + "-" + startDay);
}
  setDate() {
    this.model = new NgbDate(2019, 12, 12);
  this.model.day = 12;
  this.model.month = 12;
  this.model.year = 2018;
  }
}

