import React from "react";
import "../CSS/menuTwo.css";
import { NavLink } from "react-router-dom";

const MenuTwo = () => {
  return (
    <div className="menuTwoDiv">
      <div className="highlight" onClick={hideMenuTwoDiv}></div>
      <div className="menuTwo">
        <div className="menuTwoHeader">فهرس سور القرآن الكريم</div>
        <NavLink onClick={toZero} to="/001">
          001 - الفاتحة
        </NavLink>
        <NavLink onClick={toZero} to="/002">
          002 - البقرة
        </NavLink>
        <NavLink onClick={toZero} to="/003">
          003 - آل عمران
        </NavLink>
        <NavLink onClick={toZero} to="/004">
          004 - النساء
        </NavLink>
        <NavLink onClick={toZero} to="/005">
          005 - المائدة
        </NavLink>
        <NavLink onClick={toZero} to="/006">
          006 - الأنعام
        </NavLink>
        <NavLink onClick={toZero} to="/007">
          007 - الأعراف
        </NavLink>
        <NavLink onClick={toZero} to="/008">
          008 - الأنفال
        </NavLink>
        <NavLink onClick={toZero} to="/009">
          009 - التوبة
        </NavLink>
        <NavLink onClick={toZero} to="/010">
          010 - يونس
        </NavLink>
        <NavLink onClick={toZero} to="/011">
          011 - هود
        </NavLink>
        <NavLink onClick={toZero} to="/012">
          012 - يوسف
        </NavLink>
        <NavLink onClick={toZero} to="/013">
          013 - الرعد
        </NavLink>
        <NavLink onClick={toZero} to="/014">
          014 - إبراهيم
        </NavLink>
        <NavLink onClick={toZero} to="/015">
          015 - الحجر
        </NavLink>
        <NavLink onClick={toZero} to="/016">
          016 - النحل
        </NavLink>
        <NavLink onClick={toZero} to="/017">
          017 - الإسراء
        </NavLink>
        <NavLink onClick={toZero} to="/018">
          018 - الكهف
        </NavLink>
        <NavLink onClick={toZero} to="/019">
          019 - مريم
        </NavLink>
        <NavLink onClick={toZero} to="/020">
          020 - طه
        </NavLink>
        <NavLink onClick={toZero} to="/021">
          021 - الأنبياء
        </NavLink>
        <NavLink onClick={toZero} to="/022">
          022 - الحج
        </NavLink>
        <NavLink onClick={toZero} to="/023">
          023 - المؤمنون
        </NavLink>
        <NavLink onClick={toZero} to="/024">
          024 - النور
        </NavLink>
        <NavLink onClick={toZero} to="/025">
          025 - الفرقان
        </NavLink>
        <NavLink onClick={toZero} to="/026">
          026 - الشعراء
        </NavLink>
        <NavLink onClick={toZero} to="/027">
          027 - النمل
        </NavLink>
        <NavLink onClick={toZero} to="/028">
          028 - القصص
        </NavLink>
        <NavLink onClick={toZero} to="/029">
          029 - العنكبوت
        </NavLink>
        <NavLink onClick={toZero} to="/030">
          030 - الروم
        </NavLink>
        <NavLink onClick={toZero} to="/031">
          031 - لقمان
        </NavLink>
        <NavLink onClick={toZero} to="/032">
          032 - السجدة
        </NavLink>
        <NavLink onClick={toZero} to="/033">
          033 - الأحزاب
        </NavLink>
        <NavLink onClick={toZero} to="/034">
          034 - سبأ
        </NavLink>
        <NavLink onClick={toZero} to="/035">
          035 - فاطر
        </NavLink>
        <NavLink onClick={toZero} to="/036">
          036 - يس
        </NavLink>
        <NavLink onClick={toZero} to="/037">
          037 - الصافات
        </NavLink>
        <NavLink onClick={toZero} to="/038">
          038 - ص
        </NavLink>
        <NavLink onClick={toZero} to="/039">
          039 - الزمر
        </NavLink>
        <NavLink onClick={toZero} to="/040">
          040 - غافر
        </NavLink>
        <NavLink onClick={toZero} to="/041">
          041 - فصلت
        </NavLink>
        <NavLink onClick={toZero} to="/042">
          042 - الشورى
        </NavLink>
        <NavLink onClick={toZero} to="/043">
          043 - الزخرف
        </NavLink>
        <NavLink onClick={toZero} to="/044">
          044 - الدخان
        </NavLink>
        <NavLink onClick={toZero} to="/045">
          045 - الجاثية
        </NavLink>
        <NavLink onClick={toZero} to="/046">
          046 - الأحقاف
        </NavLink>
        <NavLink onClick={toZero} to="/047">
          047 - محمد
        </NavLink>
        <NavLink onClick={toZero} to="/048">
          048 - الفتح
        </NavLink>
        <NavLink onClick={toZero} to="/049">
          049 - الحجرات
        </NavLink>
        <NavLink onClick={toZero} to="/050">
          050 - ق
        </NavLink>
        <NavLink onClick={toZero} to="/051">
          051 - الذاريات
        </NavLink>
        <NavLink onClick={toZero} to="/052">
          052 - الطور
        </NavLink>
        <NavLink onClick={toZero} to="/053">
          053 - النجم
        </NavLink>
        <NavLink onClick={toZero} to="/054">
          054 - القمر
        </NavLink>
        <NavLink onClick={toZero} to="/055">
          055 - الرحمن
        </NavLink>
        <NavLink onClick={toZero} to="/056">
          056 - الواقعة
        </NavLink>
        <NavLink onClick={toZero} to="/057">
          057 - الحديد
        </NavLink>
        <NavLink onClick={toZero} to="/058">
          058 - المجادلة
        </NavLink>
        <NavLink onClick={toZero} to="/059">
          059 - الحشر
        </NavLink>
        <NavLink onClick={toZero} to="/060">
          060 - الممتحنة
        </NavLink>
        <NavLink onClick={toZero} to="/061">
          061 - الصف
        </NavLink>
        <NavLink onClick={toZero} to="/062">
          062 - الجمعة
        </NavLink>
        <NavLink onClick={toZero} to="/063">
          063 - المنافقون
        </NavLink>
        <NavLink onClick={toZero} to="/064">
          064 - التغابن
        </NavLink>
        <NavLink onClick={toZero} to="/065">
          065 - الطلاق
        </NavLink>
        <NavLink onClick={toZero} to="/066">
          066 - التحريم
        </NavLink>
        <NavLink onClick={toZero} to="/067">
          067 - الملك
        </NavLink>
        <NavLink onClick={toZero} to="/068">
          068 - القلم
        </NavLink>
        <NavLink onClick={toZero} to="/069">
          069 - الحاقة
        </NavLink>
        <NavLink onClick={toZero} to="/070">
          070 - المعارج
        </NavLink>
        <NavLink onClick={toZero} to="/071">
          071 - نوح
        </NavLink>
        <NavLink onClick={toZero} to="/072">
          072 - الجن
        </NavLink>
        <NavLink onClick={toZero} to="/073">
          073 - المزمل
        </NavLink>
        <NavLink onClick={toZero} to="/074">
          074 - المدثر
        </NavLink>
        <NavLink onClick={toZero} to="/075">
          075 - القيامة
        </NavLink>
        <NavLink onClick={toZero} to="/076">
          076 - الإنسان
        </NavLink>
        <NavLink onClick={toZero} to="/077">
          077 - المرسلات
        </NavLink>
        <NavLink onClick={toZero} to="/078">
          078 - النبأ
        </NavLink>
        <NavLink onClick={toZero} to="/079">
          079 - النازعات
        </NavLink>
        <NavLink onClick={toZero} to="/080">
          080 - عبس
        </NavLink>
        <NavLink onClick={toZero} to="/081">
          081 - التكوير
        </NavLink>
        <NavLink onClick={toZero} to="/082">
          082 - الإنفطار
        </NavLink>
        <NavLink onClick={toZero} to="/083">
          083 - المطففين
        </NavLink>
        <NavLink onClick={toZero} to="/084">
          084 - الإنشقاق
        </NavLink>
        <NavLink onClick={toZero} to="/085">
          085 - البروج
        </NavLink>
        <NavLink onClick={toZero} to="/086">
          086 - الطارق
        </NavLink>
        <NavLink onClick={toZero} to="/087">
          087 - الأعلي
        </NavLink>
        <NavLink onClick={toZero} to="/088">
          088 - الغاشية
        </NavLink>
        <NavLink onClick={toZero} to="/089">
          089 - الفجر
        </NavLink>
        <NavLink onClick={toZero} to="/090">
          090 - البلد
        </NavLink>
        <NavLink onClick={toZero} to="/091">
          091 - الشمس
        </NavLink>
        <NavLink onClick={toZero} to="/092">
          092 - الليل
        </NavLink>
        <NavLink onClick={toZero} to="/093">
          093 - الضحي
        </NavLink>
        <NavLink onClick={toZero} to="/094">
          094 - الشرح
        </NavLink>
        <NavLink onClick={toZero} to="/095">
          095 - التين
        </NavLink>
        <NavLink onClick={toZero} to="/096">
          096 - العلق
        </NavLink>
        <NavLink onClick={toZero} to="/097">
          097 - القدر
        </NavLink>
        <NavLink onClick={toZero} to="/098">
          098 - البينة
        </NavLink>
        <NavLink onClick={toZero} to="/099">
          099 - الزلزلة
        </NavLink>
        <NavLink onClick={toZero} to="/100">
          100 - العاديات
        </NavLink>
        <NavLink onClick={toZero} to="/101">
          101 - القارعة
        </NavLink>
        <NavLink onClick={toZero} to="/102">
          102 - التكاثر
        </NavLink>
        <NavLink onClick={toZero} to="/103">
          103 - العصر
        </NavLink>
        <NavLink onClick={toZero} to="/104">
          104 - الهمزة
        </NavLink>
        <NavLink onClick={toZero} to="/105">
          105 - الفيل
        </NavLink>
        <NavLink onClick={toZero} to="/106">
          106 - قريش
        </NavLink>
        <NavLink onClick={toZero} to="/107">
          107 - الماعون
        </NavLink>
        <NavLink onClick={toZero} to="/108">
          108 - الكوثر
        </NavLink>
        <NavLink onClick={toZero} to="/109">
          109 - الكافرون
        </NavLink>
        <NavLink onClick={toZero} to="/110">
          110 - النصر
        </NavLink>
        <NavLink onClick={toZero} to="/111">
          111 - المسد
        </NavLink>
        <NavLink onClick={toZero} to="/112">
          112 - الإخلاص
        </NavLink>
        <NavLink onClick={toZero} to="/113">
          113 - الفلق
        </NavLink>
        <NavLink onClick={toZero} to="/114">
          114 - الناس
        </NavLink>
      </div>
    </div>
  );
};

export default MenuTwo;

function toZero() {
  document.documentElement.scrollTop = 120;

  hideMenuTwoDiv();
}

function hideMenuTwoDiv() {
  const menuTwoDiv = document.querySelector(".menuTwoDiv");
  const menuTwo = document.querySelector(".menuTwo");
  const highlight = document.querySelector(".highlight");
  const leanThree = document.querySelector(".leanThree");
  const leanTwo = document.querySelector(".leanTwo");

  leanTwo.classList.remove("leanTwoHide");
  leanThree.classList.remove("leanThreeShow");
  menuTwo.classList.add("menuTwoDivHide");
  highlight.classList.add("highlightHide");
  setTimeout(() => {
    menuTwoDiv.classList.remove("menuTwoDivShow");
  }, 300);

  document.body.style.overflow = "overlay";
}
