const array =['\r|   ','\r/   ', '\r-   ','\r\\   ', '\r|   '];

let i = 0; 
  for (const element of array) {
    setTimeout(() => {
      process.stdout.write(element);
    },i);
    i += 200;
  }