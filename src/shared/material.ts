// material.module.ts
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// ... other Material modules

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    // ... other Material modules
  ],
})
export class MaterialModule {}