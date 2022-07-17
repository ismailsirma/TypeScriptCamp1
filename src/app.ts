class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const tech = new Department('Tech');

console.log(tech)