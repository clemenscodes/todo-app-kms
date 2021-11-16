export class Task {
    private static id = 1;

    constructor(title: string, done?: boolean) {
        this.title = title;
        this.done = false;
        this.id = Task.id++;
    }

    id: number;
    title: string;
    done: boolean;
}
