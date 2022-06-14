class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(f"The user's first name is: {self.first_name}. \n The user's last name is: {self.last_name}.\n The user's email is: {self.email}. \n The user's age is: {self.age}.\n The user has {self.gold_card_points} gold card points.")
        return self

    def enroll(self):
        if self.is_rewards_member == True:
            print("The User is already a member.")
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
        return self

    def spend_points(self, amount):
        if self.gold_card_points == 0:
            print("Sorry, you have 0 gold card points remaining. The purchase cannot be completed.")
        else:
            self.gold_card_points -= amount
        return self



lauren = User("Lauren", "Sousa", "Test@test.com", 28 )
kristina = User("Kristina", "Frauenfelder", "Test2@test.com", 38 )
alana = User("Alana", "Nix", "Test3@test.com", 32)

lauren.enroll().spend_points(50).display_info().enroll()
kristina.enroll().spend_points(80).display_info()
alana.display_info().spend_points(40)