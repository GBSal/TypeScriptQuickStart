import ds  = require("./DataService");

export interface IAlerter {
    showMessage():void;
}

var dataService = new ds.DataService();

export class Alerter implements IAlerter
{
    
    showMessage(){

       var msg  = dataService.getMessage();
        toastr.info(msg);
        console.log(msg);
    }
}
