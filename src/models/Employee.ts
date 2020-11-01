export class Employee {
    cell: string;
    email: string;
    name: {
        first: string;
        last: string;
    };
    picture: {
        medium: string;
    };

    constructor(cell: string, email: string, name: { first: string, last: string }, picture: { medium: string }) {
        this.cell = cell;
        this.email = email;
        this.name = name;
        this.picture = picture;
    }

}