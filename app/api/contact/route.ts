import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the contact form submission
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...body
    });

    // In a real application, you would:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send notification emails
    // 4. Integrate with CRM
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry. We will get back to you within 24 hours.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error submitting your inquiry. Please try again.' 
      },
      { status: 500 }
    );
  }
}