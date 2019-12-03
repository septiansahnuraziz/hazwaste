import { ApiServiceService } from 'src/app/service/api-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  listPenghasil: any = [];

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
    private router: Router,
    private service: ApiServiceService
  ) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    this.service.getPenghasil().subscribe(pengemudi => {
      console.log(pengemudi);
      this.listPenghasil = pengemudi;
    });

    this.service.getJenisLimbah().subscribe(limbah => {
      console.log(limbah);
    });

    this.service.getKemasan().subscribe(kemasan => {
      console.log(kemasan);
    });

    this.service.getUnit().subscribe(unit => {
      console.log(unit);
    });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  next() {
    this.router.navigate(['/list/driver']);
  }
}
