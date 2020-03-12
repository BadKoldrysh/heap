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

/**
 * #            #
 *  ##        ## 
 *   ###    ###  
 *    ########   
 *    ########   
 *   ###    ###  
 *  ##        ## 
 * #            #
 * 1234567       
 * #            # 1 - 1# - 12 - 1# - 1 1 = 14
 *  ##        ##  2 - 2# - 8  - 2# - 2 2 = 14
 *   ###    ###   3 - 3# - 4  - 3# - 3 3 = 14
 *    ########    4 - 4# - 0  - 4# - 4 4 = 14
 */
void printHorns(int n) {
    int width = n * n;
    // n == 2 // 4
    // n == 3 // 9
    if (n == 4) {
        width -= 3; // 13
    } else if (n == 5) {
        width -= 8; // 16
    } else if (n == 6) {
        width -= 15; // 21
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= width; j++) {
            int double_i = i * 2;
            if ((j <= double_i && j >= i) ||
                (j >= width - double_i && j <= width - i)) {
                std::cout << "#";
            } else {
                std::cout << " ";
            }
        }
        std::cout << "\n";
    }
}

int main()
{
    int n = 4;
    printHorns(n);
    // std::cout << "Enter a value from 1 to 20: ";
    // std::cin >> n;
    // printPyramide(n);
    // printTwoPointRhombus(n);
    // printRhombus(n);
    // printBackPyramide(n);
    // printTwoPointPyramide(n);
    // printTwoPointBackPyramide(n);
}
