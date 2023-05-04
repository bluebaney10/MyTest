import { ProductConfigurationStep } from "./product-configuration-step";

export class ProductConfiguration{
    private productId=0;
    private configurablePrice = 0;
    private steps:Array<ProductConfigurationStep>=[];
    private el:HTMLElement;

    constructor(el:HTMLElement){
        this.el = el;
        this.createStep();
    }

    private createStep() {
       this.el.querySelectorAll<HTMLElement>('.step').forEach((step:HTMLElement)=>{
            this.steps.push(new ProductConfigurationStep(step));
        });
        console.log(this.steps);
    }

    private backStep(){}
    private nextStep(){}
    private gotoStep(){}
    private calculatePrice(){}

}