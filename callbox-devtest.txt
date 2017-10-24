''' Exercise 1 '''
import math

def array_split(input_array):
    input_array.sort()
    array_one = []
    array_two = []
    array_three = []

    for i in input_array:
        segment = math.ceil(len(input_array)/3)+1
        if i >= segment:
            break
        array_one.append(i)
        array_two.append(int(segment+i))
        array_three.append((int((segment)*2)+i))

    for a in array_one:
        if a not in input_array:
            array_one.remove(a)

    for b in array_two:
        if b not in input_array:
            array_two.remove(b)

    for c in array_three:
        if c not in input_array:
            array_three.remove(c)

    parent_array = [array_one, array_two, array_three]
    return parent_array

test_array = [2,1,3,4,7,5,9,6,8,13,12,11,10,0,15,16,14]
print array_split(test_array)



'''Exercise 2'''
def find_frequency(letter, input_string):
    letter_count = 0
    new_array = list(input_string)
    for i in new_array:
        if i == letter:
            letter_count += 1
    return letter_count

print find_frequency("t", "this is a test")
print find_frequency("y", "this is a test")



'''Exercise 3'''
'''import math'''

def is_power_two(number):
    power_array = []
    for x in xrange(1, number+1):
        two_power = math.pow(2,x)
        if two_power > (number+1):
            break
        else:
        	power_array.append(int(two_power))

    for i in power_array:
        if i == number:
            value = True
        else:
            value = False

    return value

print is_power_two(6)
print is_power_two(16)
