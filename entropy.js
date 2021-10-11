let fs = require('fs'); //переменная для работы с файловой системой
let arg = process.argv; //работа с аргументами командной строки 
let inputData;
let alph = new Array(); // объект типа "массив". В js индексы могут быть не только числовые, но и буквенные
let entropy = 0; //переменная, содержащая энтропию
let i = 0,
    n = 1;
//to do обработка ошибок try catch
fs.readFile(arg[2], (err, inputData) => {
    if (err) {
        console.error(err);
        return; 
    }
        inputData = inputData.toString(); // Преорбазование в строку
        /* инициализация массива 
        В ррезультате инициализации ключами в массива alph являются все различные символы алфавита со значениями 0 */
        for (i = 0; i < inputData.length; i++) 
            alph[inputData.charAt(i)] = 0;

        for (i = 0; i < inputData.length; i++) 
            alph[inputData.charAt(i)]++;

        //to do почему длина массива равна нулю; 
        //длина определяется последним импользованным числовым индексом

        /* for (i = 0; i < alph.length; i++) {
        alph[i] /= inputData.length;
        } будет работать, но неверно */

        let powerAlph = 0;
        for (i in alph) {
            powerAlph++;
            alph[i] /= inputData.length;
            entropy += (alph[i] * Math.log(alph[i]));
        }

        entropy /= Math.log(powerAlph);
        entropy = Math.abs(entropy);

        if (isNaN(entropy)){
            entropy = 0;
            entropy = `${entropy}`;
        }
        else 
            entropy = `${entropy}`;
        
        fs.writeFile('output.txt', entropy, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        
        });
});
