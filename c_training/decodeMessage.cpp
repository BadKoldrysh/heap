#include <iostream>

using namespace std;

// The program for decoding message
// Decode rules:
//      Uppercase mode - the integer modulo 27 indicates the letter of the alphabet
//      Lowercase mode - the same as the uppercase mode, but for lowercase letters
//      Punctuation mode - the integer modulo 9 with interpretation
//          1 => '!', 2 => '?', 3 => ',', 4 => '.', 5 => ' ', 6 => ';', 7 => '"', 8 => '
// Modes swtiches, when module is equal 0
// Uppercase => Lowercase => Punctuation => Uppercase => ...
//
// * Read character by character until we reach an end-of-line
// * Convert a series of characters representing a number to an integer
// * Convert an integer 1-26 into an uppercase letter
// * Convert an integer 1-26 into a lowercase letter
// * Convert an integer 1-8 into a punctuation symbol
//
// * Track a decoding mode
//
// input 18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10

char getCharByCode(int code) {
    if (code == 1) return '!';
    else if (code == 2) return '?';
    else if (code == 3) return ',';
    else if (code == 4) return '.';
    else if (code == 5) return ' ';
    else if (code == 6) return ';';
    else if (code == 7) return '"';
    else return 39; // the code of '
}

void mainProgram() {
    char character;
    char smbl;
    int digit;
    
    int numb = 0;
    int mode = 0;

    cout << "Enter a number: ";
    character = cin.get();
    while (character != 10) {
        if (character == ',') {
            int modulo = mode != 2 ? numb % 27 : numb % 9;
            if (mode == 0) {
                if (modulo != 0) {
                    smbl = (modulo-1) + 'A';
                    cout << smbl;
                } else {
                    mode = 1;
                }
            } else if (mode == 1) {
                if (modulo != 0) {
                    smbl = (modulo-1) + 'a';
                    cout << smbl;
                } else {
                    mode = 2;
                }
            } else {
                if (modulo != 0) {
                    smbl = getCharByCode(modulo);
                    cout << smbl;
                } else {
                    mode = 0;
                }
            } 
            numb = 0;
        } else {
            digit = character - '0';
            numb = numb * 10 + digit;
        }

        character = cin.get();
    }
    int modulo = mode != 2 ? numb % 27 : numb % 9;
    if (modulo != 0) {
        if (mode == 0) smbl = (modulo-1) + 'A';
        else if (mode == 1) smbl = (modulo-1) + 'a';
        else smbl = getCharByCode(modulo);
        cout << smbl << "\n";
    }
    cout << "END\n";
}

int main() {
    mainProgram();
}
