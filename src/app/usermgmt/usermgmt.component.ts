import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { User, UsermgmtService } from './usermgmt.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NGXLogger } from 'ngx-logger';
import { Organization } from '../model/organization';
import { OrgService } from '../org/common/org.service';
import { FormControl } from '@angular/forms';
import { viewWrappedDebugError } from '@angular/core/src/view/errors';
import { validate } from 'codelyzer/walkerFactory/walkerFn';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-usermgmt',
  templateUrl: './usermgmt.component.html',
  styleUrls: ['./usermgmt.component.css']
})
export class UsermgmtComponent implements OnInit {
  public user: Observable<User>;
  public orgs: Array<Organization>;

  token: string;
  username: string;
  password: string;
  password_new: string;
  password_confirm: string;
  selectSort : string;
  orgName: string;

  // Angular에서 필요에 맞게 호출
  ngOnInit() {
    console.log('ngOnInit fired');

    $(document).ready(() => {
      //TODO 임시로...
      $.getScript("../../assets/resources/js/common.js")
        .done(function (script, textStatus) {
          //console.log( textStatus );
        })
        .fail(function (jqxhr, settings, exception) {
          console.log(exception);
        });
    });
  }

  // 이 부분은 Angular가 아닌 자바스크립트에서 실행
  constructor(private httpClient: HttpClient, private common: CommonService,
              private userMgmtService: UsermgmtService,
              private orgService: OrgService,
              private logger: NGXLogger) {

    this.user = new Observable<User>();

    this.userInfo();
    // this.userPassword();

    console.log("###Oauth Login Value### " + this.common.getUserid());

    this.token = '';
    this.orgs= orgService.getOrgList();

  }

  userInfo() {
      this.userMgmtService.userinfo(this.common.getUserid()).subscribe(data => {
         this.user = data;
        return data;
    });
  }

  userSave(){
    let params = {userName: this.user['userName'],
                  tellPhone: this.user['tellPhone'],
                  zipCode: this.user['zipCode'],
                  address: this.user['address']};
    this.userMgmtService.userSave(this.common.getUserid(), params).subscribe(data => {
      if(data == 1){
        console.log('success');
      }else{
        console.log('User does not exist');
      }
      console.log(data);
      return data;
    });
  }

  public alertMsg(msg: string) {
    alert(msg);
  }
}
