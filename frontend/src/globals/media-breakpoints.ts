/**
 * MEDIA BREAKPOINT VARS
 */
 const largestSmall = 767; // px
 const largestMedium = 1299; // px

 /**
  * MEDIA BREAKPOINTS
  */
 const breakpoints = {
  small: `only screen and (max-width: ${largestSmall}px)`,
  medium: `only screen and (min-width: ${largestSmall+1}px) and (max-width: ${largestMedium}px)`,
  atMostMedium: `only screen and (max-width: ${largestMedium}px)`,
  atleastMedium: `only screen and (min-width: ${largestSmall+1}px)`,
  large: `only screen and (min-width: ${largestMedium+1}px)`,
 }

 export default breakpoints;