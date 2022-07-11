/**
 * COOKIE CHECKER
 * Checks if a cookie with a parameter cookieName exists.
 * @param cookieName 
 * @returns boolean
 */
const _checkCookie = (cookieName: string): boolean => {
  return document.cookie
    .split(";")
    .some((item) => item.trim().startsWith(cookieName));
};

/**
 * CHECK HIGH SCORE COOKIE
 * Checks if a high score cookie exists and returns its value.
 * @param cookieName 
 * @returns Number, retrieved value from cookie, or 0.
 */
export const checkHighScoreCookie = (cookieName: string): number => {
  let score: number = 0;
  if (_checkCookie(cookieName)) {
    const scoreCookie: string | undefined = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith(cookieName));

    if (scoreCookie && !isNaN(Number(scoreCookie.split("=")[1]))) {
      score = Number(scoreCookie.split("=")[1]);
    }
  }

  return score;
};

/**
 * CHECK DATESTAMP COOKIE
 * Checks if a DATESTAMP cookie exists and returns its value.
 * @param cookieName 
 * @returns string, retrieved value from cookie, or empty string.
 */
export const checkDatestampCookie = (cookieName: string): string => {
  let datestamp: string = "";
  if (_checkCookie(cookieName)) {
    const datestampCookie: string | undefined = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith(cookieName));

    if (datestampCookie) {
      datestamp = datestampCookie.split("=")[1];
    }
  }
  return datestamp;
};