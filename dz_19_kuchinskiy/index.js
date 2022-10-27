// ДЗ 19. Задачи для map и set

"use strict";

// Задача 1

const nums = [1, 2, 3, 1];

function isContainSame(array) {
  const set = new Set(array);
  return set.size < array.length ? true : false;
}
console.log(isContainSame(nums));

// Задача 2

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

function getIntersection(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const nums3 = [];
  let prevLength = set1.size;

  set2.forEach((value) => {
    set1.add(value);
    set1.size === prevLength ? nums3.push(value) : (prevLength = set1.size);
  });

  return nums3;
}

console.log(getIntersection(nums1, nums2));
