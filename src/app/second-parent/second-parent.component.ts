import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-second-parent',
	templateUrl: './second-parent.component.html'
})
export class SecondParentComponent {
    constructor(private router: Router) { }

    ngOnInit() {
        console.log('Initializes SecondParentComponent');
    }

    navigateToRoute(route: string) {
		console.log(route);
		if (route === 'a') {
			this.router.navigate(['developers']);
		}

		if (route === 'b') {
			this.router.navigate(['developers/apps']);
		}

		if (route === 'c') {
			this.router.navigate(['developers/libs']);
		}
	}
}
