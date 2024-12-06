import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from '../../service/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly titlePage = inject(Title);
  public homeTitle: string = '';
  public homeText: string = '';

  constructor(private appService: AppService) {
    this.titlePage.setTitle('Homepage - Site Application');
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.appService.getData().subscribe((data) => {
      this.homeTitle = data.page.homepage.title;
      this.homeText = data.page.homepage.text;
    });
  }
}
