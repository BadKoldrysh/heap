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
//
// * Convert an integer 1-26 into an uppercase letter
// * Convert an integer 1-26 into a lowercase letter
// * Convert an integer 1-8 into a punctuation symbol
// * Track a decoding mode
//
// input 18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10

void mainProgram() {
    char character;
    int digit;
    int numb = 0;

    cout << "Enter a number: ";
    character = cin.get();
    while (character != 10) {
        // if (character == ',') {

        //     break;
        // }
        digit = character - '0';
        numb = numb * 10 + digit;

        character = cin.get();
    }
    cout << "Number is " << numb; 
    cout << "\nEND\n";
}

int main() {
    mainProgram();
}
