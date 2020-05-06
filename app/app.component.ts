import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public tabs = [1, 2];
  public activeTabNumber = 1;

  public dec() {
    if (this.activeTabNumber === this.tabs[this.tabs.length - 1]) {
      this.activeTabNumber = 1;
    }
    this.tabs = this.tabs.slice(0, -1);
  }

  setActiveTabNumber(event) {
    this.activeTabNumber = event;
  }

  public inc() {
    this.tabs = [...this.tabs, this.tabs.length + 1];
  }
}
