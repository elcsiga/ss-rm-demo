import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cr-view',
  templateUrl: './cr-view.component.html',
  styleUrls: ['./cr-view.component.css']
})
export class CrViewComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }
  
  getId() {
    return this.route.params.map(
      params => params['id']
    );
  }

  onBackButtonClicked() {
    confirm('Are you sure?') && this.router.navigate(['/cr']);
  }
}
