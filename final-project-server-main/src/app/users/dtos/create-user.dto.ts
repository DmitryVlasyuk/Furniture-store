import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
  @ApiProperty({
    description: "User email"
  })
  @IsString({message: "must be a string"})
  @IsEmail({}, {message: "got incorrect email"})
  readonly email: string;

  @ApiProperty({
    description: "User password"
  })
  @IsString({message: "must be a string"})
  @Length(4, 16, {message: "range: 4-16 symbols"})
  readonly password: string;

}