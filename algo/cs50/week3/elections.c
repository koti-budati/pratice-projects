#include <stdio.h>
#include <string.h>

// Max Candidate and Voters the program supports
#define MAX_CANDIDATES 9
#define MAX_VOTERS 100

// datastrcture for candidates
typedef struct {
    char *name;
    int votes;
    int eliminated;
} candidate;

candidate candidates[MAX_CANDIDATES];

// Voters preferences
int preferences[MAX_VOTERS][MAX_CANDIDATES];
int candidates_count;
int voters_count;

int vote(int voter, int rank, char *name);
void tabulate(void);
int print_winner(void);
int find_min(void);
int is_tie(int min);
void eliminate(int min);


int main(int argc, char **argv){
    //checking arguments and max candidates
    if(argc < 2){
        printf("usage: elections [candidate names]\n");
        return 1;
    } else if (candidates_count > MAX_CANDIDATES){
        printf("Max allowed candidate is 9\n");
        return 2;
    }

    //recording no. of voters
    candidates_count = argc -1;
    printf("Number of Voters: ");
    scanf("%i", &voters_count);

    // check below max voters
    if(voters_count > MAX_VOTERS){
        printf("Max allowed voters are 100\n");
        return 3;
    }

    // recording candidates in candidates dataconstructor
    for(int i=0; i<candidates_count; i++){
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
        candidates[i].eliminated = 0;
    }

    // Vote recording
    for(int i=0; i<voters_count; i++){
        for(int j=0; j<candidates_count; j++){
            char voters_choice[20];
            printf("Rank %i: ", j);
            scanf("%s", voters_choice);
            if(vote(i, j, voters_choice)){
                printf("Enter a valid candidate name\n");
                return 4;
            }
        }
    }

    // Evaluating votes
    while (1) {
        tabulate();
        int winner = print_winner();
        if (winner != -2){
            printf("winner: %s\n", candidates[winner].name);
            break;
        }
        int min = find_min();
        int tie = is_tie(min);
        if(tie == 0){
            for(int i=0; i<candidates_count; i++){
                if(candidates[i].eliminated == 0){
                    printf("%s\n", candidates[i].name);
                }
            }
            break;
        }
        eliminate(min);
        for(int i=0; i< candidates_count; i++){
            candidates[i].votes = 0;
        }
    }

}

int vote(int voter, int rank, char *name){
    for(int i=0; i < candidates_count; i++){
        if(strcmp(name, candidates[i].name) == 0){
            preferences[voter][rank] = i;
            return 0;
        }
    }
    return -1;
}

void tabulate(void){
    for(int i=0; i<voters_count; i++){
        for(int j=0; j<candidates_count; j++){
            if(candidates[preferences[i][j]].eliminated == 0){
                candidates[preferences[i][j]].votes += 1;
                break;
            } 
        }
    }
}

int print_winner(void){
    for(int i=0; i<candidates_count; i++){
        if(candidates[i].votes / voters_count > 0.5 && candidates[i].eliminated == 0){
            return i;
        }
    }
    return -2;
}

int find_min(void){
    int min_votes = voters_count;
    for(int i=0; i<candidates_count; i++){
        if (candidates[i].votes < min_votes && candidates[i].eliminated == 0){
            min_votes = candidates[i].votes;
        }
    }
    // printf("min votes: %i\n", min);
    return min_votes;
}

int is_tie(int min){
    for(int i=0; i<candidates_count; i++){
        if(candidates[i].votes > min){
            return 1;
        }
    }
    return 0;
}

void eliminate(int min){
    for(int i=0; i<candidates_count; i++){
        if (candidates[i].votes == min){
            candidates[i].eliminated = 1;
        }
    }
}