// Implements a dictionary's functionality
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include <stdbool.h>

#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

// Number of buckets in hash table
#define N 5000
int counter = 0;
// Hash table
node *table[N];

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    // TODO
    int index = hash(word);
    for(node *temp = table[index]; temp != NULL; temp=temp->next){
        if(strcasecmp(word, temp->word) == 0){
            return true;
        }
    }
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO
    int index = 0;
    for(int i=0, n=strlen(word); i<n; i++){
        index = index + tolower(word[i]);
    }
    return index%97;
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // TODO
    FILE *file = fopen(dictionary, "r");
    if(file == NULL){
        printf("File Error\n");
        return false;
    }
    char word[LENGTH + 1];
    while(fscanf(file, "%s", word) != EOF){
        int index = hash(word);
        node *temp = malloc(sizeof(node));
        if(temp == NULL){
            printf("Memory Error\n");
            return false;
        }
        strcpy(temp->word, word);
        temp->next = NULL;
        if(table[index] == NULL){
            table[index] = temp;
        } else{
            temp->next = table[index];
            table[index] = temp;
        }
        // free(temp);
        counter++;
    }
    fclose(file);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return counter;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    // TODO
    for(int i=0; i<N; i++){
        node *cursor = table[i];
        node *temp = cursor;
        while(cursor != NULL){
            cursor = cursor->next;
            free(temp);
            temp = cursor;
        }
    }
    return true;
}
