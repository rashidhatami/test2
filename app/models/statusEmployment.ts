import {Item} from './interface/item.interface';

export class StatusEmployment {
    private readonly items: Item[];

    constructor() {
        this.items = [
            {value: 0, viewValue: 'شاغل'},
            {value: 1, viewValue: 'بازنشسته'},
        ];
    }

    getViewValue(idx: number): string {
        return (idx != null && (idx >= 0 && idx <= 1)) ? this.items[idx].viewValue : '';
    }

    get Items(): readonly Item[] {
        return this.items;
    }
}
