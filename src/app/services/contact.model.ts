import {utils} from './utils.service'
export class Contact {

    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public _id?: string
        ) {
    }

    // setId?(length = 10) {
    //     Contact._id = utils.makeId()
    //     }
    
}