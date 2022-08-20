function balancedParentheses(str) {
  // 1 - If the current character is an opening bracket, push it into the stack
  // 2 - If it is a closing bracket, pop it from the stack. If the popped character is not the matching starting bracket, return false
  // 3 - At the end, if there are any opening brackets left in the stack, return false
  const brackets = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  const openers = Object.values(brackets);
  const closers = Object.keys(brackets);

  const stack = [];
  for(const char of str) {
    if(openers.includes(char)) {
      stack.push(char);
    }

    if(closers.includes(char)){
      const lastBrackets = stack.pop();
      if(lastBrackets != brackets[char]) return false;
    }
  }
  return !stack.length;
}

balancedParentheses('{[]()}');	
balancedParentheses('{[(])}');	
balancedParentheses('{[}');	
