#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())
# Prediction: 5

#2
def number_of_military_branches():
    return 5
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())
# Prediction: Error due to undefined function

#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold())
# Prediction: 5

#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())
# Prediction: 5

#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)
# Prediction: Prints "5"
# Results: Printer "5" then "None" because there's no return on the function

#6
def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))
# Prediction: "3" then "5" then "8"
# Results: It printed "3" and "5", but then ran into an error when combining the two because the types weren't defined

#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))
# Prediction: "25" because they're both defined as strings, not integers

#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())
# Prediction: "100" then "10"

#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
# Prediction: "7" then "14" then I expect there to be an error
# Results: "7" then "14" then "21"

#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5))
# Prediction: "8"

#11
b = 500
print(b)
def foobar():
    b = 300
    print(b)
print(b)
foobar()
print(b)
# Prediction: "500" then "500" then "300" then "500"

#12
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
foobar()
print(b)
# Prediction: "500" then "500" then "300" then "500"

#13
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
b=foobar()
print(b)
# Prediction: "500" then "500" then "300" then "300"

#14
def foo():
    print(1)
    bar()
    print(2)
def bar():
    print(3)
foo()
# Prediction: "1" "3" "2"

#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo()
print(y)
# Prediction: "1" "5" "10"
# Results: "1" "3" "5" "10" I missed the "3"