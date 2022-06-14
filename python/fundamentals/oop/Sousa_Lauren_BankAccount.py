class BankAccount:
    all_accounts = []

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance, amount):
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee.")
            self.balance -= 5
        return self
    
    def display_account_info(self):
        print(f"The account balance is: ${self.balance}")
        return self
    
    def yield_interest(self):
        self.balance *= (1 + self.int_rate)
        return self

    @classmethod
    def all_balances(cls):
        for account in cls.all_accounts:
            account.display_account_info()

    @staticmethod
    def can_withdraw(balance, amount):
        if (balance - amount) < 0:
            return False
        else:
            return True


lauren = BankAccount(0.01, 10)
liz = BankAccount(0.02, 20)
lauren.deposit(2).deposit(3).deposit(5).withdraw(10).yield_interest().display_account_info()
liz.deposit(6).deposit(4).withdraw(2).withdraw(4).withdraw(1).withdraw(3).yield_interest().display_account_info()
BankAccount.all_balances()