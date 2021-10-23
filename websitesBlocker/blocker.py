#!/usr/bin/python3
import datetime
import time
import sys
import re

try:
    WEBSITE = sys.argv[1]
    with open('/home/kittu/Documents/webBlocker/blocker.txt', 'a+') as sitesList:
        sitesList.seek(0)
        if WEBSITE not in sitesList.readlines():
            sitesList.write(WEBSITE)
except IndexError:
    pass

TIME = datetime.datetime.now().hour


def unBlock():
    originalHost = ''
    absPath = '/home/kittu/Documents/webBlocker/'
    with open(absPath + 'originalHostFile.txt', 'r') as file:
        originalHost = file.readlines()

    with open('/etc/hosts', 'w') as hosts:
        hosts.writelines(originalHost)
    return 0


def block():
    pathToBlockFile = '/home/kittu/Documents/webBlocker/blocker.txt'

    websites = ''
    with open(pathToBlockFile, 'r') as file:
        websites = file.readlines()
    sites = ''
    hostPath = '/etc/hosts'
    with open(hostPath, 'a+') as hosts:
        hosts.seek(0)
        sites = hosts.readlines()
        isPresent = False
        for i in websites:
            i = i.strip()
            k = ''
            for j in sites:
                if re.search(i, j) is not None:
                    isPresent = True
                    break
            if isPresent is False:
                k += f"127.0.0.1\twww.{i}.com\n"
                k += f"127.0.0.1\thttps://www.{i}.com\n"
                hosts.writelines(k)
    return 1


while True:
    if (TIME < 7 and TIME > 23) or (TIME > 10 and TIME < 12) or (TIME > 14 and TIME < 16) or (TIME > 18 and TIME < 21):
        block()
    else:
        unBlock()
    time.sleep(10)
