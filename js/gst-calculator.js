const gstRate = 0.05

const calculateGST = function(subTotal) {
  const gst = subTotal * gstRate;
  const total = subTotal + gst;
  console.log(`$${subTotal} plus ${gstRate * 100}% GST is $${total.toFixed(2)}.`);
  
}

// Refactor the following code so that gst totals are calculated by invoking calculateGST(). Example:
// calculateGST(subTotal1);

// Sub Total 1
const subTotal1 = 40;

// Sub Total 2
const subTotal2 = 51;

// Sub Total 3
const subTotal3 = 32.45;

// Step 2 Invoke:
calculateGST(subTotal1);
calculateGST(subTotal2);
calculateGST(subTotal3);
