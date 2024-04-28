import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    getValue() {
        return 'value';
    }

}