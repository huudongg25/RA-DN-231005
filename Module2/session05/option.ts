//optional chainning

interface Person {
    name: string
    age?: number
}

const obj4: Person = {
    name: "Phúc"
}

console.log(obj4);

function test(params?:string):string | undefined {
    return params
}

test()