// immediately invoked function expressions
// because dont need pollution of gloabal scope

(function chai(){
    console.log(`DB Connected`);
})();

//() defination, () execution

( () => {
    console.log(`DB Connected Two`);
})();

( (name) => {
    console.log(`DB Connected Three ${name}`);
})("sam");