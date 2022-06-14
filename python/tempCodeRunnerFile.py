def averageValue(list):
    sumValue = 0
    for value in list:
        sumValue +=value
    return sumValue/len(list)

print(averageValue([1,2,3]))