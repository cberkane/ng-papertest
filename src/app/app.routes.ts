import { Routes } from '@angular/router';
import { PageUpComponent } from './pages/page-up/page-up.component';
import { PageDownComponent } from './pages/page-down/page-down.component';
import { PageResetComponent } from './pages/page-reset/page-reset.component';

export const routes: Routes = [
    {
        path: 'up',
        component: PageUpComponent,
    },
    {
        path: 'down',
        component: PageDownComponent,
    },
    {
        path: 'reset',
        component: PageResetComponent,
    },
    {
        path: '',
        redirectTo: 'up',
        pathMatch: 'full',
    }
];
