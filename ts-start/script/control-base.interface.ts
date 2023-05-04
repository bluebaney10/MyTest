import { IControlOption } from "./control-option.model";

export interface IControl{
    selected:IControlOption | null
    options:Array<IControlOption>
    element:HTMLElement
    select(option:IControlOption):void
    createOptions():void
}