var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus'];
var haystack2 = ['glass', 'needle',]

function findNeedle(myArr) {
    i = 0;
    var needle = myArr.map(function (item, index) {
        if (item === 'needle') {
            i = index;
        };
    });
    return i;
};

test('index of needle in this haystack1 is', function () {
    expect(findNeedle(haystack1)).toBe(3);
});
test('index of needle in this haystack2 is', function () {
    expect(findNeedle(haystack2)).toBe(1);
});
