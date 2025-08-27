import { NextResponse } from "next/server";

// Dummy data store (replace with DB later)
let users = [];

// Handle GET request → return all users
export async function GET() {
  return NextResponse.json({
    success: true,
    users,
  });
}

// Handle POST request → add a new user
export async function POST(request) {
  try {
    const body = await request.json(); // get request body
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    users.push(newUser);

    return NextResponse.json({
      success: true,
      message: "User added successfully",
      user: newUser,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
