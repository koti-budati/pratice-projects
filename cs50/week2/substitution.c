#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(int argc, char **argv){
    if(argc < 2 || argc > 2 || strlen(argv[1]) < 26){
        return 1;
    }
    char str[200];
    printf("plainText: ");
    scanf("%[^\n]", str);
    char arr[strlen(str)];
    for(int i=0, n=strlen(str); i < n; i++){
        if(isupper(str[i])){
            arr[i] = argv[1][str[i] % 65];
        } else if (islower(str[i])){
            arr[i] = tolower(argv[1][str[i] % 97]);
        } else {
            arr[i] = str[i];
        }
    }
    printf("chiperText: ");
    for(int i=0, n=strlen(str); i < n; i++){
        printf("%c", arr[i]);
    }
    printf("\n");
    return 0;
}