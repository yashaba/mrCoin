import {utils} from './utils.service'
export class User {

    constructor(
        public name: string = '',
        public coins: number = 100,
        public moves = [],
        public _id?: string
        ) {
    }
    
}