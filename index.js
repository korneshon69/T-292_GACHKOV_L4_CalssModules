import AdvancedMark from './advancedMark.js';

const marks = [
  new AdvancedMark('Физика', 9, '2025-01-10', 'Лабораторная + тест'),
  new AdvancedMark('История', 7, '2025-02-15', 'Эссе и устный ответ'),
];

marks.forEach((m) => m.show());

