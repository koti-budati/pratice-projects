#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct node{
   int number;
   struct node *left;
   struct node *right; 
} node;

int main(void){
}

bool binarySearch(node *tree, int number){
    if(tree== NULL){
        return false;
    }else if(number < tree->number){
        return binarySearch(tree->left, number);
    }else if(number > tree->number){
        return binarySearch(tree->right, number);
    }else {
        return true;
    }
}