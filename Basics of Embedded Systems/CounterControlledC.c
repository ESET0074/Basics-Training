#include <stdio.h>
int main(){
    int num;
    for(int i=0;i<10;i++)
    {
        printf("Press button 1 to tunrn on and anything else to turn off");
        scanf("%d",&num);
        
        if(num==1)
        {
            printf("LED on");
            printf("\n");
        }
        else{
            printf("LED off");
            printf("\n");
        }

    }
    printf("Counter threshold reached");
    return 0;

}