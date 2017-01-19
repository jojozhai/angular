/**
 * Created by zhailiang on 2017/1/18.
 */
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

// Component
@Component({
    selector: 'hello-world',
    template: '<h1>Hello {{ name }}!</h1>'
})
class HelloWorldComponent {

    name: string;

    constructor() {
        this.name = 'Angular';
    }
}

// Module
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ HelloWorldComponent ],
    bootstrap:    [ HelloWorldComponent ]
})
export class AppModule { }

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
