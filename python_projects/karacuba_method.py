import math

# Method for multiply two number with better speed
# by ukrainian scientist Anatolij Karacuba

def karacuba_method(x, y):
    xn = len(str(x))
    yn = len(str(y))
    n = 0

    if xn == yn:
        n = next_two_pow(xn)
    else:
        n = next_two_pow(xn) if xn > yn else next_two_pow(yn)
    
    if n == 1:
        return x * y
    
    n2 = int(n / 2);
    powN = pow(10, n2)
    a = int(x // powN)
    b = int(x % powN)
    c = int(y // powN)
    d = int(y % powN)

    ac = karacuba_method(a, c)
    bd = karacuba_method(b, d)
    adbc = int(karacuba_method((a + b), (c + d)) - ac - bd)

    result = int((pow(10, n) * ac) + (powN * adbc) + bd)
    return int(result)

def next_two_pow(number):
    n = 0
    for i in range(0, 15):
        n = 2**i;
        if n >= number:
            break;
    
    return n

