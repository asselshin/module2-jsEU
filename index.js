// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case,
// при котором несколько слов разделяются символом подчеркивания(_), причём каждое слово пишется с маленькой буквы.;

const initSnake = function (str) {
  const arrayStr = str.split('');
  let newStr = '';

  for (const letter of arrayStr) {
    newStr +=
      letter === letter.toUpperCase() ? `_${letter.toLowerCase()}` : letter;
  }

  return newStr.slice(1, newStr.length);
};

console.log(initSnake('CamelCaseAsdTur'));
