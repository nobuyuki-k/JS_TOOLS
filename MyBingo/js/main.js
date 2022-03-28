'use strict';
{
    // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const source = [];
    for(let i = 0; i < 15; i++){
        source[i] = i + 1;
    }

    // splice() メソッドは、その場で既存の要素を取り除いたり、置き換えたり、
    // 新しい要素を追加したりすることで、配列の内容を変更します。
    const b = [];
    for (let i = 0; i < 5; i++){
        b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    console.log(b);
}