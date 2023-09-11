var dsnv = new DSNV();
var dataJson = localStorage.getItem("DSNV");
if (dataJson !== null) {
  // dssv.students = JSON.parse(dataJson);
  // console.log("dssv.students: ", dssv.students);

  // cách 1
  // for (var i = 0; i < dssv.students.length; i++) {
  //   // cách viết 1 :
  //   // var sv = dssv.students[i];
  //   // sv = new SinhVien(
  //   //   sv.maSV,
  //   //   sv.tenSV,
  //   //   sv.email,
  //   //   sv.matKhau,
  //   //   sv.ngaySinh,
  //   //   sv.khoaHoc,
  //   //   sv.diemToan,
  //   //   sv.diemLy,
  //   //   sv.diemHoa
  //   // );
  //   // dssv.students[i] = sv;

  // cách viết 2
  //   dssv.students[i] = new SinhVien(
  //     dssv.students[i].maSV,
  //     dssv.students[i].tenSV,
  //     dssv.students[i].email,
  //     dssv.students[i].matKhau,
  //     dssv.students[i].ngaySinh,
  //     dssv.students[i].khoaHoc,
  //     dssv.students[i].diemToan,
  //     dssv.students[i].diemLy,
  //     dssv.students[i].diemHoa
  //   );
  // }

  // cách 2
  dsnv.nhanVien = JSON.parse(dataJson).map(function (item) {
    // item tương ứng với từng phần tử trong array
    return new NhanVien(
      item.tkNV,
      item.tenNV,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCoBan,
      item.chucVu,
      item.gioLam,
    );
  });

  renderTable(dsnv.nhanVien);
}
function getElm(selector) {
  return document.querySelector(selector);
}
function layThongTinTuForm() {
  var tkNV = getElm("#tknv").value;
  var tenNV = getElm("#name").value;
  var email = getElm("#email").value;
  var matKhau = getElm("#password").value;
  var ngayLam = getElm("#datepicker").value;
  var luongCoBan = getElm("#luongCB").value;
  var chucVu = getElm("#chucvu").value;
  var gioLam = getElm("#gioLam").value;

  return new NhanVien(
    tkNV,
    tenNV,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
}
function renderTable(listArr) {
  var htmlString = "";
  for (var i = 0; i < listArr.length; i++) {
    var nhanVien = listArr[i];
    htmlString += `
      <tr>
        <td>${nhanVien.tkNV}</td>
        <td>${nhanVien.tenNV}</td>
        <td>${nhanVien.email}</td>
        
        <td>${nhanVien.ngayLam}</td>
        
        <td>${nhanVien.chucVu}</td>
        <td>${nhanVien.tinhTongLuong()}</td>
        <td>${nhanVien.xepLoai()}</td>
        <td class="d-flex">
        <button class="btn btn-danger" onclick="xoaNV('${
          nhanVien.tkNV
        }')">Delete</button>
        <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="suaNV('${
          nhanVien.tkNV
        }')">Edit</button>
      </td>
      </tr>`;
  }
  
  getElm("#tableDanhSach").innerHTML = htmlString;
}
function resetForm() {
  getElm("#tknv").value = '';
    getElm("#tknv").disabled = false;
    getElm("#name").value = '';
    getElm("#email").value = '';
    getElm("#password").value = '';
    getElm("#datepicker").value = '';
    getElm("#luongCB").value = '';
    getElm("#chucvu").value = '';
    getElm("#gioLam").value = '';
}
function themNV() {
  var nv = layThongTinTuForm();
  console.log("nv: ", nv);
  //Kiểm Tra Tài Khoản Nhân Viên
  var valid = kiemTraRong(
    nv.tkNV,
    "#tbTKNV",
    "Tài Khoản Nhân Viên Không Được Để Trống!"
  )
  &&
  kiemTraTrung(
    nv.tkNV,
    dsnv.nhanVien,
    "#tbTKNV",
    "Tài Khoản Nhân Viên Đã Tồn Tại"
  )&&
  kiemTraDoDai (
    nv.tkNV,
    4,
    6,
    "#tbTKNV",
    "Tài Khoản Nhân Viên Phải Có Độ Dài 4~6 Ký Số!"
  );
  //Kiểm Tra Tên
  valid &=
  kiemTraRong(
    nv.tenNV,
    "#tbTen",
    "Tên Nhân Viên Không Được Để Trống!"
  )&& kiemTraChuoi(
    nv.tenNV, 
    "#tbTen", 
    "Tên sinh viên phải là chữ !"
    );
   //Kiểm Tra Email
   valid &=
   kiemTraRong(
    nv.email,
    "#tbEmail",
    "Email Không Được Để Trông!"
   )&& kiemTraEmail(
    nv.email,
    "#tbEmail",
    "Email Không Hợp Lệ!"
   );
   //Kiểm Tra Mật Khẩu
   valid &=
   kiemTraRong(
    nv.matKhau,
    "#tbMatKhau",
    "Mật khẩu không được để trống!"
   )&& kiemTraMatKhau(
    nv.matKhau,
    "#tbMatKhau",
    "Mật khẩu phải có 6 đến 10 ký tự, trong đó có ít nhất một chữ thường, một chữ hoa, một chữ số và một ký tự đặc biệt"
   );
   // Kiểm Tra Ngày Làm
   valid &=
   kiemTraRong(
    nv.ngayLam,
    "#tbNgay",
    "Ngày Làm không được để trống!"
   );
    // Kiểm Tra Lương CB
    valid &=
    kiemTraRong(
      nv.luongCoBan,
      "#tbLuongCB",
      "Lương Cơ Bản Không Được Để Trống!"
    )&& kiemTraLuongCB(
      nv.luongCoBan,
      "#tbLuongCB",
      "Lương Cơ Bản Phải Nhập Từ 1.000.000 đến 20.000.000"
    )
    // Kiểm Tra Chức Vụ
    valid &=
    kiemTraChucVu(
      nv.chucVu,
      "#tbChucVu",
      "Chọn Một Chức Vụ"
    )
    //Kiểm Tra Giờ Làm
    valid &=
    kiemTraRong(
      nv.gioLam,
      "#tbGiolam",
      "Giờ Làm Không Được Để Trống!"
    )&&
    kiemTraGioLam(
      nv.gioLam,
      "#tbGiolam",
      "Nhập Từ 80 - 200 Giờ"
    )
    console.log('nv.chucVu: ', nv.chucVu);
  if (valid) {
    dsnv._themNhanVien(nv);
    // localStorage: nơi lưu trữ (chỉ chấp nhận json) - json là 1 kiểu dữ liệu
    // JSON.stringify: convert array to json
    var data = JSON.stringify(dsnv.nhanVien);
    // lưu data xuống localStorage
    localStorage.setItem("DSNV", data);
    resetForm();
    renderTable(dsnv.nhanVien);
  }
  var content = document.querySelectorAll('.sp-thongbao');
  content.forEach((item) => {
    item.style.display = 'block';
});

}
function xoaNV(tkNV) {
  dsnv._xoaNhanVien(tkNV);
    // localStorage: nơi lưu trữ (chỉ chấp nhận json) - json là 1 kiểu dữ liệu
    // JSON.stringify: convert array to json
    var data = JSON.stringify(dsnv.nhanVien);
    // lưu data xuống localStorage
    localStorage.setItem("DSNV", data);
  renderTable(dsnv.nhanVien);
}
function suaNV(tkNV) {
  var nv = dsnv._layThongTinNhanVien(tkNV); 
  if (nv) {
    getElm("#tknv").value = nv.tkNV;
    getElm("#tknv").disabled = true;
    getElm("#name").value = nv.tenNV;
    getElm("#email").value = nv.email;
    getElm("#password").value = nv.matKhau;
    getElm("#datepicker").value = nv.ngayLam;
    getElm("#luongCB").value = nv.luongCoBan;
    getElm("#chucvu").value = nv.chucVu;
    getElm("#gioLam").value = nv.gioLam;
  }
}
function capNhatNhanVien() {
  var nv = layThongTinTuForm();
  //Kiểm Tra TK Nhân Viên
  // var valid = kiemTraRong(
  //   nv.tkNV,
  //   "#tbTKNV",
  //   "Tài Khoản Nhân Viên Không Được Để Trống!"
  // )
  // &&
  // kiemTraTrung(
  //   nv.tkNV,
  //   dsnv.nhanVien,
  //   "#tbTKNV",
  //   "Tài Khoản Nhân Viên Đã Tồn Tại"
  // )&&
  // kiemTraDoDai (
  //   nv.tkNV,
  //   4,
  //   6,
  //   "#tbTKNV",
  //   "Tài Khoản Nhân Viên Phải Có Độ Dài 4~6 Ký Số!"
  // );
  //Kiểm Tra Tên
  var valid =
  kiemTraRong(
    nv.tenNV,
    "#tbTen",
    "Tên Nhân Viên Không Được Để Trống!"
  )&& kiemTraChuoi(
    nv.tenNV, 
    "#tbTen", 
    "Tên sinh viên phải là chữ !"
    );
   //Kiểm Tra Email
   valid &=
   kiemTraRong(
    nv.email,
    "#tbEmail",
    "Email Không Được Để Trông!"
   )&& kiemTraEmail(
    nv.email,
    "#tbEmail",
    "Email Không Hợp Lệ!"
   );
   //Kiểm Tra Mật Khẩu
   valid &=
   kiemTraRong(
    nv.matKhau,
    "#tbMatKhau",
    "Mật khẩu không được để trống!"
   )&& kiemTraMatKhau(
    nv.matKhau,
    "#tbMatKhau",
    "Mật khẩu phải có 6 đến 10 ký tự, trong đó có ít nhất một chữ thường, một chữ hoa, một chữ số và một ký tự đặc biệt"
   );
   // Kiểm Tra Ngày Làm
   valid &=
   kiemTraRong(
    nv.ngayLam,
    "#tbNgay",
    "Ngày Làm không được để trống!"
   );
    // Kiểm Tra Lương CB
    valid &=
    kiemTraRong(
      nv.luongCoBan,
      "#tbLuongCB",
      "Lương Cơ Bản Không Được Để Trống!"
    )&& kiemTraLuongCB(
      nv.luongCoBan,
      "#tbLuongCB",
      "Lương Cơ Bản Phải Nhập Từ 1.000.000 đến 20.000.000"
    )
    // Kiểm Tra Chức Vụ
    valid &=
    kiemTraChucVu(
      nv.chucVu,
      "#tbChucVu",
      "Chọn Một Chức Vụ"
    )
    //Kiểm Tra Giờ Làm
    valid &=
    kiemTraRong(
      nv.gioLam,
      "#tbGiolam",
      "Giờ Làm Không Được Để Trống!"
    )&&
    kiemTraGioLam(
      nv.gioLam,
      "#tbGiolam",
      "Nhập Từ 80 - 200 Giờ"
    )
    console.log('nv.chucVu: ', nv.chucVu);
    if (valid) {
      dsnv._capNhatNhanVien(nv);
      // localStorage: nơi lưu trữ (chỉ chấp nhận json) - json là 1 kiểu dữ liệu
      // JSON.stringify: convert array to json
      var data = JSON.stringify(dsnv.nhanVien);
      // lưu data xuống localStorage
      localStorage.setItem("DSNV", data);
      resetForm();
      renderTable(dsnv.nhanVien);
    }
    var content = document.querySelectorAll('.sp-thongbao');
    content.forEach((item) => {
      item.style.display = 'block';
  });
}

getElm("#btnDong").onclick = function(){
  resetForm();
  var content = document.querySelectorAll('.sp-thongbao');
    content.forEach((item) => {
      item.style.display = 'none';
  });
}

//tìm kiếm
getElm("#btnTimNV").onclick = function () {
  // toLowerCase: convert text về chữ thường
  // ?. : Optional chaining (?.)
  var textSearch = document.querySelector("#searchName").value?.toLowerCase();
  
  var result = [];

  if (textSearch.length > 0) {
    result = dsnv.nhanVien.filter(function (nv) {
      return nv.xepLoai().toLowerCase().includes(textSearch);
    });

    renderTable(result);
  } else {
    renderTable(dsnv.nhanVien);
    console.log('dsnv.nhanVien: ', dsnv.nhanVien);
  }
};
