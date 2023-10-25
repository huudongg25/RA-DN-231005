function checkEvenOdd() {
    const a = +prompt("nhập vào a")

    // isNaN là hàm dùng để kiểm tra 1 biến có phải là NaN hay không

    console.log((a));

    if (isNaN(a)) {
        console.log("Đã lọt vào đây");
        document.write("a không phải là số ", a)
    } else {
        if (a % 2 == 0) {
            document.write("a là số chẵn ", a)
        } else {
            document.write("a là số lẻ ", a)
        }
    }
}

function checkStudent() {
    const toan = +prompt("Nhập vào điểm toán")
    const ly = +prompt("Nhập vào điểm lý")
    const hoa = +prompt("Nhập vào điểm hoá")

    if (isNaN(toan) || isNaN(ly) || isNaN(hoa)) {
        document.write("Vui lòng nhập vào số")
    } else {
        const avg = (toan + ly + hoa) / 3
        if (avg >= 8) {
            document.write("Học sinh giỏi")
        } else if (avg > 6) {
            document.write("Học sinh khá")
        } else {
            document.write("Học sinh yếu và trung bình")
        }
    }
}

function checkMaxNum() {
    const a = +prompt("Nhập vào a")
    const b = +prompt("Nhập vào b")
    const c = +prompt("Nhập vào c")

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.write("Vui lòng nhập là số")
    } else {
        if (a > b && a > c) {
            document.write("a là số lớn nhất ", a)
        } else if (b > a && b > c) {
            document.write("b là số lớn nhất ", b)
        } else if (c > a && c > b) {
            document.write("c là số lớn nhất ", c)
        } else {
            document.write("Không có số nào lớn nhất")
        }
    }
}

function checkStudent2() {
    const monday = 2
    const tues = 3
    const wed = 4
    const thurs = 5
    const fri = 6
    const satur = 7
    const sun = 8
    const number = +prompt("Nhập vào thứ")
    if (Number.isInteger(number)) {
        switch (number) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                document.write("Weekday")
                break;
            default:
                document.write("Weekend")
        }
    } else {
        document.write("Nhập vào là số nguyên")
    }
}

function tenaryOperator() {
    const num = +prompt("Số a")
    //         Điều kiện) ?  true : false
    Number.isInteger(num) ? (num % 2 == 0 ? document.write("số chẵn") : document.write("số lẻ")) : document.write("Không phải số nguyên")
}