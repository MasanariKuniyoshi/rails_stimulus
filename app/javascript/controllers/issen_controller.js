import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="issen"
export default class extends Controller {
  static targets = ["name", "output"];

  connect() {}

  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}
