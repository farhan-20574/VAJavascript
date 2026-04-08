  let output = "";
      let num = 5;
      for (let line = 1; line <= num; line++) {
        let row = "";

        //space
        for (let element = 1; element <= num - line; element++) {
          row += " ";
        }

        //stars
        for (let element = 1; element <= 2 * line - 1; element++) {
          row += "*";
        }
        