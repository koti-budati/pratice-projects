#include <stdio.h>
#include "helpers.h"


// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for(int i=0; i< height; i++){
        for(int j=0; j<width; j++){
            int average = 0;
            average = (image[i][j].rgbtBlue + image[i][j].rgbtGreen + image[i][j].rgbtRed)/3;
            image[i][j].rgbtBlue = average;
            image[i][j].rgbtGreen = average;
            image[i][j].rgbtRed = average;
        }
    }
    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    for(int i=0; i< height; i++){
        for(int j=0; j<width; j++){
            int sepiaRed = 0.393 * image[i][j].rgbtRed + 0.769 * image[i][j].rgbtGreen + 0.189 * image[i][j].rgbtBlue;
            int sepiaGreen = 0.349 * image[i][j].rgbtRed + 0.686 * image[i][j].rgbtGreen + 0.168 * image[i][j].rgbtBlue;
            int sepiaBlue = 0.272 * image[i][j].rgbtRed + 0.534 * image[i][j].rgbtGreen + 0.131 * image[i][j].rgbtBlue;
            if(sepiaRed > 255){
                sepiaRed = 255;
            }
            if(sepiaGreen > 255){
                sepiaGreen = 255;
            }
            if(sepiaBlue > 255){
                sepiaBlue = 255;
            }
            image[i][j].rgbtRed = sepiaRed;
            image[i][j].rgbtGreen = sepiaGreen;
            image[i][j].rgbtBlue = sepiaBlue;
        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    int original_width = width;
    if(width %2 == 1){
        width = (width - 1)/2;
    } else {
        width = width / 2;
    }
    printf("Width: %i\n", width);
    for(int i=0; i< height; i++){
        for(int j=0; j<width; j++){
            int swapRed = image[i][j].rgbtRed;
            int swapGreen = image[i][j].rgbtGreen;
            int swapBlue = image[i][j].rgbtBlue;
            image[i][j].rgbtRed = image[i][original_width - j - 1].rgbtRed;
            image[i][original_width - j - 1].rgbtRed = swapRed;
            image[i][j].rgbtGreen = image[i][original_width - j - 1].rgbtGreen;
            image[i][original_width - j - 1].rgbtGreen = swapGreen;
            image[i][j].rgbtBlue = image[i][original_width - j - 1].rgbtBlue;
            image[i][original_width - j - 1].rgbtBlue = swapBlue;
        }
    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    for(int i=0; i< height; i++){
        for(int j=0; j<width; j++){
            int color[] = {0, 0, 0};
            int swap = 0;
            for(int k=i-1; k <= i+1; k++){
                for(int l=j -1; l <= j+1; l++){
                    if(k < 0 || l < 0 || k > height || l > width){
                        swap += 1;
                        continue;
                    }
                    color[0] += image[k][l].rgbtRed;
                    color[1] += image[k][l].rgbtBlue;
                    color[2] += image[k][l].rgbtGreen;
                }
            }
            for(int p=0; p<3; p++){
                color[p] = color[p] /(9-swap);
                if(color[p] > 255){
                    color[p] = 255;
                }
            }
            image[i][j].rgbtRed = color[0];
            image[i][j].rgbtBlue = color[1];
            image[i][j].rgbtGreen = color[2];
        }
    }
    return;
}
