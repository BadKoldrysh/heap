import math
import sys
sys.setrecursionlimit(10**6)

def karacubaMethod(x, y):
    xn = len(str(x))
    yn = len(str(y))
    n = 0

    if xn == yn:
        n = nextTwoPow(xn)
    else:
        n = nextTwoPow(xn) if xn > yn else nextTwoPow(yn)
    
    if n == 1:
        return x * y
    
    n2 = int(n / 2);
    powN = pow(10, n2)
    a = int(str(x)[:n2])
    b = int(str(x)[n2:])
    c = int(str(y)[:n2])
    d = int(str(y)[n2:])

    ac = int(a * c)
    bd = int(b * d)
    adbc = int(((a + b)*(c + d)) - ac - bd)

    result = int((pow(10, n) * ac) + (powN * adbc) + bd)
    return int(result)

def nextTwoPow(number):
    n = 0
    for i in range(0, 15):
        n = 2**i;
        if n >= number:
            break;
    
    return n

print(karacubaMethod(34215432964249374812219364786397, 94541964835273822784327848699719))
