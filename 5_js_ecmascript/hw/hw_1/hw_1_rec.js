// 3. Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
//    Пример
//    const rootElement = document.getElementById('root');
//    const targetElement = findElementByClass(rootElement, 'my-class');
//    console.log(targetElement);


function findElementByClass(root, className) {
  // Проверяем, является ли текущий элемент тем, что мы ищем
  if (root.classList && root.classList.contains(className)) {
    console.log(root.classList);
    console.log(root.classList.contains(className));
    root.classList.add('highlight');
    root.textContent = root.textContent + ' (найденный)';
    return root;
  }


  // Проходим по всем дочерним элементам
  for (let i = 0; i < root.children.length; i++) {
    const result = findElementByClass(root.children[i], className);
    if (result) {
      //console.log(result);
      return result; // Если нашли элемент, возвращаем его
    }
  }

  // Если элемент не найден, возвращаем null
  return null;
}

// Пример использования
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const targetElement = findElementByClass(rootElement, 'my-class');
  console.log(targetElement);
});

