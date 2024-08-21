import { Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Controller('/app/transaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async createTransaction(@Body() data: CreateTransactionDTO) {
    const createdTransaction = await this.appService.createTransaction(data);
    return createdTransaction;
  }
  @Get('/')
  async listAll() {
    const transactions = await this.appService.listAll();
    return transactions;
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateTransactionDTO) {
    const transactions = await this.appService.updateTransaction(id, data);
    return transactions;
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const transactions = await this.appService.deleteTransaction(id);
    return transactions;
  }
}
