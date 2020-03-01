#include <iostream>

using namespace std;

void mainProgram() {
    cout << "Enter a number with as many digits as you like: ";
    char digitChar = cin.get();
    int number = digitChar - '0';
    digitChar = cin.get();
    while (digitChar != 10) {
        number = number * 10 + (digitChar - '0');
        digitChar = cin.get();
    }
    cout << "Numbered entered: " << number << "\n";
}

int main() {
    mainProgram();
}