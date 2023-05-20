import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const FiftyThree = () => {
  return (
    <div>
      <Helmet>
        <title>053 - سورة النجم</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة النجم</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلنَّجۡمِ إِذَا هَوَىٰ
          <span className="numberTheme"> (1) </span> مَا ضَلَّ صَاحِبُكُمۡ وَمَا
          غَوَىٰ
          <span className="numberTheme"> (2) </span>
          وَمَا يَنطِقُ عَنِ ٱلۡهَوَىٰٓ
          <span className="numberTheme"> (3) </span> إِنۡ هُوَ إِلَّا وَحۡيٞ
          يُوحَىٰ
          <span className="numberTheme"> (4) </span>
          عَلَّمَهُۥ شَدِيدُ ٱلۡقُوَىٰ
          <span className="numberTheme"> (5) </span> ذُو مِرَّةٖ فَٱسۡتَوَىٰ
          <span className="numberTheme"> (6) </span> وَهُوَ بِٱلۡأُفُقِ
          ٱلۡأَعۡلَىٰ
          <span className="numberTheme"> (7) </span> ثُمَّ دَنَا فَتَدَلَّىٰ
          <span className="numberTheme"> (8) </span> فَكَانَ قَابَ قَوۡسَيۡنِ
          أَوۡ أَدۡنَىٰ
          <span className="numberTheme"> (9) </span> فَأَوۡحَىٰٓ إِلَىٰ
          عَبۡدِهِۦ مَآ أَوۡحَىٰ
          <span className="numberTheme"> (10) </span> مَا كَذَبَ ٱلۡفُؤَادُ مَا
          رَأَىٰٓ
          <span className="numberTheme"> (11) </span> أَفَتُمَٰرُونَهُۥ عَلَىٰ
          مَا يَرَىٰ
          <span className="numberTheme"> (12) </span> وَلَقَدۡ رَءَاهُ نَزۡلَةً
          أُخۡرَىٰ
          <span className="numberTheme"> (13) </span> عِندَ سِدۡرَةِ
          ٱلۡمُنتَهَىٰ
          <span className="numberTheme"> (14) </span> عِندَهَا جَنَّةُ
          ٱلۡمَأۡوَىٰٓ
          <span className="numberTheme"> (15) </span> إِذۡ يَغۡشَى ٱلسِّدۡرَةَ
          مَا يَغۡشَىٰ
          <span className="numberTheme"> (16) </span> مَا زَاغَ ٱلۡبَصَرُ وَمَا
          طَغَىٰ
          <span className="numberTheme"> (17) </span> لَقَدۡ رَأَىٰ مِنۡ
          ءَايَٰتِ رَبِّهِ ٱلۡكُبۡرَىٰٓ
          <span className="numberTheme"> (18) </span>
          أَفَرَءَيۡتُمُ ٱللَّٰتَ وَٱلۡعُزَّىٰ
          <span className="numberTheme"> (19) </span> وَمَنَوٰةَ ٱلثَّالِثَةَ
          ٱلۡأُخۡرَىٰٓ
          <span className="numberTheme"> (20) </span> أَلَكُمُ ٱلذَّكَرُ وَلَهُ
          ٱلۡأُنثَىٰ
          <span className="numberTheme"> (21) </span> تِلۡكَ إِذٗا قِسۡمَةٞ
          ضِيزَىٰٓ
          <span className="numberTheme"> (22) </span> إِنۡ هِيَ إِلَّآ
          أَسۡمَآءٞ سَمَّيۡتُمُوهَآ أَنتُمۡ وَءَابَآؤُكُم مَّآ أَنزَلَ
          ٱللَّهُ بِهَا مِن سُلۡطَٰنٍۚ إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّ وَمَا
          تَهۡوَى ٱلۡأَنفُسُۖ وَلَقَدۡ جَآءَهُم مِّن رَّبِّهِمُ ٱلۡهُدَىٰٓ
          <span className="numberTheme"> (23) </span> أَمۡ لِلۡإِنسَٰنِ مَا
          تَمَنَّىٰ
          <span className="numberTheme"> (24) </span> فَلِلَّهِ ٱلۡأٓخِرَةُ
          وَٱلۡأُولَىٰ
          <span className="numberTheme"> (25) </span>
          <span className="partTheme"> ۞ </span>وَكَم مِّن مَّلَكٖ فِي
          ٱلسَّمَٰوَٰتِ لَا تُغۡنِي شَفَٰعَتُهُمۡ شَيۡـًٔا إِلَّا مِنۢ بَعۡدِ
          أَن يَأۡذَنَ ٱللَّهُ لِمَن يَشَآءُ وَيَرۡضَىٰٓ
          <span className="numberTheme"> (26) </span> إِنَّ ٱلَّذِينَ لَا
          يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ لَيُسَمُّونَ ٱلۡمَلَٰٓئِكَةَ تَسۡمِيَةَ
          ٱلۡأُنثَىٰ
          <span className="numberTheme"> (27) </span> وَمَا لَهُم بِهِۦ مِنۡ
          عِلۡمٍۖ إِن يَتَّبِعُونَ إِلَّا ٱلظَّنَّۖ وَإِنَّ ٱلظَّنَّ لَا يُغۡنِي
          مِنَ ٱلۡحَقِّ شَيۡـٔٗا
          <span className="numberTheme"> (28) </span> فَأَعۡرِضۡ عَن مَّن
          تَوَلَّىٰ عَن ذِكۡرِنَا وَلَمۡ يُرِدۡ إِلَّا ٱلۡحَيَوٰةَ ٱلدُّنۡيَا
          <span className="numberTheme"> (29) </span> ذَٰلِكَ مَبۡلَغُهُم مِّنَ
          ٱلۡعِلۡمِۚ إِنَّ رَبَّكَ هُوَ أَعۡلَمُ بِمَن ضَلَّ عَن سَبِيلِهِۦ
          وَهُوَ أَعۡلَمُ بِمَنِ ٱهۡتَدَىٰ
          <span className="numberTheme"> (30) </span> وَلِلَّهِ مَا فِي
          ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِ لِيَجۡزِيَ ٱلَّذِينَ أَسَٰٓـُٔواْ
          بِمَا عَمِلُواْ وَيَجۡزِيَ ٱلَّذِينَ أَحۡسَنُواْ بِٱلۡحُسۡنَى
          <span className="numberTheme"> (31) </span>
          ٱلَّذِينَ يَجۡتَنِبُونَ كَبَٰٓئِرَ ٱلۡإِثۡمِ وَٱلۡفَوَٰحِشَ إِلَّا
          ٱللَّمَمَۚ إِنَّ رَبَّكَ وَٰسِعُ ٱلۡمَغۡفِرَةِۚ هُوَ أَعۡلَمُ بِكُمۡ
          إِذۡ أَنشَأَكُم مِّنَ ٱلۡأَرۡضِ وَإِذۡ أَنتُمۡ أَجِنَّةٞ فِي بُطُونِ
          أُمَّهَٰتِكُمۡۖ فَلَا تُزَكُّوٓاْ أَنفُسَكُمۡۖ هُوَ أَعۡلَمُ بِمَنِ
          ٱتَّقَىٰٓ
          <span className="numberTheme"> (32) </span> أَفَرَءَيۡتَ ٱلَّذِي
          تَوَلَّىٰ
          <span className="numberTheme"> (33) </span> وَأَعۡطَىٰ قَلِيلٗا
          وَأَكۡدَىٰٓ
          <span className="numberTheme"> (34) </span> أَعِندَهُۥ عِلۡمُ
          ٱلۡغَيۡبِ فَهُوَ يَرَىٰٓ
          <span className="numberTheme"> (35) </span> أَمۡ لَمۡ يُنَبَّأۡ بِمَا
          فِي صُحُفِ مُوسَىٰ
          <span className="numberTheme"> (36) </span> وَإِبۡرَٰهِيمَ ٱلَّذِي
          وَفَّىٰٓ
          <span className="numberTheme"> (37) </span> أَلَّا تَزِرُ وَازِرَةٞ
          وِزۡرَ أُخۡرَىٰ
          <span className="numberTheme"> (38) </span> وَأَن لَّيۡسَ لِلۡإِنسَٰنِ
          إِلَّا مَا سَعَىٰ
          <span className="numberTheme"> (39) </span> وَأَنَّ سَعۡيَهُۥ سَوۡفَ
          يُرَىٰ
          <span className="numberTheme"> (40) </span> ثُمَّ يُجۡزَىٰهُ
          ٱلۡجَزَآءَ ٱلۡأَوۡفَىٰ
          <span className="numberTheme"> (41) </span> وَأَنَّ إِلَىٰ رَبِّكَ
          ٱلۡمُنتَهَىٰ
          <span className="numberTheme"> (42) </span> وَأَنَّهُۥ هُوَ أَضۡحَكَ
          وَأَبۡكَىٰ
          <span className="numberTheme"> (43) </span> وَأَنَّهُۥ هُوَ أَمَاتَ
          وَأَحۡيَا
          <span className="numberTheme"> (44) </span> وَأَنَّهُۥ خَلَقَ
          ٱلزَّوۡجَيۡنِ ٱلذَّكَرَ وَٱلۡأُنثَىٰ
          <span className="numberTheme"> (45) </span> مِن نُّطۡفَةٍ إِذَا
          تُمۡنَىٰ
          <span className="numberTheme"> (46) </span> وَأَنَّ عَلَيۡهِ
          ٱلنَّشۡأَةَ ٱلۡأُخۡرَىٰ
          <span className="numberTheme"> (47) </span> وَأَنَّهُۥ هُوَ أَغۡنَىٰ
          وَأَقۡنَىٰ
          <span className="numberTheme"> (48) </span> وَأَنَّهُۥ هُوَ رَبُّ
          ٱلشِّعۡرَىٰ
          <span className="numberTheme"> (49) </span>
          وَأَنَّهُۥٓ أَهۡلَكَ عَادًا ٱلۡأُولَىٰ
          <span className="numberTheme"> (50) </span> وَثَمُودَاْ فَمَآ
          أَبۡقَىٰ
          <span className="numberTheme"> (51) </span> وَقَوۡمَ نُوحٖ مِّن
          قَبۡلُۖ إِنَّهُمۡ كَانُواْ هُمۡ أَظۡلَمَ وَأَطۡغَىٰ
          <span className="numberTheme"> (52) </span> وَٱلۡمُؤۡتَفِكَةَ أَهۡوَىٰ
          <span className="numberTheme"> (53) </span> فَغَشَّىٰهَا مَا غَشَّىٰ
          <span className="numberTheme"> (54) </span> فَبِأَيِّ ءَالَآءِ
          رَبِّكَ تَتَمَارَىٰ
          <span className="numberTheme"> (55) </span> هَٰذَا نَذِيرٞ مِّنَ
          ٱلنُّذُرِ ٱلۡأُولَىٰٓ
          <span className="numberTheme"> (56) </span> أَزِفَتِ ٱلۡأٓزِفَةُ
          <span className="numberTheme"> (57) </span>
          لَيۡسَ لَهَا مِن دُونِ ٱللَّهِ كَاشِفَةٌ
          <span className="numberTheme"> (58) </span> أَفَمِنۡ هَٰذَا ٱلۡحَدِيثِ
          تَعۡجَبُونَ
          <span className="numberTheme"> (59) </span> وَتَضۡحَكُونَ وَلَا
          تَبۡكُونَ
          <span className="numberTheme"> (60) </span>
          وَأَنتُمۡ سَٰمِدُونَ
          <span className="numberTheme"> (61) </span> فَٱسۡجُدُواْۤ لِلَّهِۤ
          وَٱعۡبُدُواْ۩
          <span className="numberTheme"> (62) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default FiftyThree;
