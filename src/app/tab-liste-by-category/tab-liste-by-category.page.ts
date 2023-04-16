import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { datasAnnuaire } from '../datas-annuaire/datas';

@Component({
  selector: 'app-tab-liste-by-category',
  templateUrl: './tab-liste-by-category.page.html',
  styleUrls: ['./tab-liste-by-category.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TabListeByCategoryPage implements OnInit {
  public cat!: string;
  public datas = datasAnnuaire;
  public filteredDatas !: any;

  constructor(private activatedRoute: ActivatedRoute) {
    if (this.activatedRoute.snapshot.paramMap.get('cat')) {
      this.cat =
        this.activatedRoute.snapshot.paramMap.get('cat')?.toUpperCase() ?? '';
    }
    console.log(this.cat);

    this.filteredDatas = this.datas.filter((obj) => obj.cat === this.cat)?? [];
  }

  ngOnInit() {}
}
