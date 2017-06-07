import {Component, Inject} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'ngbd-modal-basic',
    template: require('./menu.jade')
})
export class MenuComponent {
    constructor(@Inject(ActivatedRoute) private routeActive: ActivatedRoute,
                @Inject(Router) private router: Router) {
    }

    ngOnInit() {
        // (+) converts string 'id' to a number
        let id = this.routeActive.snapshot.params['id'];
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }
}