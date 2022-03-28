'use strict';
{
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    Math.floor(Math.random() * source.length)

    // splice() メソッドは、その場で既存の要素を取り除いたり、置き換えたり、
    // 新しい要素を追加したりすることで、配列の内容を変更します。
    const b = [];
    b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    console.log(b);
}