#include <iostream>

using namespace std;

// The program for validate a number by the Luhn checksum

int doubledDigitValue(int digit) {
    int doubledDigit = digit * 2;
    if (doubledDigit >= 10) {
        return 1 + (doubledDigit % 10);
    } else {
        return doubledDigit;
    }
}

void validateNumber() {
    char digit;
    int checksumOdd = 0;
    int checksumEven = 0;
    int position = 1;

    cout << "Enter a number: ";
    digit = cin.get();
    while (digit != 10) {
        if (position % 2 == 0) {
            checksumOdd += doubledDigitValue(digit - '0');
            checksumEven += digit - '0';
        } else {
            checksumOdd += digit - '0';
            checksumEven += doubledDigitValue(digit - '0');
        }
        digit = cin.get();
        position++;
    }
    
    int checksum;
    if ((position - 1) % 2 == 0) {
        checksum = checksumEven;
    } else {
        checksum = checksumOdd;
    }
    cout << "Checksum: " << checksum << "\n";
    if (checksum % 10 == 0) {
        cout << "Checksum is divisible by 10. Number is valid\n";
    } else {
        cout << "Checksum is not divisible by 10. Number is invalid\n";
    }
}

int main() {
    validateNumber();
}
