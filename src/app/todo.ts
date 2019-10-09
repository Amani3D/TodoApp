export class Todo {

    id: number;
    title: string = '';
    complete: boolean = false;
    date: Date = new Date();

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
