#include <stdio.h>

void printArr(int arr[], int n);
int main(void){
    int arr[] = {5, 4, 2, 6, 7, 9, 4};
    int n = 7;
    while (1){
        int swap = 0;
        for(int i=0; i<n-1; i++){
            if(arr[i] > arr[i+1]) {
                int tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                swap += 1;
            }
        }
        printArr(arr, n);
        if (swap == 0){
            printArr(arr, n);
            break;
        }
    }
    return 0;
}

void printArr(int arr[], int n){
    for(int i=0; i<n; i++){
        printf("%i\t", arr[i]);
    }
    printf("\n");
}