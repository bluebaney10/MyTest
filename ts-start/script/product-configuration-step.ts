import { IControl } from "./control-base.interface";
import { ProductConfiguraionPicker } from "./product-configuraion-picker";

export class ProductConfigurationStep{
    private element:HTMLElement;
    private controls:Array<IControl>=[];
    constructor(el:HTMLElement){
        this.element=el;
        this.createControl();
    }

    createControl() {
      this.element.querySelectorAll<HTMLElement>('.ecf').forEach((el:HTMLElement)=>{
        if(el.classList.contains('e-pk')){
            this.controls.push(new ProductConfiguraionPicker(el))
        }

      });
    }
}