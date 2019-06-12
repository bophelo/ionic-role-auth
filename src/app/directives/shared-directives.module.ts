import { HasRoleDirective } from './has-role.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HasRoleDirective],
  imports: [
    CommonModule
  ],
  exports: [HasRoleDirective]
})
export class SharedDirectivesModule { }
