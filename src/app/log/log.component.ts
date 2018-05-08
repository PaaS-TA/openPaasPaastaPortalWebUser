import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CommonService} from "../common/common.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private common: CommonService) {
    console.log(this.common.getUserName());
  }

  ngOnInit() {
  }


}
