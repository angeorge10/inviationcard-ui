import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SortableTableHeaderDirective } from './directives/sortable-table-header/sortable-table-header.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    AlertsComponent,
    HeaderComponent,
    FooterComponent,
    SortableTableHeaderDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    NgbPaginationModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AlertsComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    NgbPaginationModule,
    NgbModule,
    SortableTableHeaderDirective
  ]
})
export class SharedModule { }
