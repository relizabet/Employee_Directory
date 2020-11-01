export class Employee {
    cell: string;
    email: string;
    firstName: string;
    lastName: string;
    picture: string;

    constructor(cell: string, email: string, firstName: string, lastName: string, picture: string) {
        this.cell = cell;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
    }

}