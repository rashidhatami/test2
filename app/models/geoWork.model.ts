import {Item} from './interface/item.interface';

export class GeoWork {
    private readonly items: Item[];

    constructor() {
        this.items = [
            {value: 0, viewValue: 'سرچشمه'},
            {value: 1, viewValue: 'میدوک'},
            {value: 2, viewValue: 'خاتون آباد'},
            {value: 3, viewValue: 'منطقه ای'},
            {value: 4, viewValue: 'تهران'},
            {value: 5, viewValue: 'سونگون'},
        ];
    }

    get Items(): readonly Item[] {
        return this.items;
    }
}
