import { isEqual } from 'lodash';

import { MainClass, SubClass, SubClassesByMainClass, ClassId } from './constants';

export const isMainClass = (roClass: string): boolean => {
  if (Object.values(MainClass).includes(roClass)) {
    return true;
  }

  return false;
}

export const isSubClass = (roClass: string): boolean => {
  if (Object.values(SubClass).includes(roClass)) {
    return true;
  }
  return false;
}

export const getNumberOfMainClasses = (classes: string[]): number => {
  if (!Array.isArray(classes) || classes.length === 0) {
    return 0;
  }

  return classes.reduce((acc, curr) => {
    if (isMainClass(curr)) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

export const getMainClass = (classes: string[]): string => {
  const mainClass = classes.find(roClass => isMainClass(roClass))

  return mainClass ? mainClass : '';
}

export const filterActualClasses = (classes: string[]): string[] => (
  classes.filter(roClass => ClassId[roClass])
);

export const hasDifferentMainClass = (classes: string[]): boolean => {
  if (classes.length > 2) {
    return true;
  }

  if (classes.length === 1) {
    return false;
  }

  const sortedClasses = classes.sort()

  if (isEqual(sortedClasses, SubClassesByMainClass[MainClass.Acolyte].sort()) ||
      isEqual(sortedClasses, [SubClass.Bard, SubClass.Hunter].sort()) ||
      isEqual(sortedClasses, [SubClass.Dancer, SubClass.Hunter].sort()) ||
      isEqual(sortedClasses, SubClassesByMainClass[MainClass.Magician].sort()) ||
      isEqual(sortedClasses, SubClassesByMainClass[MainClass.Merchant].sort()) ||
      isEqual(sortedClasses, SubClassesByMainClass[MainClass.Swordsman].sort()) ||
      isEqual(sortedClasses, SubClassesByMainClass[MainClass.Thief].sort())) {
    return false;
  }

  return true;
};
