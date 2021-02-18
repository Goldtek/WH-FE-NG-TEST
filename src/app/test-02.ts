/**
 * Update the following components to meet the requirements : 
 * * Bind [field] of [textfield] component to its text input
 * * Pass value of [field] from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule, EventEmitter, Input, Output  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@Component({
    selector : 'textfield',
    template : '<input type="text" value="" [(ngModel)]="field" (ngModelChange)="changeValue($event)"/>'
})
export class TextField {
    field = ''; 
    @Input() childname:string;
    @Output() outPutToGrandParent = new EventEmitter <string>()

    changeValue(e){
        this.field = e;
        this.outPutToGrandParent.emit(e); 
    }
}

@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield (outPutToGrandParent)="getOutput($event)">{{field}}</textfield>`
})
export class ChildComponent {
    field = ''
    @Input() childname:string;
    @Output() outPutToParent = new EventEmitter <string>()

    getOutput(e){
      this.field = e;  
      this.outPutToParent.emit(e); 
    } 
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component  (outPutToParent)="getOutput($event)"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = ''; 
    getOutput(e){
        this.title = e; 
      }
}

@NgModule({
    imports : [
        CommonModule, 
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};