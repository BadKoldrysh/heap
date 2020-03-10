#include <iostream>
#include <cstdlib>

void printPyramide(int n) {
    int dbl = (n * 2);
    for (int j = 1; j < n; j++) {
        int l = abs(n - j);
        int r = dbl - abs(n - j);
        for (int i = 0; i < dbl; i++) {
            if (i > l && i < r) {
                std::cout << '#';
            } else {
                std::cout << ' ';
            }
        }
        std::cout << '\n';
    }
}

void printBackPyramide(int n) {
    int dbl = (n * 2);
    for (int j = n; j > 0; j--) {
        int l = abs(n - j);
        int r = dbl - abs(n - j);
        for (int i = 0; i < dbl; i++) {
            if (i > l && i < r) {
                std::cout << '#';
            } else {
                std::cout << ' ';
            }
        }
        std::cout << '\n';
    }
}

void printTwoPointBackPyramide(int n) {
    int dbl = (n * 2) + 1;
    for (int j = n; j > 0; j--) {
        int l = abs(n - j);
        int r = dbl - abs(n - j);
        for (int i = 0; i < dbl; i++) {
            if (i > l && i < r) {
                std::cout << '#';
            } else {
                std::cout << ' ';
            }
        }
        std::cout << '\n';
    }
}

void printTwoPointPyramide(int n) {
    int dbl = (n * 2) + 1;
    for (int j = 1; j <= n; j++) {
        int l = abs(n - j);
        int r = dbl - abs(n - j);
        for (int i = 0; i < dbl; i++) {
            if (i > l && i < r) {
                std::cout << '#';
            } else {
                std::cout << ' ';
            }
        }
        std::cout << '\n';
    }
}

void printRhombus(int n) {
    printPyramide(n);
    printBackPyramide(n);
}

void printTwoPointRhombus(int n) {
    printTwoPointPyramide(n);
    printTwoPointBackPyramide(n);
}

int main()
{
    int n = 0;
    std::cout << "Enter a value from 1 to 20: ";
    std::cin >> n;
    // printPyramide(n);
    // printTwoPointRhombus(n);
    printRhombus(n);
    // printBackPyramide(n);
    // printTwoPointPyramide(n);
    // printTwoPointBackPyramide(n);
}