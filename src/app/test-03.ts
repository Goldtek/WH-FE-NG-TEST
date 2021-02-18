/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
    selector : 'ng-app',
    template : `<form method="get" (ngSubmit)="onClickSubmit($event)" >
                    <h2>Login</h2>
                    <br/>
                    <input type="email" value="" name="email" (change)="validateEmail($event)"/>
                    <div *ngIf="emailError"  style="color:red">{{emailError}}</div>
                    <br/>
                    <input type="password" value="" name="password" (change)="validatePassword($event)"/>
                    <div *ngIf="passwordError" style="color:red">{{passwordError}}</div>
                    <button [disabled]="error">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email:string = "";
    password:string = "";
    error = false;
    emailError:string = null;
    passwordError:string = null; 

    logged_in = false;
    
   
    validateEmail(e){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(e.target.value)){ 
            this.emailError = 'invalid email address';
            this.error = true;
         }else{
            this.emailError = null;
            this.error = false;
         } 
    }

    validatePassword(e){ 
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{8,}$/;
        if(!pattern.test(e.target.value)){ 
            this.passwordError = 'invalid passsword';
            this.error = true;
         }else{
            this.passwordError = null;
            this.error = false;
         }
    }


    onClickSubmit = (data) => {
        event.preventDefault();
        this.password = data.target.password.value
        this.email = data.target.email.value 
       this.logged_in = true;
    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};