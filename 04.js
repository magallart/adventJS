function createXmasTree(height) {
  const xmasTree = [];

  for (let i = 1; i <= height; i++) {
    const row =
      '_'.repeat(height - i) + '*'.repeat(i * 2 - 1) + '_'.repeat(height - i);
      xmasTree.push(row);
  }

  const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
  xmasTree.push(trunk);
  xmasTree.push(trunk);

  return xmasTree.join('\n');
}

console.log(createXmasTree(5));
