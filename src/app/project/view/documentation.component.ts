import { Component } from '@angular/core';

@Component({
    templateUrl: './documentation.component.html',
    styles: [`
        .docs pre.doc-command {
            font-family: monospace;
            background-color: #bcc9cf;
            color: #333333;
            padding: 1em;
            font-size: 14px;
            border-radius: 0;
            overflow: auto;
            font-weight: 700;
        }

        .docs p {
            line-height: 1.5;
        }
        `
    ]
})
export class DocumentationComponent {}
