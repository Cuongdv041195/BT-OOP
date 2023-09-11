function DSNV(){
    this.nhanVien = [];
    this._themNhanVien = function (nv) {
        this.nhanVien.push(nv);
      };

      this._timViTriNhanVien = function (tkNV) {
        var index = -1;
        for (var i = 0; i < this.nhanVien.length; i++) {
          var nv = this.nhanVien[i]; 
          if (nv.tkNV === tkNV) {
            index = i;
            break;
          }
        }
        return index;
        
      };

      this._layThongTinNhanVien = function (tkNV) {
        var index = this._timViTriNhanVien(tkNV);
        if (index !== -1) {
          var nv = this.nhanVien[index];
          return nv;
        }
      };

      this._capNhatNhanVien = function (nhanVien) {
        var index = this._timViTriNhanVien(nhanVien.tkNV);
        console.log("index: ", index);
        if (index !== -1) {
          this.nhanVien[index] = nhanVien;
        }
      };

      this._xoaNhanVien = function (tkNV) {
        var index = this._timViTriNhanVien(tkNV);
        if (index !== -1) {
          this.nhanVien.splice(index, 1);
        }
      };
}