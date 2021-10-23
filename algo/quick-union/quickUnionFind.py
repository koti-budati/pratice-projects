class UnionFind:
    def __init__(self, element: int) -> None:
        self.elements = self.createTree(element)

    def createTree(self, n: int):
        elements = {}
        for i in range(n):
            elements[i] = {'root': i, 'weight': 1}
        return elements

    def root(self, a: int) -> int:
        while self.elements[a]['root'] != a:
            a = self.elements[a]['root']
        return a

    def isConnected(self, a: int, b: int) -> bool:
        a = self.root(a)
        b = self.root(b)
        return self.elements[a]['root'] == self.elements[b]['root']

    def union(self, a: int, b: int) -> None:
        if self.elements[a]['weight'] > self.elements[b]['weight']:
            self.elements[b]['root'] = self.elements[a]['root']
            self.elements[a]['weight'] += 1
        else:
            self.elements[a]['root'] = self.elements[b]['root']
            self.elements[b]['weight'] += 1


def main():
    quickUnionFind = UnionFind(1000)
    while True:
        userChoice = input(
            'Enter your Choice:\na) union\nb) Connected Check\ne) Exit\n: ')
        if(userChoice == 'a'):
            try:
                a, b = (int(input('Enter first Element: ')),
                        int(input('Enter Second Element: ')))
                quickUnionFind.union(a, b)
            except ValueError:
                print('Invalid input')
        elif(userChoice == 'b'):
            try:
                a, b = (int(input('Enter first Element: ')),
                        int(input('Enter Second Element: ')))
                print(quickUnionFind.isConnected(a, b))

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
