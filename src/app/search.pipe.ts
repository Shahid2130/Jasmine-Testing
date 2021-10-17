import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'filterText'
})

export class FilterTextPipe implements PipeTransform{

    transform(pipeValue:any,pipeModifier?:string){
        return (
            pipeValue.filter((value:any)=>{
            return (value.first_name.toLowerCase().includes(pipeModifier?.toLowerCase()) ||
            value.last_name.toLowerCase().includes(pipeModifier?.toLowerCase()) ||
            value.email.toLowerCase().includes(pipeModifier?.toLowerCase()))
            })
        )
    }
}