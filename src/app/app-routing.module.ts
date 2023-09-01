import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';
import { ComponentC } from './component-c/component-c.component';
import { SecondParentComponent } from './second-parent/second-parent.component';

const routes: Routes = [
  {
    path: 'developers',
    component: SecondParentComponent,
    children: [
      {
				path: '',
				component: ComponentA
			},
			{
				path: 'apps',
				component: ComponentB
			},
			{
				path: 'libs',
				component: ComponentC
			}
    ]
  },
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
