import { Controller, Get, Post, Body, Headers, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';

// In-memory Database for testing
const users: any[] = [];
const courses: any[] = [
  { id: 1, title: 'Motion', description: 'Motion design asoslari va amaliyot.', duration: 3, price: 500000 }
];
const payments: any[] = [];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('auth/register')
  register(@Body() body: any) {
    const { username, password, firstName, lastName } = body;
    const user = { id: users.length + 1, username, password, firstName, lastName, role: 'USER' };
    users.push(user);
    return { token: 'mock-jwt-token-' + user.id, role: user.role };
  }

  @Post('auth/login')
  login(@Body() body: any) {
    const { username, password } = body;
    
    // Admin override
    if (username === 'admin' && password === 'admin') {
      return { token: 'admin-token', role: 'ADMIN' };
    }

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      throw new UnauthorizedException('Login yoki parol xato!');
    }
    return { token: 'mock-jwt-token-' + user.id, role: user.role };
  }

  @Get('courses')
  getCourses() {
    return courses;
  }

  @Post('courses')
  addCourse(@Body() body: any, @Headers('Authorization') auth: string) {
    if (auth !== 'Bearer admin-token') throw new UnauthorizedException();
    const newCourse = { id: courses.length + 1, ...body };
    courses.push(newCourse);
    return newCourse;
  }

  @Post('payments/pay')
  pay(@Body() body: any, @Headers('Authorization') auth: string) {
    if (!auth) throw new UnauthorizedException('Please login');
    const { courseId, provider } = body;
    
    const course = courses.find(c => c.id === courseId);
    if (!course) throw new Error("Course not found");

    const amount = course.price;
    const entityId = 1; // mock user id
    const returnUrl = 'http://localhost:8080/courses.html?paid=true';

    if (provider === 'Payme') {
      const paymeMerchantId = '12345678901234567890abcd'; // Dummy
      const data = `m=${paymeMerchantId};l=uz;ac.user_id=${entityId};a=${amount * 100};c=${returnUrl}`;
      const encoded = Buffer.from(data).toString('base64');
      return { success: true, paymentLink: `https://checkout.paycom.uz/${encoded}` };
    } else {
      const clickServiceId = '12345';
      const clickMerchantId = '67890';
      const clickLink = `https://my.click.uz/services/pay?service_id=${clickServiceId}&merchant_id=${clickMerchantId}&amount=${amount}&transaction_param=${entityId}&return_url=${returnUrl}`;
      return { success: true, paymentLink: clickLink };
    }
  }

  @Get('admin/students')
  getStudents(@Headers('Authorization') auth: string) {
    if (auth !== 'Bearer admin-token') throw new UnauthorizedException();
    
    // Return mock enrolled students based on users and payments
    return users.map(u => ({
      userId: u.id,
      firstName: u.firstName,
      lastName: u.lastName,
      courseId: 1,
      courseName: 'Motion',
      paid: true
    }));
  }

  @Post('admin/certificate')
  sendCertificate(@Body() body: any, @Headers('Authorization') auth: string) {
    if (auth !== 'Bearer admin-token') throw new UnauthorizedException();
    // Logic to send certificate via telegram bot would go here
    return { success: true };
  }
}
