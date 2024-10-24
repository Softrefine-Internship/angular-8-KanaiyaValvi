import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { PaginationPipe } from './pagination.pipe';
import { FormsModule } from '@angular/forms';
import { FormatcurrencyPipe } from './formatcurrency.pipe';

@NgModule({
  declarations: [AppComponent, PaginationPipe, FormatcurrencyPipe],
  imports: [BrowserModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
