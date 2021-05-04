function basicOp(operation, value1, value2)
{
  let result = 0;
  switch(operation){
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
  }
}