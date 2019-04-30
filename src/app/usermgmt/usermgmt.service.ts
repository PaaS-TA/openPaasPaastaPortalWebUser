import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../common/common.service';
import {NGXLogger} from 'ngx-logger';
import {SecurityService} from "../auth/security.service";



declare var require: any;
let appConfig = require('assets/resources/env/config.json');

@Injectable()
export class UsermgmtService {
  constructor(
    private http: HttpClient, private common: CommonService, private logger: NGXLogger,
    private log: NGXLogger, private sec: SecurityService) {
  }

  apiversion = appConfig['apiversion'];

  userinfo(username: string) {
    return this.common.doGet('/commonapi/' + this.apiversion + ' /user/' + username, this.common.getToken()).map((res: Response) => {
      return res['User'];
    });
  }

  userSave(userId: string, param: any) {
    return this.common.doPut('/commonapi/' + this.apiversion + ' /user/' + userId, param, this.common.getToken()).map((res: Response) => {
      return res['result'];
    })
  }

  updateUserPassword(userId: string, param: any) {
    return this.common.doPut('/portalapi/' + this.apiversion + ' /users/' + encodeURI(userId) + '/password/update', param, this.common.getToken()).map((res: any) => {
      return res;
    });
  }

  // @DeleteMapping(V2_URL + "/user/{guid}/all")  ::CF&DB
  userAllDelete(guid: string, param: any) {
    return this.common.doDelete('/commonapi/' + this.apiversion + ' /user/' + guid + '/all', '', this.common.getToken()).map((res: Response) => {
      this.log.debug(res);
      return res;
    });
  }

  // storageApiUrl + "/v2/" + storageApiType + '/';
  photoRegistration(params: any) {
    return this.common.doFilePost('/storageapi/' + this.apiversion + ' /swift/', params, '').map((res: Response) => {
      return res;
    }).do(console.log);
  }

  getImg(url: string) {
    return this.common.doStorageGet(url, null).map((res: any) => {
      return res;
    });
  }

  getOrgList() {
    return this.common.doGet('/portalapi/' + this.apiversion + ' /orgs', this.common.getToken()).map((res: Response) => {
      return res;
    }).do(console.log);
  }


}

export class User {
  address: string;
  addressDetail: string;
  adminYn: boolean;
  authAccessCnt: string;
  authAccessTime: string;
  imgPath: string;
  refreshToken: string;
  status: string;
  tellPhone: string;
  userId: string;
  zipCode: string;
  userName: string;
}
