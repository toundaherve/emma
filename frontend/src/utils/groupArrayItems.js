export default function groupArrayElements(array, elementsPerGroup) {
  const groupedElements = [];
  const numberOfGroups = Math.ceil(array.length / elementsPerGroup);
  let elementsPushed = 0;
  let currentGroup = 0;

  // create Groups
  for (let i = 0; i < numberOfGroups; i++) {
    groupedElements.push([]);
  }

  array.forEach((element) => {
    if (elementsPushed >= elementsPerGroup) {
      currentGroup++;
      elementsPushed = 0;
    }
    groupedElements[currentGroup].push(element);
    elementsPushed++;
  });

  return groupedElements;
}
