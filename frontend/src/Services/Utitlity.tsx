// Method to format the date format
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = { year: "numeric" as const, month: "short" as const };
  return date.toLocaleDateString("en-US", options);
};

//Times ago function
export function timeAgo(time: string) {
  const now = new Date();
  const past = new Date(time);
  const secondsPast = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (secondsPast < 60) {
    return `${secondsPast} seconds ago`;
  }

  const minutes = Math.floor(secondsPast / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

export const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
  });
};

export const formatInterviewDate = (interviewDate: any) => {
  const date = new Date(interviewDate);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export function showPdfFromBase64(base64String: string) {
  // Decode the Base64 string into a byte array
  console.log(base64String);
  const byteCharacters = atob(base64String);

  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // Create a Blob from the byte array
  const blob = new Blob([byteArray], { type: "application/pdf" });

  // Generate a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Open the PDF in a new tab
  window.open(url, "_blank");
}
