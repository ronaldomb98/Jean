import { RouterModule, Routes } from '@angular/router';
import { JgavalComponent } from "app/components/jgaval/jgaval.component";
import { CreateProductComponent } from "app/components/create-product/create-product.component";
import { UpdateProductComponent } from "app/components/update-product/update-product.component";

const routes: Routes = [
    {
        path: '',
        component: JgavalComponent,

    },
    {
        path: 'crear-producto',
        component: CreateProductComponent
    },
    {
        path: 'actualizar-producto',
        component: UpdateProductComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'routePath'
    }
];

export const appRouting = RouterModule.forRoot(routes);
