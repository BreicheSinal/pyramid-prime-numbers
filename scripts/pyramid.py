input = input("Enter a number: ")
num = int(input)

output = []

def pyramid(rows):
    for x in range(1, rows + 1):
        oddNum = 1
        for y in range(x):
            output.append(str(oddNum))
            output.append(' ')
            oddNum +=2
        output.append('\n')
    return output

pyramid(num)
print(''.join(output))