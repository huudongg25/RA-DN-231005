function reverse<T>(arr: T[]): T[] {
    return arr.reverse();
}

const reversedArray = reverse<number>([1, 2, 3]);
const reversedStringArray = reverse<string>(["a", "b", "c"]);


function logType<T>(value: T): void {
    console.log(typeof value);
}

logType<number>(123);
logType<string>("hello");


class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getValue(): T {
        return this.content;
    }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("hello");


interface KeyValuePair<K , V> {
    key: K;
    value: V;
}

const pair1: KeyValuePair<number, string> = { key: 1, value: "one" };
const pair2: KeyValuePair<string, boolean> = { key: "isTrue", value: true };


function mapArray<T, U>(arr: T[], mapper: (item: T) => U): U[] {
    return arr.map(mapper);
}

const numbers: number[] = [1, 2, 3, 4];
const squaredNumbers = mapArray<number, string>(numbers, (num) => {
    if(num > 2){
        return "true"
    }
    return "false"
});

console.log(squaredNumbers);