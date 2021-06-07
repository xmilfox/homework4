
    // завдання 1

    function calcRectangleArea(width, height) {
        if (isNaN(width)  || isNaN(height) || typeof(width) === "boolean" || typeof(height) === "boolean") {
            throw new Error('Повинно бути числові значення');
        } else if (width <= 0 || height <= 0) {
            throw new Error('Повинно бути додатнє значення ')
        }
        return width * height;
    }
    
    try {

            calcRectangleArea(5, 7);
        }
     catch (error) {
        if (error.name === "Error") {
        
            console.log(error.name);
            console.log(error.message);
            console.log(error.stack);
        } else {
    
            console.log(error.name);
            console.log(error.message);
            console.log(error.stack);
        }
    
    }
    
    
    
    
    
    
    
    
    
    
    
    // завдання 2
    
    function checkAge(){
    const userAge = prompt(' Введіть ваш вік');
    console.log(`Користувач ввів свій вік: ${userAge}`);
    switch (true) {
        case userAge === '' :
            alert('Приємного перегляду');
            throw new Error(' Приємного перегляду');
            break;


        case (+userAge < 14) :
            alert('Тобі заборонено переглядати');
            throw new Error('Тобі заборонено переглядати');
            break;

        case isNaN(userAge) :
            alert('Введи число!!!');
            throw new Error('Введи число!!!')
            break;

        default :
            console.log('Приємного перегляду');
            return true;
    }

}

try {
    checkAge();
} catch (error){
    console.log(error.name);
    console.log(error.message);

}




// завдання3


function showMonthName(month){
    let monthList =
        ['January','February','March','April','May','June','July','August','September','October','November','December'];

    if(isNaN(month) || month < 1 || month > 12){
        throw new MonthException('Incorrect month number');
    }
    return monthList[month-1];
}

try {
    console.log(showMonthName(2));

} catch (exception){
    if (exception.name === 'MonthException'){

        console.log(exception.name);
        console.log(exception.message);
    }else{
        console.log(exception.name);
        console.log(exception.message);
        console.log(exception.stack);
    }
}










// завдання 4


 function showUser(id) {
        if (id < 0) {
            throw new Error('ID must be positive')
        }
    
    
        return {id};
    }
    
    function showUsers(ids) {
        let usersIDCorrectArray = [];
    
    
        for (let i = 0; i < ids.length; i++) {
            try {
                usersIDCorrectArray.push(showUser(ids[i]));
            } catch (err) {
                console.log(err.name);
                console.log(err.message);
            }
    
        }
    
        return usersIDCorrectArray;
    }
    
    
    console.log(showUsers([7, -12, 44, -22]));







