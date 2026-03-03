//break is used to terminate the loop or switch statement and transfer the control to the next statement following the loop or switch.
//continue statement is used to skip the current iteration of the loop and continue with the next iteration.

for (let i = 0; i < 5; i++) {
    
    if(i == 2 || i == 1){
        continue;
    };
    console.log(i);
    if(i == 3){
        break;
    }
}
