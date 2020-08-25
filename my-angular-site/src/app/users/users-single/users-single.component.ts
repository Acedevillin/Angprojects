import { UserService } from "../../core/services/user.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-users-single",
  template: `
    <section>
      <div class="section">
        <div class="container">
          <div class="card" *ngIf="user">
            <img [src]="user.avatar_url" />
            <h2>{{ user.login }}</h2>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class UsersSingleComponent implements OnInit {
  user;

  constructor(
    private userservice: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //grab  username out of url
    this.route.params.subscribe((params) => {
      const username = params["username"];
      //use the uservice to get data from github api
      this.userservice
        .getUser(username)
        .subscribe((user) => (this.user = user));
    });
  }
}
