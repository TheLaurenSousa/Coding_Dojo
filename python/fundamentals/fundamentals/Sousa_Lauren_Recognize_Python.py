num1 = 42 #Variable declaration, number
num2 = 2.3 #Variable declaration, number
boolean = True #boolean
string = 'Hello World'
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #List
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #List
fruit = ('blueberry', 'strawberry', 'banana') #List
print(type(fruit)) #Log statement
print(pizza_toppings[1]) #access value, log statement
pizza_toppings.append('Mushrooms') #add value
print(person['name'])  #log statement, access value
person['name'] = 'George' #add value
person['eye_color'] = 'blue' #add value
print(fruit[2]) #log statement, access value

if num1 > 45:  #if conditional
    print("It's greater") #log statement
else: #else conditional
    print("It's lower") #log statement

if len(string) < 5: #if conditional
    print("It's a short word!") #log statement
elif len(string) > 15: #else if conditional 
    print("It's a long word!") #log statement
else: #else statement
    print("Just right!")

for x in range(5):#for loop sequence
    print(x) #log statment
for x in range(2,5): #for loop sequence
    print(x) #log statement
for x in range(2,10,3): #for loop sequence
    print(x) #log statement
x = 0 #variable declaration, number
while(x < 5): #while loop
    print(x) #log statement
    x += 1 #variable declaration

pizza_toppings.pop() #delete value
pizza_toppings.pop(1) #delete value

print(person) #log statement
person.pop('eye_color') #delete value
print(person) #log statement

for topping in pizza_toppings: #for loop sequence
    if topping == 'Pepperoni': #if conditional
        continue 
    print('After 1st if statement') #log statement
    if topping == 'Olives': #if conditional
        break 

def print_hello_ten_times(): #function
    for num in range(10): #for loop sequence
        print('Hello') #log statement

print_hello_ten_times() #function

def print_hello_x_times(x): #function
    for num in range(x): #for loop sequence
        print('Hello') #log statement

print_hello_x_times(4) #function

def print_hello_x_or_ten_times(x = 10): #function
    for num in range(x): #for loop sequence
        print('Hello') #log statement

print_hello_x_or_ten_times() #function
print_hello_x_or_ten_times(4) #function


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)