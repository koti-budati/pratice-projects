import sys
import csv


def main():
    if(len(sys.argv) != 3):
        print("usage dna.py filename candidatesfile")
        sys.exit(0)
    dna = ''
    with open(sys.argv[1], 'r') as dnaFile:
        for i in dnaFile:
            dna += i

    agat = sequence(dna, 'AGATC')
    aatg = sequence(dna, 'AATG')
    tatc = sequence(dna, 'TATC')
    # print(f"agat: {agat} aatg: {aatg} tatc: {tatc}")
    person = []
    with open(sys.argv[2], 'r') as peopleList:
        people = csv.DictReader(peopleList)
        for i in people:
            person.append({
                'name': i['name'],
                'AGATC': int(i['AGATC']),
                'AATG': int(i['AATG']),
                'TATC': int(i['TATC']),
                })
    print(match(person, [agat, aatg, tatc]))


def sequence(dna, seq):
    maximum = 0
    for i in range(len(dna) - len(seq) + 1):
        j = i
        count = 0
        while True:
            if dna[j: j+len(seq)] == seq:
                count += 1
            else:
                break
            j += len(seq)
        if count > maximum:
            maximum = count
        i = j
    return maximum


def match(people, sequences):
    for i in people:
        # print(f"name: {i['name']} agat: {i['AGATC']} aatg: {i['AATG']} tatc: {i['TATC']}")
        if i['AGATC'] == sequences[0] and i['AATG'] == sequences[1] and i['TATC'] == sequences[2]:
            return i['name']
    return 'no match'


if __name__ == "__main__":
    main()
