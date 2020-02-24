#include <iostream>

using namespace std;

int main() {
    char digit;
    int checksum = 0;
    cout << "Enter a single digit number, 0-9: ";
    
    for (int i = 0; i < 5; i++) {
        int n = cin.get();
        if (n != 10) {
            checksum += n - '0';
        }
    }
    cout << checksum;
}