import {ItemString} from './interface/item.interface';

export class userAccessType {
    private readonly items: ItemString[];

    constructor() {
        this.items  = [
            {value: '1000006', viewValue: 'کاربر روابط صنعتی'},
            {value: '5000006', viewValue: 'کاربر حراست'},
        ];
    }

    get Items(): readonly ItemString[] {
        return this.items;
    }
}
