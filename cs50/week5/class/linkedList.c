#include <stdio.h>
#include <stdlib.h>

// becuase c has not seen node untill it read to the end of typedef c doesn't recognises node. 
// this is similar to prototype
typedef struct node{
    // the first element is used to store the value
    int number;
    // the second element is used to point to the next node or null if it is end;
    struct node *next;
} node;

void freeNode(node *list);
int main(void){
    node *list = NULL;
    node *n = malloc(sizeof(node));
    if (n == NULL){
        printf("list is null\n");
        return 1;
    }
    (*n).number = 1;
    n->next = NULL;
    list = n;
    n = malloc(sizeof(node));
    if(n==NULL){
        freeNode(list);
        printf("list is null\n");
        return 1;
    }
    n->number = 2;
    n->next = NULL;
    list->next = n;
    n = malloc(sizeof(node));
    if(n==NULL){
        freeNode(list);
        printf("list is null\n");
        return 1;
    }
    n->number = 3;
    n->next = NULL;
    list->next->next = n;
    for(node *temp = list; temp != NULL; temp = temp->next){
        printf("number: %i\n", temp->number);
    }
    freeNode(list);
    return 0;
}

void freeNode(node *list){
    node *cursor = list;
    node *temp = cursor;
    while (cursor != NULL){
        cursor = cursor->next;
        free(temp);
        temp = cursor;
    }
    return ;
}