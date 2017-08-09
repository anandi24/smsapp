import {Component} from '@angular/core';
import {HttpService} from '../service/http.service';


@Component({
    selector: 'smscomp',
    templateUrl: 'app/component/sms.component.html',
    providers: [HttpService]
})

export class SMSComponent {

	constructor( private httpService: HttpService ) {
        
    }


	step = 0;
	user = '';
    passwd = '';
    message = '';
    mobilenumber = '';
    searchResults = '';
    sms = new SMS();
    report = new Report();

    sendSMS(){
        this.step += 1;
        this.searchResults = '';
        let validateBody = JSON.stringify(this.sms);

         this.httpService.sendSMS(validateBody, "sendSMS").subscribe(
            resp => {    
                if(resp!=null){
                this.searchResults=resp.messageResponse;
                }
                console.log(this.searchResults);
            },
            error => {
                console.log(error);
            }
            );   

    }

    multiSMS(){
        this.step += 1;
        this.searchResults = '';
        let validateBody = JSON.stringify(this.sms);

         this.httpService.sendSMS(validateBody, "multiSMS").subscribe(
            resp => {    
                if(resp!=null){
                this.searchResults=resp.messageResponse;
                }
                console.log(this.searchResults);
            },
            error => {
                console.log(error);
            }
            );   

    }

    generateReport(){
        this.searchResults = '';
        let validateBody = JSON.stringify(this.report);

         this.httpService.report(validateBody, "report").subscribe(
            resp => {    
                if(resp!=null){
                this.searchResults=resp.response;
                }
                console.log(this.searchResults);
            },
            error => {
                console.log(error);
            }
            );   
    }

	getCurrentStep() {
        return this.step;
    }

    goback(){
        this.step = this.step - 1;    }

    toReport(){
        this.step = this.step + 1;    }
}

class SMS{
    user: string;
    mobilenumber: number;
    message: string;
}

class Report{
    user:string;
    fromdate: string;
    todate: string;
}

