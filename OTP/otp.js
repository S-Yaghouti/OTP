// ========================================================== >> Definitions <<
//
// OTP C = > { OTP Container }
//
// AP = > { AppendChild }
//
// ========================================================== >> Definitions <<
//
// =============================================================== >> Module <<
export function OTP(InputCount) {
  //
  // ------------------------------------------------- >> OTP C <<
  const OTP_Container = document.createElement("div");
  OTP_Container.classList.add("OTP_Container");
  // ------------------------------------------------- >> OTP C <<
  //
  // ----------------------------------------------- >> Builder <<
  for (let index = 0; index < InputCount; index++) {
    //
    // ------------------------ > Create OTP Feild <
    const OTP_Feild = document.createElement("input");
    OTP_Feild.classList.add("OTP_Feild");
    OTP_Feild.setAttribute("maxlength", "1");
    OTP_Feild.setAttribute("type", "tel");
    OTP_Feild.setAttribute("name", "OTP");
    // ------------------------ > Create OTP Feild <
    //
    // -------------------------------------- > AP <
    OTP_Container.appendChild(OTP_Feild);
    // -------------------------------------- > AP <
    //
  }
  // ----------------------------------------------- >> Builder <<
  //
  // ------------------------------------------------ >> Return <<
  return OTP_Container;
  // ------------------------------------------------ >> Return <<
}
// =============================================================== >> Module <<
