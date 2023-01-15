function steps(N){
    for (let i = 1; i <= N; i++) {
        let step = "";
        for (let j = 1; j <= N; j++) {
          if (j <= i) {
            step += "#";
          } else {
            step += " ";
          }
        }
        console.log(step);
      }
}
steps(4);
steps(10);








