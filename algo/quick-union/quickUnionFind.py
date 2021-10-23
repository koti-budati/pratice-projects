def createTree(n: int):
    elements = {}
    for i in range(n):
        elements[i] = {'root': i, 'weight': 1}
    return elements


ELEMENTS = createTree(1000)


def root(a: int) -> int:
    while ELEMENTS[a]['root'] != a:
        a = ELEMENTS[a]['root']
    return a


def isConnected(a: int, b: int) -> bool:
    a = root(a)
    b = root(b)
    return ELEMENTS[a]['root'] == ELEMENTS[b]['root']


def union(a: int, b: int) -> None:
    if ELEMENTS[a]['weight'] > ELEMENTS[b]['weight']:
        ELEMENTS[b]['root'] = ELEMENTS[a]['root']
        ELEMENTS[a]['weight'] += 1
    else:
        ELEMENTS[a]['root'] = ELEMENTS[b]['root']
        ELEMENTS[b]['weight'] += 1


def main():

    while True:
        userChoice = input(
            'Enter your Choice:\na) union\nb) Connected Check\ne) Exit\n: ')
        if(userChoice == 'a'):
            try:
                a, b = (int(input('Enter first Element: ')),
                        int(input('Enter Second Element: ')))
                union(a, b)
            except ValueError:
                print('Invalid input')
        elif(userChoice == 'b'):
            try:
                a, b = (int(input('Enter first Element: ')),
                        int(input('Enter Second Element: ')))
                print(isConnected(a, b))

            except ValueError:
                print('Invalid input')
        elif(userChoice == 'e'):
            exit(0)
        else:
            print('invalid input')


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print('\nexiting....')
        exit(1)
