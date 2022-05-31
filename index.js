//Use export to reuse a code block
//You export funcitons and varaibles from one file, and import them in another file, so that you can reuse them in another code.

const capitalizeString = (string) => 
{
    return string.charAt(0).toUpperCase() + string.slice(1); //Capitalizes first character of string, and leaves the rest lowercase
}

export { capitalizeString }; //NOW WE'RE EXPORTING THIS FUNCTION, AND


//To export the variables below, we just type in export at the left:

/*
const foo = "bar"; 
const bar = "foo";

*/ 

export const foo = "bar"; //...AND THESE TWO VARIABLES
export const bar = "foo";