import React from "react";
import { Helmet } from "react-helmet-async";
import Down from "../Components/downIcon";
import Header from "../Components/Header";
import Menu from "../Components/menu";
import Footer from "../Components/Footer";
import MenuTwo from "../Components/menuTwo";

const FiftyOne = () => {
  return (
    <div>
      <Helmet>
        <title>051 - سورة الذاريات</title>
      </Helmet>
      <Header />
      <Menu />
      <MenuTwo />
      <div className="sura">
        <p className="suraTitle">سورة الذاريات</p>
        <p className="suraStart">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="suraWords">
          وَٱلذَّٰرِيَٰتِ ذَرۡوٗا
          <span className="numberTheme"> (1) </span> فَٱلۡحَٰمِلَٰتِ وِقۡرٗا
          <span className="numberTheme"> (2) </span>
          فَٱلۡجَٰرِيَٰتِ يُسۡرٗا
          <span className="numberTheme"> (3) </span> فَٱلۡمُقَسِّمَٰتِ أَمۡرًا
          <span className="numberTheme"> (4) </span> إِنَّمَا تُوعَدُونَ
          لَصَادِقٞ
          <span className="numberTheme"> (5) </span> وَإِنَّ ٱلدِّينَ لَوَٰقِعٞ
          <span className="numberTheme"> (6) </span> وَٱلسَّمَآءِ ذَاتِ
          ٱلۡحُبُكِ
          <span className="numberTheme"> (7) </span> إِنَّكُمۡ لَفِي قَوۡلٖ
          مُّخۡتَلِفٖ
          <span className="numberTheme"> (8) </span> يُؤۡفَكُ عَنۡهُ مَنۡ أُفِكَ
          <span className="numberTheme"> (9) </span> قُتِلَ ٱلۡخَرَّٰصُونَ
          <span className="numberTheme"> (10) </span> ٱلَّذِينَ هُمۡ فِي
          غَمۡرَةٖ سَاهُونَ
          <span className="numberTheme"> (11) </span> يَسۡـَٔلُونَ أَيَّانَ
          يَوۡمُ ٱلدِّينِ
          <span className="numberTheme"> (12) </span>
          يَوۡمَ هُمۡ عَلَى ٱلنَّارِ يُفۡتَنُونَ
          <span className="numberTheme"> (13) </span> ذُوقُواْ فِتۡنَتَكُمۡ
          هَٰذَا ٱلَّذِي كُنتُم بِهِۦ تَسۡتَعۡجِلُونَ
          <span className="numberTheme"> (14) </span> إِنَّ ٱلۡمُتَّقِينَ فِي
          جَنَّٰتٖ وَعُيُونٍ
          <span className="numberTheme"> (15) </span> ءَاخِذِينَ مَآ
          ءَاتَىٰهُمۡ رَبُّهُمۡۚ إِنَّهُمۡ كَانُواْ قَبۡلَ ذَٰلِكَ مُحۡسِنِينَ
          <span className="numberTheme"> (16) </span> كَانُواْ قَلِيلٗا مِّنَ
          ٱلَّيۡلِ مَا يَهۡجَعُونَ
          <span className="numberTheme"> (17) </span> وَبِٱلۡأَسۡحَارِ هُمۡ
          يَسۡتَغۡفِرُونَ
          <span className="numberTheme"> (18) </span> وَفِيٓ أَمۡوَٰلِهِمۡ حَقّٞ
          لِّلسَّآئِلِ وَٱلۡمَحۡرُومِ
          <span className="numberTheme"> (19) </span> وَفِي ٱلۡأَرۡضِ ءَايَٰتٞ
          لِّلۡمُوقِنِينَ
          <span className="numberTheme"> (20) </span>
          وَفِيٓ أَنفُسِكُمۡۚ أَفَلَا تُبۡصِرُونَ
          <span className="numberTheme"> (21) </span> وَفِي ٱلسَّمَآءِ
          رِزۡقُكُمۡ وَمَا تُوعَدُونَ
          <span className="numberTheme"> (22) </span> فَوَرَبِّ ٱلسَّمَآءِ
          وَٱلۡأَرۡضِ إِنَّهُۥ لَحَقّٞ مِّثۡلَ مَآ أَنَّكُمۡ تَنطِقُونَ
          <span className="numberTheme"> (23) </span> هَلۡ أَتَىٰكَ حَدِيثُ
          ضَيۡفِ إِبۡرَٰهِيمَ ٱلۡمُكۡرَمِينَ
          <span className="numberTheme"> (24) </span> إِذۡ دَخَلُواْ عَلَيۡهِ
          فَقَالُواْ سَلَٰمٗاۖ قَالَ سَلَٰمٞ قَوۡمٞ مُّنكَرُونَ
          <span className="numberTheme"> (25) </span>
          فَرَاغَ إِلَىٰٓ أَهۡلِهِۦ فَجَآءَ بِعِجۡلٖ سَمِينٖ
          <span className="numberTheme"> (26) </span> فَقَرَّبَهُۥٓ إِلَيۡهِمۡ
          قَالَ أَلَا تَأۡكُلُونَ
          <span className="numberTheme"> (27) </span> فَأَوۡجَسَ مِنۡهُمۡ
          خِيفَةٗۖ قَالُواْ لَا تَخَفۡۖ وَبَشَّرُوهُ بِغُلَٰمٍ عَلِيمٖ
          <span className="numberTheme"> (28) </span> فَأَقۡبَلَتِ ٱمۡرَأَتُهُۥ
          فِي صَرَّةٖ فَصَكَّتۡ وَجۡهَهَا وَقَالَتۡ عَجُوزٌ عَقِيمٞ
          <span className="numberTheme"> (29) </span> قَالُواْ كَذَٰلِكِ قَالَ
          رَبُّكِۖ إِنَّهُۥ هُوَ ٱلۡحَكِيمُ ٱلۡعَلِيمُ
          <span className="numberTheme"> (30) </span>
          <span className="partTheme"> ۞ </span>قَالَ فَمَا خَطۡبُكُمۡ أَيُّهَا
          ٱلۡمُرۡسَلُونَ
          <span className="numberTheme"> (31) </span>
          قَالُوٓاْ إِنَّآ أُرۡسِلۡنَآ إِلَىٰ قَوۡمٖ مُّجۡرِمِينَ
          <span className="numberTheme"> (32) </span>
          لِنُرۡسِلَ عَلَيۡهِمۡ حِجَارَةٗ مِّن طِينٖ
          <span className="numberTheme"> (33) </span> مُّسَوَّمَةً عِندَ رَبِّكَ
          لِلۡمُسۡرِفِينَ
          <span className="numberTheme"> (34) </span> فَأَخۡرَجۡنَا مَن كَانَ
          فِيهَا مِنَ ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (35) </span> فَمَا وَجَدۡنَا فِيهَا
          غَيۡرَ بَيۡتٖ مِّنَ ٱلۡمُسۡلِمِينَ
          <span className="numberTheme"> (36) </span> وَتَرَكۡنَا فِيهَآ
          ءَايَةٗ لِّلَّذِينَ يَخَافُونَ ٱلۡعَذَابَ ٱلۡأَلِيمَ
          <span className="numberTheme"> (37) </span> وَفِي مُوسَىٰٓ إِذۡ
          أَرۡسَلۡنَٰهُ إِلَىٰ فِرۡعَوۡنَ بِسُلۡطَٰنٖ مُّبِينٖ
          <span className="numberTheme"> (38) </span> فَتَوَلَّىٰ بِرُكۡنِهِۦ
          وَقَالَ سَٰحِرٌ أَوۡ مَجۡنُونٞ
          <span className="numberTheme"> (39) </span> فَأَخَذۡنَٰهُ وَجُنُودَهُۥ
          فَنَبَذۡنَٰهُمۡ فِي ٱلۡيَمِّ وَهُوَ مُلِيمٞ
          <span className="numberTheme"> (40) </span> وَفِي عَادٍ إِذۡ
          أَرۡسَلۡنَا عَلَيۡهِمُ ٱلرِّيحَ ٱلۡعَقِيمَ
          <span className="numberTheme"> (41) </span> مَا تَذَرُ مِن شَيۡءٍ
          أَتَتۡ عَلَيۡهِ إِلَّا جَعَلَتۡهُ كَٱلرَّمِيمِ
          <span className="numberTheme"> (42) </span> وَفِي ثَمُودَ إِذۡ قِيلَ
          لَهُمۡ تَمَتَّعُواْ حَتَّىٰ حِينٖ
          <span className="numberTheme"> (43) </span> فَعَتَوۡاْ عَنۡ أَمۡرِ
          رَبِّهِمۡ فَأَخَذَتۡهُمُ ٱلصَّٰعِقَةُ وَهُمۡ يَنظُرُونَ
          <span className="numberTheme"> (44) </span> فَمَا ٱسۡتَطَٰعُواْ مِن
          قِيَامٖ وَمَا كَانُواْ مُنتَصِرِينَ
          <span className="numberTheme"> (45) </span> وَقَوۡمَ نُوحٖ مِّن
          قَبۡلُۖ إِنَّهُمۡ كَانُواْ قَوۡمٗا فَٰسِقِينَ
          <span className="numberTheme"> (46) </span>
          وَٱلسَّمَآءَ بَنَيۡنَٰهَا بِأَيۡيْدٖ وَإِنَّا لَمُوسِعُونَ
          <span className="numberTheme"> (47) </span>
          وَٱلۡأَرۡضَ فَرَشۡنَٰهَا فَنِعۡمَ ٱلۡمَٰهِدُونَ
          <span className="numberTheme"> (48) </span> وَمِن كُلِّ شَيۡءٍ
          خَلَقۡنَا زَوۡجَيۡنِ لَعَلَّكُمۡ تَذَكَّرُونَ
          <span className="numberTheme"> (49) </span> فَفِرُّوٓاْ إِلَى ٱللَّهِۖ
          إِنِّي لَكُم مِّنۡهُ نَذِيرٞ مُّبِينٞ
          <span className="numberTheme"> (50) </span> وَلَا تَجۡعَلُواْ مَعَ
          ٱللَّهِ إِلَٰهًا ءَاخَرَۖ إِنِّي لَكُم مِّنۡهُ نَذِيرٞ مُّبِينٞ
          <span className="numberTheme"> (51) </span> كَذَٰلِكَ مَآ أَتَى
          ٱلَّذِينَ مِن قَبۡلِهِم مِّن رَّسُولٍ إِلَّا قَالُواْ سَاحِرٌ أَوۡ
          مَجۡنُونٌ
          <span className="numberTheme"> (52) </span>
          أَتَوَاصَوۡاْ بِهِۦۚ بَلۡ هُمۡ قَوۡمٞ طَاغُونَ
          <span className="numberTheme"> (53) </span> فَتَوَلَّ عَنۡهُمۡ فَمَآ
          أَنتَ بِمَلُومٖ
          <span className="numberTheme"> (54) </span> وَذَكِّرۡ فَإِنَّ
          ٱلذِّكۡرَىٰ تَنفَعُ ٱلۡمُؤۡمِنِينَ
          <span className="numberTheme"> (55) </span> وَمَا خَلَقۡتُ ٱلۡجِنَّ
          وَٱلۡإِنسَ إِلَّا لِيَعۡبُدُونِ
          <span className="numberTheme"> (56) </span> مَآ أُرِيدُ مِنۡهُم مِّن
          رِّزۡقٖ وَمَآ أُرِيدُ أَن يُطۡعِمُونِ
          <span className="numberTheme"> (57) </span> إِنَّ ٱللَّهَ هُوَ
          ٱلرَّزَّاقُ ذُو ٱلۡقُوَّةِ ٱلۡمَتِينُ
          <span className="numberTheme"> (58) </span> فَإِنَّ لِلَّذِينَ
          ظَلَمُواْ ذَنُوبٗا مِّثۡلَ ذَنُوبِ أَصۡحَٰبِهِمۡ فَلَا يَسۡتَعۡجِلُونِ
          <span className="numberTheme"> (59) </span> فَوَيۡلٞ لِّلَّذِينَ
          كَفَرُواْ مِن يَوۡمِهِمُ ٱلَّذِي يُوعَدُونَ
          <span className="numberTheme"> (60) </span>
        </p>
        <p className="suraEnd">صَدَقَ اللهُ العَظيمُ</p>
      </div>
      <Footer />
      <Down />
    </div>
  );
};

export default FiftyOne;
