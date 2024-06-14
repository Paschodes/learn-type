import { HasFormatter } from '../interfaces/hasFormatter.js';

//classes
export class Invoice implements HasFormatter {        //because i want to access whats inide the HasFormatter interface i imported i use 'implements HasFormatter'.

    constructor (
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes #${this.amount} for ${this.details}`;
    }
}
