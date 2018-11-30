export default class Result {
    _inherit: boolean = false;

    constructor(value: string, type?: string) {
        this.digest(value, type);
    }

    digest(value: string, type?: string) {
        //
    }

    toString(): string {
        return this.constructor.name;
    }
}
