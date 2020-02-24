#include <iostream>

using namespace std;

// knowing which digits to double
// treating doubled numbers 10 and grerater according to their individual digits
// knowing we've reached the end of the number
// reading each digit separately

int doubledDigitValue(int digit) {
    int doubledDigit = digit * 2;
    if (doubledDigit >= 10) {
        return 1 + (doubledDigit % 10);
    } else {
        return doubledDigit;
    }
}

int main() {
    int digit;
    cout << "Enter a single digit number, 0-9: ";
    cin >> digit;
    
    cout << doubledDigitValue(digit) << "\n";
}
