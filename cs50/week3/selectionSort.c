#include <stdio.h>

int main(void){
    int arr[] = {1, 2, 3, 4, 6, 2, 7, 9};
    int n = 8;
    for(int i=0; i <n; i++){
        int index = i;
        for(int j=i; j < n; j++){
            if(arr[j] < arr[index]){
                index = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    for(int i=0; i<n; i++){
        printf("%d", arr[i]);
    }
    printf("\n");
}