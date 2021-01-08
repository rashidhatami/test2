import {Item} from './interface/item.interface';

export class DuplicateCard {
    private readonly items: Item[];

    constructor() {
        this.items  = [
            {value: 0, viewValue: 'جدید'},
            {value: 1, viewValue: 'المثنی'},
            {value: 2, viewValue: 'المثنی بار دوم'},
        ];
    }

    getViewValue(idx: number): string {
        return (idx != null && (idx >= 0 && idx <= 2)) ? this.items[idx].viewValue : '';
    }

    get Items(): readonly Item[] {
        return this.items;
    }
}
