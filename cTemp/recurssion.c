#include <stdio.h>

void recursion(int height);
int main(void){
    int height;
    printf("Enter Height: ");
    scanf("%i", &height);
    recursion(height);
}

void recursion(int height){
    if(height == 0){
        return ;
    }
    recursion(height - 1);
    for(int i=0; i<height; i++){
        printf("#");
    }
    printf("\n");
}