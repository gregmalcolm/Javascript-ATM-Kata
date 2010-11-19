describe("ATM Story Tests", function() {
    var machine;
    beforeEach(function() {
         var accounts = {
            '1234567890': {
                holder: 'Judy',
                balance: 100,
                pin: 1234
            }
        }
        machine = ATM.create(accounts);

    });
    it("Allows Judy to withdraw money when she has a balance available", function() {
        expect(machine.withdraw(10, '1234567890', 1234)).toEqual(10);
    });
    it("Prevents Judy from withdrawing money when she doesn't have it available", function() {
        expect(machine.withdraw(105, '1234567890', 1234)).toEqual(0);
    });
    it("Prevents Judy from withdrawing money when she puts in an incorrect pin", function() {
        expect(machine.withdraw(50, '1234567890', 5678)).toEqual(0);
    });
    it("Prevents Judy from withdrawing money when she puts in an incorrect account number", function() {
        expect(machine.withdraw(50, '0987654321', 1234)).toEqual(0);
    });
    it("Updates Judys balance when she withdraws money", function() {
        machine.withdraw(25, '1234567890', 1234);
        expect(machine.checkBalance('1234567890', 1234).toEqual(75));
    });
});
