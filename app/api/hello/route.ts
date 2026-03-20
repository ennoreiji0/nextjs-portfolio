import { NextRequest, NextResponse } from "next/server";

let count=0
export async function GET(request:NextRequest){
    const {searchParams}=new URL(request.url)
    const name=searchParams.get('name') || 'ゲスト'
    return NextResponse.json({
        message:`okay!!!${name}!`,
    })
}