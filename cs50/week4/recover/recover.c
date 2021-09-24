#include <stdio.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>
 
#define BLOCKSIZE 512

typedef uint8_t BYTE;

int main(void){ 
    FILE *inputfile = fopen("card.raw", "r");
    if(inputfile == NULL){
        printf("open unsuccessful \n");
        return 1;
    }

    BYTE buffer[512]; 
    char filename[16];
    FILE *output = NULL;
    int imageCount=1;

    while (1){
        uint64_t readSize = fread(buffer, 1, BLOCKSIZE, inputfile);
        if(readSize == 0 && feof(inputfile)){
            fclose(output);
            fclose(inputfile);
            return 0;
        }
        if(buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0){
            if(output != NULL){
                fclose(output);
                imageCount++;
            } 
            sprintf(filename, "%03i.jpg", imageCount);
            output = fopen(filename, "w");
            
        }
        if(output != NULL){
            fwrite(buffer, 1, 512, output);
        }
    }
}