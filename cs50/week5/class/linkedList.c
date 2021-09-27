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

int main(void){
    node *list = NULL;
    node *n = malloc(sizeof(node));
    if (n == NULL){
        printf("list is null\n");
        return 1;
    }
    n->number = 1;
    n->next = NULL;
    list = n;
    n = malloc(sizeof(node));
    if(n==NULL){
        free(list);
        printf("list is null\n");
        return 1;
    }
    n->number = 2;
    n->next = NULL;
    list->next = n;
    n = malloc(sizeof(node));
    if(n==NULL){
        free(list->next);
        free(list);
        printf("list is null\n");
        return 1;
    }
    n->number = 3;
    n->next = NULL;
    list->next->next = n;
    for(node *temp = list; temp != NULL; temp = temp->next){
        printf("number: %i\n", temp->number);
    }
    while(list != NULL){
        node *temp = list->next;
        free(temp);
        list = temp;
    }
    free(n);
    return 0;
}