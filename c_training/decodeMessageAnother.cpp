#include <iostream>

using namespace std;

void mainProgram() {
    cout << "Enter a two-digit number: ";
    char digitChar = cin.get();
    int overallNumber = (digitChar - '0') * 10;
    digitChar = cin.get();

    overallNumber += digitChar - '0';
    cout << "That number as an integer: " << overallNumber << "\n";
}

int main() {
    mainProgram();
}