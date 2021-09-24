#include <stdio.h>

void printStuff(int k);
int main(void){
    printStuff(10);
}

void printStuff(int k){
    for(int i=0; i < k; i++){
        printf("%i", i);
        for(int j = k-1; j > i; j--){
            printf(" ");
        }
        for(int j = 1; i < j; j++){
            printf("t");
        }
        printf("\n");
    }
}