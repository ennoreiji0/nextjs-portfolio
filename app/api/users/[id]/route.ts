import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request:NextRequest,
    { params }: { params: Promise<{ id: string }> }){
    //const {searchParams}=new URL(request.url)
    const resolvedParams=await params;
    const userId=resolvedParams.id || 'gest';
    //const name=searchParams.get('name') || 'ゲスト'
    return NextResponse.json({
        message:`okay!!!${userId}!`,
        target:userId
    })
}