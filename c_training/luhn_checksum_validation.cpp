#include <iostream>

using namespace std;

// knowing we've reached the end of the number
//
// knowing which digits to double
// reading each digit separately
// treating doubled numbers 10 and grerater according to their individual digits

int doubledDigitValue(int digit) {
    int doubledDigit = digit * 2;
    if (doubledDigit >= 10) {
        return 1 + (doubledDigit % 10);
    } else {
        return doubledDigit;
    }
}

int main() {
    char digit;
    int checksum = 0;

    cout << "Enter a six-digit number: ";
    for (int i = 0; i < 6; i++) {
        cin >> digit;
        if (i % 2 == 0) {
            checksum += doubledDigitValue(digit - '0');
        } else {
            checksum += digit - '0';
        }
    }
    
    cout << "Checksum: " << checksum << "\n";
    if (checksum % 10 == 0) {
        cout << "Number is valid\n";
    } else {
        cout << "Number is invalid\n";
    }
}
