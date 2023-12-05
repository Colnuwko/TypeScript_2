declare let data: number[];
declare function removeZeroElements(data: number[]): number;
declare const preparedData: number;
declare let matrix: number[][];
declare function count_zero(matrix: number[][]): number;
declare const count: number;
declare const tuple: [string, string, string];
declare const showTuple: (tuple: [string, string, string]) => string;
declare enum SomePrinter {
    Printer_1 = "Pantum P2207",
    Printer_2 = "HP LaserJet M141a",
    Printer_3 = "Canon Pixma G1420"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const somePet: Pet;
declare const someCat: Pet;
declare const someDog: Pet;
interface Int1234 {
    name: string;
    age: number;
    enum1: SomePrinter;
    eof: 'NO' | 'YES';
}
declare const obj1: Int1234;
declare const jsonObject: string;
declare const objParsed: Int1234;
declare let partObject: SomePrinter;
