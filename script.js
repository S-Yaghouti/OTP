// 
// ============= >> All icons are sourced from the Iconify website << ==============
// 
// =================================================================== >> improts <<
import { OTP } from "./OTP/otp.js";
// =================================================================== >> improts <<
//
// ==================================================================== >> Layers <<
//
// ------------------------------------------------------ >> layer 1 <<
const BG_1 = document.querySelector("#BG_1");
// ------------------------------------------------------ >> layer 1 <<
//
// ==================================================================== >> Layers <<
//
// =================================================================== >> Layer 1 <<
//
// --------------------------------------------------------- >> OTP <<
//
// ------------------------------------------ > Title Text <
const OTP_Text = document.createElement("span");
OTP_Text.classList.add("OTP_Text");

OTP_Text.textContent = "enter code";

BG_1.appendChild(OTP_Text);
// ------------------------------------------ > Title Text <
//
// -------------------------------------------- > CallBack <
//
const Inputcount = 6; // you can change as you like
//
const CodeVerifiaction = OTP(Inputcount, otpSubmit);
//
// -------------------------------------------- > CallBack <
//
// ----------------------------------------- > Appendchild <
BG_1.appendChild(CodeVerifiaction);
// ----------------------------------------- > Appendchild <
//
// ------------------------- Selector >
const inputs = document.querySelectorAll(".OTP_Feild");
// ------------------------- Selector <
//
// ------------- OTP Function Manager >
inputs.forEach((input, index) => {
  //
  // Set Index For Inputs >>
  input.dataset.index = index;
  // Set Index For Inputs <<
  //
  // Paste Listner >>
  input.addEventListener("paste", handleOtpPaste);
  // Paste Listner <<
  //
  // Keyup Listner >>
  input.addEventListener("keyup", handleOtp);
  // Keyup Listner >>
  //
});
// ------------- OTP Function Manager <
//
// ----------------------- Handle otp >
function handleOtp(e) {
  //
  // Identify the Target Input Field >>
  let input = e.target;
  // Identify the Target Input Field <<
  //
  // Retrieve and Adjust Input Value >>
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";
  // Retrieve and Adjust Input Value <<
  //
  // Set Index For Feilds >>
  let feildIndex = input.dataset.index;
  // Set Index For Feilds <<
  //
  // Move to next Feild >>
  if (value.length > 0 && feildIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }
  // Move to next Feild <<
  //
  // Handel Remove >>
  if (e.key === "Backspace" && feildIndex > 0) {
    input.previousElementSibling.focus();
  }
  // Handel Remove <<
  //
  // Submit OTP >>
  if (
    feildIndex == inputs.length - 1 &&
    value.length > 0 &&
    e.key !== "Backspace"
  ) {
    otpSubmit();
  }
  // Submit OTP <<
}
// ----------------------- Handle otp <
//
// ------------------------ Paste OTP >
function handleOtpPaste(e) {
  //
  // Get the Stored Text >>
  const data = e.clipboardData.getData("text");
  // Get the Stored Text <<
  //
  // Split to Characters >>
  const value = data.split("");
  // Split to Characters <<
  //
  // Check the Length >>
  if (value.length === inputs.length) {
    //
    // Fill The Feilds With Value >
    inputs.forEach((input, index) => (input.value = value[index]));
    // Fill The Feilds With Value >
    //
    // OTP Submit >
    otpSubmit();
    // OTP Submit <
  }
  // Check the Length >>
}
// ------------------------ Paste OTP <
//
// ----------------------- OTP Submit >
let IsValid = false;
//
function otpSubmit() {
  //
  // Clear Inputs Classes >>
  inputs.forEach((input) => {
    input.blur();
    input.classList.remove("check");
    input.classList.remove("error");
  });
  // Clear Inputs Classes <<
  //
  // Add Loading to otp container >>
  CodeVerifiaction.classList.add("loading");
  // Add Loading to otp container <<
  //
  // Gather Entered Code >>
  let otp = "";
  inputs.forEach((inputValue) => {
    otp += inputValue.value;
  });
  // Gather Entered Code <<
  //
  // >> Now you can do whatever you want with the entered code, But i added different states to show  <<
  //
  // operator >>
  IsValid = !IsValid;
  // operator <<
  //
  // Valid >>
  if (IsValid) {
    //
    // Add timeout >
    setTimeout(() => {
      //
      // Remove loading >
      CodeVerifiaction.classList.remove("loading");
      // Remove loading <
      //
      // add check to inputs >
      inputs.forEach((input) => {
        input.classList.add("check");
      });
      // add check to inputs <
      //
    }, 2000);
    // Add timeout <
    //
  }
  // Valid >>
  //
  // Error >>
  else {
    //
    // Add timeout >
    setTimeout(() => {
      //
      // Remove loading >
      CodeVerifiaction.classList.remove("loading");
      // Remove loading <
      //
      // add check to inputs >
      inputs.forEach((input) => {
        input.classList.add("error");
      });
      // add check to inputs <
      //
    }, 2000);
    // Add timeout <
    //
  }
  // Error <<
  //
}
// ----------------------- OTP Submit <
//
// --------------------------------------------------------- >> OTP <<
//
// =================================================================== >> Layer 1 <<
//
