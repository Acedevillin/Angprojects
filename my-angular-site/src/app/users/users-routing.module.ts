import { UsersSingleComponent } from "./users-single/users-single.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: UsersListComponent,
  },

  {
    path: ":username",
    component: UsersSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
