export class UntitledModel {
    str: string;
    num: number;
    bool: boolean;
    
    constructor(obj: any) {
        this.str = obj.st;
        this.num = obj.nu;
        this.bool = obj.bo;
    }    
}