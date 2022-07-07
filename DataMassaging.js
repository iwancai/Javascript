Array.from({ length: 12}, (x, index) => (
    new Date(0, index + 1, 0).toLocaleDateString('en-US', { month: 'short'})
));