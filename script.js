//your JS code here. If required.
// Helper function to create a promise that resolves after a random time between minTime and maxTime in seconds
  function createPromise(minTime, maxTime) {
    const time = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime) * 1000;
    return new Promise(resolve => setTimeout(() => resolve(time), time));
  }
  
  // Get the table rows
  const loadingRow = document.getElementById('loading-row');
  const promise1Row = document.getElementById('promise-1-row');
  const promise2Row = document.getElementById('promise-2-row');
  const promise3Row = document.getElementById('promise-3-row');
  const totalRow = document.getElementById('total-row');
  
  // Add the loading text to the table
  promise1Row.classList.add('hidden');
  promise2Row.classList.add('hidden');
  promise3Row.classList.add('hidden');
  
  // Create the promises
  const promise1 = createPromise(1, 3);
  const promise2 = createPromise(1, 3);
  const promise3 = createPromise(1, 3);
  
  // Wait for all promises to resolve
  Promise.all([promise1, promise2, promise3]).then(values => {
    // Calculate the total time taken
    const totalTime = values.reduce((acc, value) => acc + value, 0) / 1000;
    
    // Populate the table with the values
    promise1Row.cells[1].textContent = (values[0] / 1000).toFixed(3);
    promise2Row.cells[1].textContent = (values[1] / 1000).toFixed(3);
    promise3Row.cells[1].textContent = (values[2] / 1000).toFixed(3);
    totalRow.cells[1].textContent = totalTime.toFixed(3);
    
    // Remove the loading text and show the table
    loadingRow.classList.add('hidden');
    promise1Row.classList.remove('hidden');
    promise2Row.classList.remove('hidden');
    promise3Row.classList.remove('hidden');
    totalRow.classList.remove('hidden');
  });