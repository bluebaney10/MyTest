import { BaseControl } from "./base-control";
import { IControl } from "./control-base.interface";
import { IControlOption } from "./control-option.model";

export class ProductConfiguraionPicker extends BaseControl implements IControl{
    constructor(el:HTMLElement){
        super(el)
        this.createOptions();
    }

    public select(option: IControlOption): void {
        super.select(option);
        this.removeActionClass();
        this.selected.element.classList.add('active');
        console.log(this.selected);
    }

    private removeActionClass() {
        this.options.forEach((opt:IControlOption)=>{
            opt.element.classList.remove('active');
        });
    }
   
}