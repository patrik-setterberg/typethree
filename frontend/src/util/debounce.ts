/**
 * DEBOUNCE FUNCTION
 * Make sure callback cannot be called too often (only every "wait" ms).
 */
const debounce = (func: () => void, wait: number): (() => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default debounce;
