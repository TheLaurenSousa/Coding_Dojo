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

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = {
            "account1" : BankAccount(0.02, 0),
            "account2" : BankAccount(0.02, 0)
        }
    
    def make_deposit(self, amount):
        print("Which account would you like to deposit this money into? Account 1 or Account 2?")
        choice = input()
        if choice == "Account 1":
            self.account['account1'].deposit(amount)
        elif choice == "Account 2":
            self.account['account2'].deposit(amount)
        else:
            print("I'm sorry, you didn't enter the correct account name. Please try again later.")
        return self

    def make_withdrawal(self, amount):
        print("Which account would you like to withdraw this money from? Account 1 or Account 2?")
        choice = input()
        if choice == "Account 1":
            self.account['account1'].withdraw(amount)
        elif choice == "Account 2":
            self.account['account2'].withdraw(amount)
        else:
            print("I'm sorry, you didn't enter the correct account name. Please try again later.")
        return self

    def display_user_balance(self):
        print(f"The account balance for Account 1 is: ${self.account['account1'].balance}")
        print(f"The account balance for Account 2 is: ${self.account['account2'].balance}")
        return self

    def transfer_money(self, amount, user):
        self.account['account1'].withdraw(amount)
        user.account['account1'].deposit(amount)
        self.display_user_balance()
        user.display_user_balance()
        return self

lauren = User("Lauren", "test@test.com")
liz = User ("Liz", "test2@test.com")
lauren.make_deposit(10)
lauren.make_withdrawal(5)
lauren.display_user_balance()
lauren.transfer_money(5, liz)
lauren.display_user_balance()
liz.display_user_balance()