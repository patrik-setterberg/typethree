export interface TypeTestContextValues {
  testInProgress: boolean;
  setTestInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  testConcluded: boolean;
  setTestConcluded: React.Dispatch<React.SetStateAction<boolean>>;
}
