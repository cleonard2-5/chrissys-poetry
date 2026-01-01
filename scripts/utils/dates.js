export function dateButtonConversion(date) {
  const newDate = new Intl.DateTimeFormat('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit'
  }).format(date);

  return newDate;
}

export function dateWindowConversion(date) {
  const getOrdinal = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  const newDate = `${month} ${day}${getOrdinal(day)}, ${year}`;

  return newDate;
}