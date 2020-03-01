#include <iostream>

using namespace std;

void convertNumberToUppercaseLetter() {
    cout << "Enter a number 1-26: ";
    int number;
    cin >> number;
    char outputCharacter;
    outputCharacter = number + 'A' - 1;
    cout << "Equivalent symbol: " << outputCharacter << "\n";
}

void getNumbers() {
    char digitChar;
    do {
        digitChar = cin.get();
        int number = digitChar - '0';
        digitChar = cin.get();
        while ((digitChar != 10) && (digitChar != ',')) {
            number = number * 10 + (digitChar - '0');
            digitChar = cin.get();
        }
        cout << "Numbered entered: " << number << "\n";
    } while (digitChar != 10);
}

int main() {
    convertNumberToUppercaseSymbol();
}