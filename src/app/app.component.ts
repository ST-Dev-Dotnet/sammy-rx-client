import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  mobileMenuActive: boolean;

  editorActive: boolean;

  onMobileMenuButton(event) {
    this.mobileMenuActive = !this.mobileMenuActive;
    event.preventDefault();
  }

  hideMobileMenu(event) {
    this.mobileMenuActive = false;
    event.preventDefault();
  }

  onEditorButtonClick() {
      this.editorActive = !this.editorActive;
  }

  onEditorCloseButtonClick() {
      this.editorActive = false;
  }
}
