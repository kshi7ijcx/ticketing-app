import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);
    const ticketData = body.formData;
    const ticket = await Ticket.create(ticketData);
    return NextResponse.json({ ticket }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}

export async function GET(){
  try{
    const tickets = await Ticket.find();
    return NextResponse.json({tickets},{status:200})
  }catch(error){
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}