import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor() {
        var testScript = document.createElement("script");
        testScript.setAttribute("id", "custom-js");
        testScript.setAttribute("src", "assets/customJS/new-age.min.js");
        document.body.appendChild(testScript);
    }

    ngOnInit() {
    }
}
