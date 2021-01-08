//declaration
function hello(){
    console.log('Hello World!');
}
//expression
const goodbye = function bye(){
    console.log('Goodbye World!');
};
//rest 
function rest(...args){
    return args;
}
//The args parameter is an actual array, and has access to the same methods
