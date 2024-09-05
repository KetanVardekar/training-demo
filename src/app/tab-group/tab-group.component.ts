import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css'
})
export class TabGroupComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  activeTab!: TabComponent;

  ngAfterContentInit() {
    // Initialize the first tab as active
    this.activeTab = this.tabs.first;
  }

  selectTab(tab: TabComponent) {
    this.activeTab = tab;
  }
}
