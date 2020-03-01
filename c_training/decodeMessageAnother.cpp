#include <iostream>

using namespace std;

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

void mainProgram() {
    char outputCharacter;
    enum modeType {UPPERCASE, LOWERCASE, PUNCTUATION};
    modeType mode = UPPERCASE;
    char digitChar;
    do {
        digitChar = cin.get();
        int number = digitChar - '0';
        digitChar = cin.get();
        while ((digitChar != 10) && (digitChar != ',')) {
            number = number * 10 + (digitChar - '0');
            digitChar = cin.get();
        }
        switch (mode) {
            case UPPERCASE:
                number = number % 27;
                outputCharacter = convertNumberToUppercaseLetter(number);
                if (number == 0) {
                    mode = LOWERCASE;
                    continue;
                }
                break;
            case LOWERCASE:
                number = number % 27;
                outputCharacter = convertNumberToLowercaseLetter(number);
                if (number == 0) {
                    mode = PUNCTUATION;
                    continue;
                }
                break;
            case PUNCTUATION:
                number = number % 9;
                outputCharacter = convertNumberToSymbol(number);
                if (number == 0) {
                    mode = UPPERCASE;
                    continue;
                }
                break;
        }
        cout << outputCharacter;
    } while (digitChar != 10);
    cout << "\n";   
}

int main() {
    mainProgram();
}