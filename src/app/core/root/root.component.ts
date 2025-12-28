import { Component, signal } from '@angular/core';
import { APP_VERSION } from '../../constants';

@Component({
    selector: 'dma-root',
    templateUrl: './root.component.html',
    imports: [],
})
export class RootComponent {
    protected readonly appVersion = signal(APP_VERSION);
}
