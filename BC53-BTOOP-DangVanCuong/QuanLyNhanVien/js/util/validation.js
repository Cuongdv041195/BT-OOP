function kiemTraRong(value, idErr, message) {
    if (value.trim() === "") {
      document.querySelector(idErr).innerHTML = message;
      return false;
    } else {
      document.querySelector(idErr).innerHTML = "";
      return true;
    }
  }

  function kiemTraTrung(id, dsnv, idErr, message) {
    var viTri = dsnv.findIndex(function (nv) {
      return nv.tkNV == id;
    });
    console.log("vị trí", viTri);
  
    if (viTri != -1) {
      document.querySelector(idErr).innerHTML = message;
      return false;
    } else {
      document.querySelector(idErr).innerHTML = "";
      return true;
    }
  }

  function kiemTraDoDai(value, min, max, idErr, message) {
    var length = value.length;
    if (length >= min && length <= max) {
      document.querySelector(idErr).innerHTML = "";
      return true;
    } else {
      document.querySelector(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraChuoi(value, idErr, message) {
    const re =
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
  
    var isString = re.test(value);
    if (isString) {
      document.querySelector(idErr).innerHTML = "";
      return true;
    } else {
      document.querySelector(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraEmail(value, idErr, message) {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
    var isEmail = re.test(value);
    if (isEmail) {
      document.querySelector(idErr).innerHTML = "";
      return true;
    } else {
      document.querySelector(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraMatKhau(value, idErr, message) {
    const re =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  
    var isPassword = re.test(value);
    if (isPassword) {
      document.querySelector(idErr).innerHTML = "";
      return true;
    } else {
      document.querySelector(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraLuongCB(value, idErr, message) {
    if (value >= 1000000 && value <= 20000000) {
      document.querySelector(idErr).innerHTML = "";
      return true;
    } else {
      document.querySelector(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraLuong(value, idErr, message){
    const re =
    /^[1-9]\d{0,2}(?:\.\d{3})*(?:\.\d{3})?$|^1[0-9]{6}(?:\.\d{3})*(?:\.\d{3})?$|^20[0]{6}(?:\.\d{3})*(?:\.\d{3})?$|^20[0]{7}(?:\.\d{3})*(?:\.\d{3})?$/;

    var match = re.test(value)      
        if (match){
          document.querySelector(idErr).innerHTML = ""
          return true;
        } else{
          document.querySelector(idErr).innerHTML = message;
          return false;
        }
  }
 
  function kiemTraChucVu(value, idErr, message){
    var option = ["Sếp", "Trưởng phòng", "Nhân viên"]
    if (option.includes(value)){
      document.querySelector(idErr).innerHTML = ""
      return true;
    }else{
      document.querySelector(idErr).innerHTML = message;
      return false;
    }
  }


  function kiemTraGioLam(value, idErr, message){
    if (value >= 80 && value <= 200){
      document.querySelector(idErr).innerHTML = ""
      return true;
    }else{
      document.querySelector(idErr).innerHTML = message;
      return false;
    }
  }
  