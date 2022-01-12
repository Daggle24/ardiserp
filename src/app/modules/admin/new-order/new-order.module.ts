import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewOrderComponent } from './new-order.component';

const newOrderRoutes: Route[] = [
    {
        path     : '',
        component: NewOrderComponent
    }
];

@NgModule({
    declarations: [
        NewOrderComponent
    ],
    imports     : [
        RouterModule.forChild(newOrderRoutes)
    ]
})
export class NewOrderModule
{
}
