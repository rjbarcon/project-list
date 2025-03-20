import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@auth0/nextjs-auth0/";

export async function GET(request: NextRequest) {
  const response = new NextResponse();
  let jwt: string | null = null;

  try {
    const tokenResponse = await getAccessToken(request, response, {
      authorizationParams: {
        audience: process.env.AUTH0_AUDIENCE,
        scope: process.env.AUTH0_PROJECT_SCOPE,
      },
    });

    jwt = tokenResponse.accessToken || null;
  } catch (err) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!jwt) {
    return NextResponse.json(
      { error: "No access token found" },
      { status: 401 },
    );
  }

  const { searchParams } = new URL(request.url);

  let backendUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/projects`;
  if (searchParams.toString()) {
    backendUrl += `?${searchParams.toString()}`;
  }

  try {
    const backendResponse = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      return NextResponse.json(
        { error: errorText },
        { status: backendResponse.status },
      );
    }

    const data = await backendResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
