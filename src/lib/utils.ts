import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - date.getTime();

  // Calculate the difference in days, hours, minutes, and seconds
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Format the result based on the difference
  if (diffInDays > 1) {
    return `${diffInDays} days ago`;
  } else if (diffInDays === 1) {
    return `1 day ago`;
  } else if (diffInHours > 1) {
    return `${diffInHours} hours ago`;
  } else if (diffInHours === 1) {
    return `1 hour ago`;
  } else if (diffInMinutes > 1) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInMinutes === 1) {
    return `1 minute ago`;
  } else {
    return `just now`;
  }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
