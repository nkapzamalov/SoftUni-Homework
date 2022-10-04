function solve(input) {
  let indexOfSlash = input.lastIndexOf("\\");

  let fileInfo = input.substring(indexOfSlash + 1);
  let fileInfoDotIndex = fileInfo.lastIndexOf(".");

  let extension = fileInfo.substring(fileInfoDotIndex + 1);
  let extensionIndex = fileInfo.lastIndexOf(extension);
  let fileName = fileInfo.substring(0, extensionIndex - 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

solve("C:\\Internal\\training-internal\\Template.bak.pptx");
