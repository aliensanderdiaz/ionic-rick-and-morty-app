import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  Character: any = {
    image: '',
    name: '',
  };

  constructor(
    private routeActive: ActivatedRoute,
    private charServices: CharactersService
  ) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');
    this.charServices.getCharacter(id).subscribe((char: any) => {
      this.Character = char;
    });
  }

}
