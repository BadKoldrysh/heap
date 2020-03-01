#include <iostream>

using namespace std;

void modeSwitching() {
    enum modeType {UPPERCASE, LOWERCASE, PUNCTUATION};
    int number;
    modeType mode = UPPERCASE;
    cout << "Enter some numbers ending with -1: ";
    do {
        cin >> number;
        cout << "Number read: " << number;
        switch (mode) {
            case UPPERCASE:
                number = number % 27;
                cout << ". Modulo 27: " << number << ". ";
                if (number == 0) {
                    cout << "Switch to LOWERCASE";
                    mode = LOWERCASE;
                }
                break;
            case LOWERCASE:
                number = number % 27;
                cout << ". Modulo 27: " << number << ". ";
                if (number == 0) {
                    cout << "Switch to PUNCTUATION";
                    mode = PUNCTUATION;
                }
                break;
            case PUNCTUATION:
                number = number % 9;
                cout << ". Modulo 9: " << number << ". ";
                if (number == 0) {
                    cout << "Switch to UPPERCASE";
                    mode = UPPERCASE;
                }
                break;
        }
        cout << "\n";
    } while (number != -1);
}

char convertNumberToUppercaseLetter(int number) {
    return number + 'A' - 1;
}
char convertNumberToLowercaseLetter(int number) {
    return number + 'a' - 1;
}

char convertNumberToSymbol(int number) {
    
    switch (number) {
        case 1: return '!';
        case 2: return '?';
        case 3: return ',';
        case 4: return '.';
        case 5: return ' ';
        case 6: return ';';
        case 7: return '"';
        case 8: return '\'';
    }
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
    modeSwitching();
}