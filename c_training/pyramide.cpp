#include <iostream>
#include <cstdlib>

void printPyramide(int n)
{
    int dbl = (n * 2);
    for (int j = 1; j < dbl; j++) {
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

int main()
{
    int n = 0;
    std::cout << "Enter a value from 1 to 20: ";
    std::cin >> n;
    printPyramide(n);
}
