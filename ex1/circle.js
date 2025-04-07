// Calculate circumference of a circle
function circumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Calculate area of a circle
  function area(radius) {
    return Math.PI * radius * radius;
  }
  
  // Export functions
  module.exports = {
    circumference,
    area
  };