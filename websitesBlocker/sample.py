import os


def unBlock():
    absPath = '/home/kittu/Documents'
    with open(os.path.join(absPath, 'tempHost.txt'), 'a+') as hosts:
        hosts.seek(0)
        originalHost = hosts.readlines()
        originalHost.append('hello')
        hosts.writelines(originalHost)
    return 0


unBlock()
