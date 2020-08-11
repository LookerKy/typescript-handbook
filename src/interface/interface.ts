/** 기존 방식 */
const printLabel = (labelObj: { label: string }) => {
  console.log(labelObj.label);
};

const myObj = { size: 19, label: "Size 19 Object" };
printLabel(myObj);

/** interface 적용 */
interface LabelValue {
  label: string;
}

const labelPrinter = (labelObj: LabelValue) => {
  console.log(labelObj.label);
};

labelPrinter(myObj);
