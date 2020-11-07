import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { 
    path: 'car-panel', 
    loadChildren: () => import('./car-panel/car-panel.module').then(m => m.CarPanelModule),
    data:{breadcrumb:null}
  }, 
  { 
    path: 'forms', 
    loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
    data:{breadcrumb:null}
  },
  { 
    path: 'tabela', 
    loadChildren: () => import('./table/table.module').then(m => m.TableModule),
    data:{breadcrumb:null}
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
