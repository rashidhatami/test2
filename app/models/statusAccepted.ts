import {Item} from './interface/item.interface';

export class StatusAccepted {
    private readonly items: Item[];

    constructor() {
        this.items = [
            {value: 0, viewValue: 'تحت بررسی'},
            {value: 1, viewValue: 'تایید'},
            {value: 2, viewValue: 'عدم تایید'},
        ];
    }

    getViewValue(idx: number): string {
        return (idx != null && (idx >= 0 && idx <= 2)) ? this.items[idx].viewValue : '';
    }

    get Items(): readonly Item[] {
        return this.items;
    }
}
