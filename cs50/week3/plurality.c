#include <stdio.h>
#include <string.h>

#define MAX 9

typedef struct {
    char name[10];
    int votes;
} candidate;

candidate candidates[MAX];

int numberOfCandidates;
int evaluateCandidatesEntry(char *name);

int main(int argc, char **argv){
    if (argc < 2){
        printf("usage: plurality [candidate ...]\n");
        return 1;
    } else if(argc > 10){
        printf("Max Candidates allowed are 9");
        return 1;
    }
    numberOfCandidates = argc -1;
    for(int i=0; i < numberOfCandidates; i++){
        strcpy(candidates[i].name, argv[i+1]);
        candidates[i].votes = 0;
    }
    int voters;
    printf("Number of Voters: ");
    scanf("%i", &voters);
    for(int i=0; i<voters; i++){
        char voterChoice[10];
        printf("Vote: ");
        scanf("%s", voterChoice);
        if(evaluateCandidatesEntry(voterChoice) == 0){
            for(int j=0; j< numberOfCandidates; j++){
                if(strcmp(candidates[j].name, voterChoice) == 0){
                    candidates[j].votes += 1;
                }
            }
        } else {
            printf("Entered Invalid Candidate Name\n");
            return 1;
        }
    }
    int swap = 0;
    for(int i=0; i < numberOfCandidates; i++){
        if(candidates[i].votes > swap){
            swap = candidates[i].votes;
        }
    }
    for(int i=0; i<numberOfCandidates; i++){
        if(candidates[i].votes == swap){
            printf("winner: %s\n", candidates[i].name);
        }
    }
    return 0;
}

int evaluateCandidatesEntry(char *name){
    for(int i=0; i<=numberOfCandidates; i++){
        if(strcmp(name, candidates[i].name) ==0){
            return 0;
        }
    }
    return 1;
}