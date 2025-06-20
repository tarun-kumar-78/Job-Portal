// Method to format the date format
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = { year: "numeric" as const, month: "short" as const };
  return date.toLocaleDateString("en-US", options);
};
