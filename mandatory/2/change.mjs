export function change(amount) {
    var moneyAllowedChange = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var changeMoney = [];
    for (var i = 0; i < moneyAllowedChange.length; i++) {
        while (amount >= moneyAllowedChange[i]) {
            changeMoney.push(moneyAllowedChange[i]);
            amount -= moneyAllowedChange[i];
        }
    }
    return changeMoney;
}