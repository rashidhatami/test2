import {Item} from './interface/item.interface';

export class StatusEmployee {
    private readonly items: Item[];

    constructor() {
        this.items = [
            {value: 0, viewValue: 'شرکتی'},
            {value: 1, viewValue: 'سرمایه گذاری'},
        ];
    }

    getViewValue(idx: number): string {
        return (idx != null && (idx >= 0 && idx <= 1)) ? this.items[idx].viewValue : '';
    }

    get Items(): readonly Item[] {
        return this.items;
    }
}
