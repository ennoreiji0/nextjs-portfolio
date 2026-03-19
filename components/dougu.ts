'use client';

export default function rand(min:number,max:number){//min以上max未満の、整数の乱数
    return (Math.floor(Math.random()*(max-min)))+min
}