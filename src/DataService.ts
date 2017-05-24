export interface IDataService 
{
    msg:string;
    getMessage():string;
}

export class DataService implements IDataService
{
    msg="Show example message";
    getMessage(){
        return this.msg;
    }
}