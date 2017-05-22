import {Injectable,Inject} from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Injectable()
export class AppService {
    constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {
    }
    name='0066660'
    getHeroes(): string {
        this.route
        debugger
        return this.name
    }
}