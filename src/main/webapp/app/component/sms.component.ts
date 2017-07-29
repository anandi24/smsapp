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
	username = '';

    sendSMS(){
        console.log(this.username);
    }

	getCurrentStep() {
        return this.step;
    }

    back(){
        this.step =1;    }

    getSecondPage() {
    	this.step += 1;
    }

    
}

