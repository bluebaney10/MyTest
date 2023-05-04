import { IControl } from "./control-base.interface";
import { IControlOption } from "./control-option.model";

export class BaseControl implements IControl{
    element: HTMLElement;
    selected: IControlOption | null = null;
    options:Array<IControlOption> = [];
   
    constructor(el:HTMLElement){
        this.element=el;
        this.createOptions();
    }

    select(option: IControlOption): void {
        this.selected=option;
    }

    createOptions(): void {
        this.element.querySelectorAll('.options .option').forEach((op:HTMLElement)=>{
            const option:IControlOption = {
                productEditionId: parseInt(op.getAttribute('data-id'), 10),
                element: op,
                name: op.getAttribute('data-name'),
                price: parseFloat(op.getAttribute('data-price'))
            }

            option.element.addEventListener('click',()=>{
                this.select(option);
            });

            this.options.push(option);
        });

        console.log(this.options);
    }
    
}