// printf and scanf functions
#include <stdio.h>
// strlen - string length
#include <string.h>
// atoi - string to int
#include <stdlib.h>
// Islower and isupper functions
#include <ctype.h>

int main(int argc, char **argv){
    // Checks no of arguments
    if(argc <2){
        return 1;
    }
    char str[20];
    int arr[20];
    // Text to cipher
    printf("Name: ");
    scanf("%s", str);
    for(int i=0, n=strlen(str); i < n; i++){
        // checks uppercase or lowercase
        if(isupper(str[i])){
            int k = (atoi(argv[1]) + str[i])%65 + 65;
            // if greater than Z repeat the loop
            if(k > 90){
                k -= 26;
            }
            arr[i] = k;
        } else if(islower(str[i])) {
            int k = (atoi(argv[1]) + str[i])%97 + 97;
            // if greater than z repeat the loop
            if(k > 122){
                k -= 26;
            }
            arr[i] = k;
        } else {
            // if it is not a alphabet, no change to character
            arr[i] = str[i] + 0;
        }
    }
    // prints the cipher
    printf("cipherText: ");
    for(int i=0, n=strlen(str); i < n; i++){
        printf("%c", arr[i]);
    }
    printf("\n");
}