export function formatDateRange(from: Date, to: Date | null): string {
  const fromStr = from.toLocaleDateString(
    'en-US',
    { month: 'long', year: 'numeric' }
  );
  const toStr = to ?
    to.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) :
    'Present';
  return `${fromStr} - ${toStr}`;
}

export function calculateDuration(from: Date, to: Date | null): string {
  const end = to ?? new Date();

  let totalMonths =
    (end.getFullYear() - from.getFullYear()) * 12 +
    (end.getMonth() - from.getMonth());
  totalMonths += 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }

  if (parts.length === 0) {
    return '0 months';
  }

  return parts.join(' ');
}