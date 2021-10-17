import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'Upper'
})

export class UpperCasePipe implements PipeTransform{

    transform(pipeValue:string,pipeModifier?:string){
        return pipeValue.toUpperCase()
    }
}

