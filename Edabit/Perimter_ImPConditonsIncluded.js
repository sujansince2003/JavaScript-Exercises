function findPerimeter(length, width) {
  return length > 0 && width > 0
    ? 2 * (length + width)
    : "measurements cannot be negative";
  /*
        pitfall:: avoid using 2(length+width) as we use in simple mathematics calculations instead use 2*(length+width)
        In JavaScript, the conditional operator ? : expects expressions on both the true and false branches, not statements.
        wrong: (length > 0 && width > 0) ? return 2 * (length + width) : return "measurements cannot be negative";
        right: return (length > 0 && width > 0) ? 2 * (length + width) : "measurements cannot be negative";
    
        */
}
console.log(findPerimeter(2, 5));
