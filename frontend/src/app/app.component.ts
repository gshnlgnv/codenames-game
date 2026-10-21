import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <main id="main-content">
            <router-outlet></router-outlet>
        </main>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            width: 100%;
        }
        main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center; /* Центрирование по вертикали */
            align-items: center;     /* Центрирование по горизонтали */
            padding: 20px;           /* Немного отступов, чтобы не прилипало к краям */
            box-sizing: border-box;
        }
    `]
})
export class AppComponent {
}
