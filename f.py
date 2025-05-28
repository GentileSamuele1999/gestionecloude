
from random import randint




l=[]



cont=randint(1,687)
while True:
    cont+=1
    l.append(cont)
    if cont==27:
        for i in l:
            print(i)



