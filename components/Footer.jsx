import React from "react";
import Link from "next/link";
import { SvgLogo } from "./svgs/SvgLogo";
import { SvgFaceBook } from "./svgs/SvgFaceBook";
import { SvgYoutube } from "./svgs/SvgYoutube";
import { SvgIntagram } from './svgs/SvgInstagram'
// import { SvgGithub } from "./svgs/SvgGithub";

const Footer = () => {
  return (
    <footer className="footer dark:border-t dark:border-slate-200/10 dark:bg-gray-900 dark:after:bg-none dark:before:bg-none">
      <div className="wrapper">
        <div className="footer__top">
          <div className="footer__links anime">
            <div className="footer__logo">
              <SvgLogo />
            </div>
            <div className="footer__icons anime">
              <Link 
                href="https://www.facebook.com/hoang.nguyenhuu01" 
                target={"_blank"} 
                className="footer__icon">
                  <SvgFaceBook />
              </Link>
              <Link 
                href="https://www.youtube.com/channel/UCSRHOIi-khAvOHV-3A4m3gQ" 
                target={"_blank"}
                className="footer__icon">
                  <SvgYoutube />
              </Link>
              <Link 
                href="https://github.com/HoangNHbdaf190022" 
                target={"_blank"}
                className="footer__icon">
                  <SvgIntagram />
              </Link>
            </div>
          </div>
          <div className="footer__links anime">
            <p className="footer__desc anime">Trung tâm hành chính Cà Mau</p>
            <p className="footer__desc anime">
              169 Ấp Rạch Nhum, Khánh Bình Đông, Trần Văn Thời, TP. Cà Mau
            </p>
            <p className="footer__desc anime">
              Công ty CP Truyền thông đa phương tiện Cổng Thông Tin Logo 169 Áp
              Rạch Nhum, Khánh Bình Đông, Trần Văn Thời, TP. Cà Mau
            </p>
            <p className="footer__desc anime">Email: nguyenhuuhoang@gmail.com</p>
            <p className="footer__desc anime">Hotline: 036 8716 708</p>
          </div>
          <div className="footer__links anime">
            <Link href="/" className="footer__link anime">
              Câu hỏi thường gặp
            </Link>
            <Link href="/" className="footer__link anime">
              Tin tức
            </Link>
            <Link href="/" className="footer__link anime">
              Chính sách & bảo mật
            </Link>
          </div>
        </div>
        <div className="footer__bottom border-t border-slate-200/10 pt-6">
          <p className="footer__text">© Đã đăng ký Bản quyền</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
