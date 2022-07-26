
export const averageSort = <T>(list1: Array<T>) => (list2: Array<T>) => {
    const l2 = new Set(list2);
    const l1 = list1.filter(c => l2.has(c));
    const avgPos = (item: T) => 0.5 * (list1.indexOf(item) + list2.indexOf(item));
    l1.sort((a, b) => avgPos(a) - avgPos(b));
    return l1;
}