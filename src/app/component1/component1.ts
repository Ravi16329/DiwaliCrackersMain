import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component1',
  standalone: true, // ✅ Required if using standalone component
  imports: [FormsModule], // ✅ Works with standalone: true
  templateUrl: './component1.html',
  styleUrls: ['./component1.css'] // ✅ Corrected: should be "styleUrls" (plural)
})
export class Component1 {
  dayNum: string = '';
  month: string = '';
  currentYear: number = new Date().getFullYear();

  // Search-related variables
  searchTerm: string = '';
  showMessage: boolean = false;
  crackers: string[] = ['flower pot', 'sparkler', 'rocket', 'bomb', 'chakri', 'fountain', 'garland', 'ravi'];

  constructor() {
    const date = new Date();
    this.dayNum = String(date.getDate()).padStart(2, '0');
    this.month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  }

  searchCracker() {
    const input = this.searchTerm.trim().toLowerCase();
    if (this.crackers.some(c => c.toLowerCase() === input)) {
      window.alert("Yes! I am available. You can buy me 🎉");
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000); // Hide message after 2 seconds
    } else {
      window.alert("Sorry 😔 We don't have the product you searched for. Please check back later.");
    }
  }
}
