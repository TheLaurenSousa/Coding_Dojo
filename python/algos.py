# Write a function that when given a list and an integer, returns the count of values within that list that are divisible by that given integer.
# Example: isDivisibleBy([3,6,9,10], 3) should return 3

# def isDivisibleBy(list, value):
#     count = 0
#     for x in range(len(list)):
#         if list[x] % value == 0:
#             count += 1
#     return count
# print(isDivisibleBy([3,6,9,10], 3))

# def divs_vals(list, int):
#     count = 0
#     i = 0
#     while i < len(list):
#         if list[i] % int == 0:
#             count += 1
#         i += 1
#     return count
# print (divs_vals([3, 6, 9, 10], 3))

# def divs_vals(list, int):
#     count = 0
#     for i in list:
#         if i % int == 0:
#             count += 1
#     return count
# print (divs_vals([3, 6, 9, 10], 3))

# -------------------------------------------------------------------------------------------------------------------------------------------

# Write a function that given a string date such as "04/13/2022", returns whether or not a person's birthday has passed as of today "06/13/2022".
# Birthday("05/30/1993") should return True while Birthday("11/05/1959") should return False
# Bonus: return a string with the user's current age and whether or noth they have had a birthday. 
# Birthday("05/30/1995") should return "User is currently 26 years old and has not yet had their birthday this year"

# def birthday(input):
#     today  = "06/13/2022"
#     todayDays = (int((today[0:2]))*30)+(int(today[3:5]))
#     inputDays = (int((input[0:2]))*30)+(int(input[3:5]))
    
#     if inputDays < todayDays:
#         return False
#     elif inputDays > todayDays:
#         return True
#     else:
#         print("Happy Birthday!")

# def birthday(input):
#     today = "06/13/2022"
#     birthday = ''
#     if int(today[0:2]) > int(input[0:2]):
#         birthday = True
#     elif int(today[0:2]) < int(input[0:2]):
#         birthday = False
#     elif int(today[3:5]) >= int(input[3:5]):
#         birthday = True
#     else:
#         birthday = False
#     if birthday == True:
#         age = int(today[6:]) - int(input[6:])
#         bdaystring = "has"
#     else:
#         age = int(today[6:]) - int(input[6:]) -1
#         bdaystring = "has not"
#     return "User is currently "+str(age)+" years old and "+bdaystring+" had their birthday this year."

# print(birthday("02/30/1995"))

# -------------------------------------------------------------------------------------------------------------------------------------------

# def minimumValue(list):
#     minValue = list[0]
#     for value in list:
#         if value < minValue:
#             minValue = value
#     return minValue

# def maximumValue(list):
#     maxValue = list[0]
#     for value in list:
#         if value > maxValue:
#             maxValue = value
#     return maxValue

# def averageValue(list):
#     sumValue = 0
#     for value in list:
#         sumValue +=value
#     return sumValue/len(list)

# def minMaxAverage(list):
#     minValue = minimumValue(list)
#     maxValue = maximumValue(list)
#     avgValue = averageValue(list)
#     return [minValue, maxValue, avgValue]

# print(minMaxAverage([4,7,0,2,18]))

# -------------------------------------------------------------------------------------------------------------------------------------------










# -------------------------------------------------------------------------------------------------------------------------------------------