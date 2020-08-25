import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersSingleComponent } from "./users-single/users-single.component";

@NgModule({
  declarations: [UsersListComponent, UsersSingleComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
