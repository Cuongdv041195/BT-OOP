function NhanVien(
    _tkNV,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
){
    this.tkNV = _tkNV;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    //method
    this.tinhTongLuong = function () {
        var tongLuong = 0;
        if (this.chucVu == 'Sếp'){
            tongLuong = this.luongCoBan * 3
        }else if(this.chucVu == 'Trưởng phòng'){
            tongLuong = this.luongCoBan * 2;
        }else if(this.chucVu == 'Nhân viên'){
            tongLuong = this.luongCoBan
        }
        return tongLuong.toLocaleString()
      };

    this.xepLoai = function(){
        var xepLoai = "";
        if (this.gioLam >= 192){
            xepLoai = "Nhân viên xuất sắc"
        }else if (this.gioLam >= 176){
            xepLoai = "Nhân viên giỏi"
        }else if (this.gioLam >= 160){
            xepLoai = "Nhân viên khá"
        }else if (this.gioLam < 160){
            xepLoai = "Nhân viên trung bình"
        }
        return xepLoai
    }
}