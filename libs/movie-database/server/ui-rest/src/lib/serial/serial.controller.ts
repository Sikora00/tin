import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete, UseGuards,
} from '@nestjs/common';
import { SerialService } from '../../../../application/src/lib/serial.service';
import { CreateSerialDto } from './dto/create-serial.dto';
import { UpdateSerialDto } from './dto/update-serial.dto';
import {AuthGuard} from "@nestjs/passport";

@Controller('serial')
export class SerialController {
  constructor(private readonly serialService: SerialService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSerialDto: CreateSerialDto) {
    return this.serialService.create(createSerialDto);
  }

  @Get()
  findAll() {
    return this.serialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serialService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateSerialDto: UpdateSerialDto) {
    return this.serialService.update(+id, updateSerialDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.serialService.remove(+id);
  }
}
