const today = new Date().toISOString().split('T')[0];

export const todayModified = `${today.split('-')[2]}-${today.split('-')[1]}-${today.split('-')[0]}`;
