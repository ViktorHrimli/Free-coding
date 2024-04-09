var twoSumm = (nums = [], target) => {
  if (!nums || nums.length < 2) return null;

  var map = new Map();

  return nums.reduce((acc, num, indx) => {
    var theCurrent = target - num;

    if (map.has(num)) {
      return [map.get(num), indx];
    }

    map.set(theCurrent, indx);
    return acc;
  }, []);
};

console.log(twoSumm([1, 5, 3, 6], 11));
