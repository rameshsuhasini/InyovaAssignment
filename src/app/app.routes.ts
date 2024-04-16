import { Routes } from '@angular/router';
import { StratergyComponent } from './stratergy/stratergy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

export const routes: Routes = [
{path: '', redirectTo: '/stratergy', pathMatch: 'full'},
{path: 'stratergy', component: StratergyComponent},
{path: 'details', component: PersonDetailsComponent},
{path: '**', component: PageNotFoundComponent},
];
