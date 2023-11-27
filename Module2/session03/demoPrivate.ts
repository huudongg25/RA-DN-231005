class Bank {
    readonly fullName: string
    private stk: number
    protected money:number

    constructor(fullName:string,stk:number,money:number){
        this.fullName = fullName
        this.stk = stk
        this.money = money
    }

    //getter
    get getSTK() : number {
        return this.stk
    }

    //setter
    set setSTK(value : number) {
        if(value.toString().length > 4){
            this.stk = value;
        }
    }
    
    

    getMoney(stk:number):number | string{
        if(stk == this.stk){
            return this.money
        }else {
            return "Không đúng số tài khoản"
        }
    }

}

class Person extends Bank {
    crawlMoney(){
        return this.fullName
    }
}


const userPhuc = new Bank('Phúc',1234,10000)
const userHieu = new Bank('Hieu',1111,10000)

console.log(userPhuc.getMoney(1234));

userPhuc.setSTK = 222222
console.log(userPhuc.getSTK);

